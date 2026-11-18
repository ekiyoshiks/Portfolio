// Gera as páginas finais (index.html e about.html na raiz do projeto) a partir de src/.
//
// O que faz:
//   • troca cada <link rel="stylesheet" href="css/..."> pelo conteúdo do CSS (inline)
//   • troca cada <script src="js/..."></script> pelo conteúdo do JS (inline)
//   • troca os caminhos de imagem (assets/...) por data URI (imagem embutida)
//   • copia o PDF do currículo para a raiz
//
// Resultado: arquivos 100% autocontidos, que funcionam em qualquer hospedagem
// (Vercel, GitHub Pages) e até abrindo com duplo clique. Sem dependências: só Node 18+.
//
// Uso:  node scripts/build.mjs

import { readFileSync, writeFileSync, copyFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src');
// fonte (src/) -> arquivo gerado (raiz). Os nomes de origem são diferentes dos de saída
// de propósito: assim, nada em src/ pode sobrescrever index.html/about.html por engano.
const pages = { 'home.html': 'index.html', 'about-page.html': 'about.html' };
const mime = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
const imageCache = new Map();

function read(file) {
  if (!existsSync(file)) throw new Error('Arquivo não encontrado: ' + file);
  return readFileSync(file, 'utf8');
}

function dataUri(relPath) {
  if (!imageCache.has(relPath)) {
    const buf = readFileSync(join(src, relPath));
    imageCache.set(relPath, `data:${mime[extname(relPath).toLowerCase()]};base64,${buf.toString('base64')}`);
  }
  return imageCache.get(relPath);
}

function build(source, output) {
  let html = read(join(src, source));

  // CSS
  html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (_, href) =>
    `<style>\n/* ${href} */\n${read(join(src, href)).trim()}\n</style>`);

  // JS
  html = html.replace(/<script src="([^"]+)"><\/script>/g, (_, href) =>
    `<script>\n// ${href}\n${read(join(src, href)).trim().replace(/<\/script/gi, '<\\/script')}\n</script>`);

  // Imagens: qualquer caminho assets/....(jpg|png|webp|svg) vira data URI
  html = html.replace(/assets\/[\w\-./]+\.(?:jpe?g|png|webp|svg)/gi, (p) => dataUri(p));

  // PDF do currículo fica na raiz, ao lado do index.html
  html = html.replace(/assets\/cv\//g, '');

  writeFileSync(join(root, output), html);
  console.log(`✔ ${output}  (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)`);
}

Object.entries(pages).forEach(([source, output]) => build(source, output));

for (const f of readdirSync(join(src, 'assets', 'cv')).filter((f) => f.endsWith('.pdf'))) {
  copyFileSync(join(src, 'assets', 'cv', f), join(root, f));
  console.log(`✔ ${f}`);
}
