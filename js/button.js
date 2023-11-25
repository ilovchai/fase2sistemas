
document.addEventListener('DOMContentLoaded', function() {

  // Seleciona o botão agendar
  let agendarButton = document.getElementById('agendarButton');

  // Adiciona o evento de 'click'
  agendarButton.addEventListener('click', function() {
    // Redireciona para "agendamento.html" 
    window.location.href = 'agendamento.html';
  });
});

