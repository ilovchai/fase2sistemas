const telebuscaCheckbox = document.getElementById('telebusca');
const detalhesTelebusca = document.getElementById('detalhes_telebusca');

telebuscaCheckbox.addEventListener('change', function() {
  detalhesTelebusca.style.display = telebuscaCheckbox.checked ? 'block' : 'none';
});