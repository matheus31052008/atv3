// Seleciona o botão e o texto
const botao = document.getElementById('botao');
const texto = document.getElementById('texto');

// Adiciona um ouvinte de evento ao botão
botao.addEventListener('click', function () {
  texto.style.color = 'red', 'blue', 'green', 'orange', 'purple', 'pink', 'teal', 'gold', 'magenta';
});

// Exibe o código JS na página como exemplo
const codigoVisivel = `const botao = document.getElementById('botao');
const texto = document.getElementById('texto');

botao.addEventListener('click', function () {
  texto.style.color = 'red';
});`;

document.getElementById('codigo-js').textContent = codigoVisivel;
