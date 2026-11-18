<div align="center">

# Enzo Kiyoshi — Portfólio

Portfólio pessoal de **Enzo Kiyoshi Kagueyama Sampaio** — estudante de Ciência da Computação, desenvolvedor e atleta profissional de handebol.

Feito com **HTML, CSS e JavaScript puros** — sem frameworks e sem dependências em tempo de execução.

🔗 **Site no ar:** [kiyoshi-portfolio.vercel.app](https://kiyoshi-portfolio.vercel.app/)

[🇺🇸 English](README.md) · 🇧🇷 Português

</div>

---

## Visão geral

Um portfólio rápido, responsivo e multilíngue, com visual escuro e editorial: tipografia serifada grande, fundo em grade sutil e uma barra lateral minimalista com ícones.

### Recursos

- **Tema escuro / claro** — alternado pela barra lateral, com a preferência salva no navegador
- **4 idiomas** — inglês, português, francês e espanhol, com seletor sempre visível no topo da página
- **Layout responsivo** — barra lateral de ícones no desktop e menu hambúrguer no celular
- **Certificados por categoria** — Programação & Desenvolvimento, Dados & IA, Design e Economia & Negócios — cada um abre em um visualizador ampliado (setas do teclado, `Esc` e clique fora para fechar)
- **Página Sobre detalhada** — linhas do tempo de formação e experiência, habilidades e idiomas
- **Download do currículo** — em um clique, na página inicial e na página Sobre
- **Animações ao rolar e navegação com scroll-spy**, sem biblioteca de animação

## Tecnologias

| | |
|---|---|
| Marcação | HTML5 semântico |
| Estilo | Variáveis CSS (temas), Grid e Flexbox — um arquivo por assunto |
| Comportamento | JavaScript puro (módulos compatíveis com ES5, sem bundler) |
| i18n | Tradução leve baseada em dicionários (atributos `data-i18n`) |
| Build | Um único script Node sem dependências que empacota o código-fonte em páginas autocontidas |
| Hospedagem | Estática — funciona na Vercel, no GitHub Pages ou em qualquer host estático |

## Estrutura do projeto

```
.
├── index.html · about.html     Páginas geradas e autocontidas (o que é publicado)
├── Curriculo_Enzo_Kiyoshi.pdf  Currículo
├── src/                        Código-fonte
│   ├── home.html · about-page.html  Estrutura das páginas
│   ├── css/                    Estilos (base, layout, sidebar, hero, certificados, …)
│   ├── js/                     Tema, i18n, ampliação, scroll-spy, animações, certificados
│   │   └── i18n/               Traduções (EN / PT / FR / ES)
│   └── assets/                 Imagens dos certificados e PDF do currículo
└── scripts/build.mjs           Empacota o src/ nas páginas da raiz
```

## Rodando localmente

Não precisa instalar nada: abra `src/home.html` no navegador para rodar a versão de código-fonte, ou `index.html` na raiz para a versão final.

Para gerar novamente as páginas depois de alterar o código-fonte (Node.js 18+):

```bash
node scripts/build.mjs
```

O build embute CSS, JavaScript e imagens em `index.html` e `about.html`, então o site funciona em qualquer host sem configuração.

## Deploy

O projeto é um site estático: importe o repositório na [Vercel](https://vercel.com) (ou ative o GitHub Pages) e publique com as configurações padrão.

## Contato

- **GitHub** — [@ekiyoshiks](https://github.com/ekiyoshiks)
- **LinkedIn** — [Enzo Sampaio](https://www.linkedin.com/in/enzo-sampaio-460541239/)
- **E-mail** — [kiyoshienzo@gmail.com](mailto:kiyoshienzo@gmail.com)
