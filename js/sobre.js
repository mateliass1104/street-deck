/*
    Projeto: Street Deck - Loja de Skate
    Arquivo: sobre.js
    Autores: Mateus Elias e Matheus Machado
*/

const botao = document.getElementById("botao-valores");
const lista = document.getElementById("lista-valores");

botao.addEventListener("click", function () {
    if (lista.style.display == "none") {
        lista.style.display = "block";
        botao.innerHTML = "Esconder valores";
    } else {
        lista.style.display = "none";
        botao.innerHTML = "Mostrar valores";
    }
});