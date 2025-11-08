// Modo escuro
const toggleButton = document.getElementById('toggle-dark');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Formulário de contato
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    form.reset();
});