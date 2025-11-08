// script.js - Modo escuro e formulário
const toggleButton = document.getElementById("toggle-dark");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
});