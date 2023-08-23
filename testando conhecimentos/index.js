const starButtons = document.querySelectorAll ('.button');

function toggleStar() {
  this.classList.toggle('active');
}

starButtons.forEach(function(button) {
  button.addEventListener('click', toggleStar);
});

function crescerImagem() {
  // Coloque aqui o código que deseja executar quando a imagem for clicada
  console.log("Imagem clicada!");
}