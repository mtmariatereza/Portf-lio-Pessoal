// script.js

// Adiciona um ouvinte de evento ao formulário para interceptar o envio
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Impede que o formulário seja enviado (evita o recarregamento da página)
    event.preventDefault();

    // Captura os valores inseridos nos campos do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Valida se todos os campos foram preenchidos
    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exibe um alerta com os dados preenchidos (isso simula o envio da mensagem)
    alert(`Mensagem enviada com sucesso!\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`);

    // Limpa o formulário após o envio (opcional)
    document.getElementById("contactForm").reset();
});