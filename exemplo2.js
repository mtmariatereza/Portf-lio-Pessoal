// script.js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para testar a funcionalidade

    // Captura os valores do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validação simples para garantir que os campos não estão vazios
    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Exibição de uma mensagem de sucesso (apenas para demonstração)
    alert(`Mensagem enviada com sucesso!\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`);

    // Limpar o formulário após o envio
    document.getElementById("contactForm").reset();
});