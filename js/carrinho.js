/*
    Projeto: Street Deck - Loja de Skate
    Arquivo: carrinho.js
    Autores: Mateus Elias e Matheus Machado
*/

let produtos = [
    { nome: "Skate Street", preco: 449.90 },
    { nome: "Skate Cruiser", preco: 379.90 },
    { nome: "Longboard", preco: 549.90 },
    { nome: "Shape Maple 8.0", preco: 189.90 },
    { nome: "Trucks Street 139 mm", preco: 229.90 },
    { nome: "Rodas Street 99A", preco: 139.90 },
    { nome: "Rolamentos ABEC 7", preco: 79.90 },
    { nome: "Lixa Preta", preco: 39.90 }
];

let carrinho = [];

if (localStorage.getItem("carrinho") != null) {
    carrinho = JSON.parse(localStorage.getItem("carrinho"));
}

function salvar() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function mostrarProdutos() {
    let texto = "";

    for (let i = 0; i < produtos.length; i++) {
        texto = texto + "<li class='list-group-item d-flex justify-content-between align-items-center'>";
        texto = texto + produtos[i].nome + " - R$ " + produtos[i].preco.toFixed(2);
        texto = texto + "<button class='btn btn-laranja btn-sm' onclick='adicionar(" + i + ")'>Adicionar</button></li>";
    }

    document.getElementById("lista-produtos").innerHTML = texto;
}

function mostrarCarrinho() {
    let texto = "";
    let total = 0;

    if (carrinho.length == 0) {
        texto = "<li class='list-group-item'>Seu carrinho está vazio.</li>";
    } else {
        for (let i = 0; i < carrinho.length; i++) {
            texto = texto + "<li class='list-group-item d-flex justify-content-between align-items-center'>";
            texto = texto + carrinho[i].nome + " - R$ " + carrinho[i].preco.toFixed(2);
            texto = texto + "<button class='btn btn-dark btn-sm' onclick='remover(" + i + ")'>Remover</button></li>";
            total = total + carrinho[i].preco;
        }
    }

    document.getElementById("lista-carrinho").innerHTML = texto;
    document.getElementById("total").innerHTML = "Total: R$ " + total.toFixed(2);
}

function adicionar(posicao) {
    carrinho.push(produtos[posicao]);
    salvar();
    mostrarCarrinho();
}

function remover(posicao) {
    carrinho.splice(posicao, 1);
    salvar();
    mostrarCarrinho();
}

function limpar() {
    carrinho = [];
    salvar();
    mostrarCarrinho();
}

document.getElementById("botao-limpar").addEventListener("click", limpar);

mostrarProdutos();
mostrarCarrinho();