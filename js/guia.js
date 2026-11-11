/*
    Projeto: Street Deck - Loja de Skate
    Arquivo: guia.js
    Autores: Mateus Elias e Matheus Machado
*/

const botao = document.getElementById("botao-calcular");

botao.addEventListener("click", function () {
    const numero = Number(document.getElementById("calcado").value);
    let resposta = "";

    if (numero >= 34 && numero <= 36) {
        resposta = "Shape recomendado: 7.75 polegadas.";
    } else if (numero >= 37 && numero <= 39) {
        resposta = "Shape recomendado: 8.0 polegadas.";
    } else if (numero >= 40 && numero <= 42) {
        resposta = "Shape recomendado: 8.25 polegadas.";
    } else if (numero >= 43 && numero <= 45) {
        resposta = "Shape recomendado: 8.5 polegadas.";
    } else {
        resposta = "Digite um número de calçado entre 34 e 45.";
    }

    document.getElementById("resultado").innerHTML = resposta;
});