// Lista de certificados. Para adicionar um novo:
//   1) coloque a imagem (JPG) em src/assets/certificates/
//   2) adicione um item na categoria desejada abaixo
//   3) rode:  node scripts/build.mjs
// Os nomes das categorias são traduzidos em js/i18n/home.js (chaves cat.*).
window.CERTIFICATES = [
  {
    key: 'dev', label: 'Programming & Development',
    items: [
      { img: 'assets/certificates/pensamento-computacional.jpg', title: 'Introdução ao Pensamento Computacional', issuer: 'Mackenzie', hours: '24h', date: '07/2026' },
      { img: 'assets/certificates/poo-swift.jpg', title: 'Programação Orientada a Objetos com Swift', issuer: 'Mackenzie', hours: '24h', date: '09/2025' },
      { img: 'assets/certificates/foundation-ios.jpg', title: 'Foundation iOS', issuer: 'Mackenzie', hours: '24h', date: '08/2025' },
      { img: 'assets/certificates/logica-swift.jpg', title: 'Lógica de Programação com Swift', issuer: 'Mackenzie', hours: '24h', date: '06/2025' }
    ]
  },
  {
    key: 'data', label: 'Data & Artificial Intelligence',
    items: [
      { img: 'assets/certificates/n8n.jpg', title: 'Primeiros Passos com N8N', issuer: 'DIO', hours: '1h', date: '10/2026' },
      { img: 'assets/certificates/conquer-ia.jpg', title: 'Inteligência Artificial: eleve sua produtividade', issuer: 'Conquer Business School', hours: '10h', date: '06/2024' },
      { img: 'assets/certificates/r-data-science-ibm.jpg', title: 'R for Data Science', issuer: 'IBM · Cognitive Class', hours: '', date: '05/2023' },
      { img: 'assets/certificates/ml-python-ibm.jpg', title: 'Machine Learning with Python', issuer: 'IBM · Cognitive Class', hours: '', date: '05/2023' }
    ]
  },
  {
    key: 'design', label: 'Design',
    items: [
      { img: 'assets/certificates/foundation-design-ios.jpg', title: 'Foundation Design iOS', issuer: 'Mackenzie', hours: '24h', date: '07/2026' },
      { img: 'assets/certificates/tipografia.jpg', title: 'Se expressando com tipos: o poder da tipografia no design', issuer: 'Mackenzie', hours: '24h', date: '03/2026' }
    ]
  },
  {
    key: 'biz', label: 'Economics & Business',
    items: [
      { img: 'assets/certificates/fgv-empreendedorismo.jpg', title: 'Empreendedorismo para o Mercado Financeiro', issuer: 'FGV Online', hours: '8h', date: '08/2025' }
    ]
  }
];
