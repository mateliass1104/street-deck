/*
    Projeto: Street Deck - Loja de Skate
    Arquivo: contato.js
    Autores: Mateus Elias e Matheus Machado
*/

const formulario = document.getElementById("form-contato");
let mensagens = [];

if (localStorage.getItem("mensagens") != null) {
    mensagens = JSON.parse(localStorage.getItem("mensagens"));
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const mensagem = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        assunto: document.getElementById("assunto").value,
        texto: document.getElementById("mensagem").value
    };

    mensagens.push(mensagem);
    localStorage.setItem("mensagens", JSON.stringify(mensagens));

    document.getElementById("aviso").innerHTML = "<div class='alert alert-success'>Mensagem enviada com sucesso, " + mensagem.nome + "!</div>";
    formulario.reset();
});