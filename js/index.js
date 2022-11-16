
//capturando um elemento ja existente na tela
let main = document.querySelector("#vitrine")
//criando a seção vitrine onde ficarão posicionados os cards dos produtos
let vitrine = document.createElement("section")
vitrine.classList.add("vitrine")
//ligando o elemento vitrine ao elemento main 
main.appendChild(vitrine)

//capturando os elementos para renderizar valores e total de itens
let itens=document.querySelector("#quantidades")
let totalCarrinho=document.querySelector("#total")

//fazendo a função responsável por fazer os cards de produtos
function criarCards(lista) {
    for (let i = 0; i < data.length; i++) {
        let card = data[i]

        let cart = document.createElement("div")
        cart.classList.add("card")

        let imagem = document.createElement("img")
        imagem.src = card.img
        imagem.alt = card.nameItem
        cart.appendChild(imagem)

        let tipo = document.createElement("small")
        tipo.innerText = card.tag[0]
        cart.appendChild(tipo)

        let nomeDoItem = document.createElement("h2")
        nomeDoItem.innerText = card.nameItem
        cart.appendChild(nomeDoItem)

        let descricao = document.createElement("p")
        descricao.innerText = card.description
        cart.appendChild(descricao)

        let preco = document.createElement("p")
        preco.classList.add("preco")
        preco.innerText = `R$ ${card.value} ,00`
        cart.appendChild(preco)


        //criando o botão do card para adicionar ao carrinho

        let adicionar = document.createElement("button")
        adicionar.classList.add("adicionar")
        adicionar.setAttribute("id", data[i].id)
        //console.log(adicionar.id);
        adicionar.innerText = "Adicionar ao carrinho"
        cart.appendChild(adicionar)

        // criando o evento

        adicionar.addEventListener("click", function (e) {
            let elementoClicado = e.target
            for (let i = 0; i < data.length; i++) {
                if (elementoClicado.id == data[i].id) {
                   carrinho.push(data[i])
                    adicionarAoCarrinho(carrinho, adicionar)     
                itens.innerText= contarItens(carrinho)
                totalCarrinho.innerText=`R$${somarCompra(carrinho)},00`
                    removeCard()
                }
            }

        })
        vitrine.appendChild(cart)
    }
}
criarCards(data)

//criando a função responsável por adicionar ao carrinho

function adicionarAoCarrinho(lista) {

    let secaocarrinho = document.querySelector("#itensCarrinho")
    secaocarrinho.innerHTML=""
    for (let i = 0; i < lista.length; i++) {
        let cart = lista[i]
        let cardCarrinho = document.createElement("div")
        cardCarrinho.classList.add("cardCarrinho")
        let imgCarrinho = document.createElement("img")
        imgCarrinho.classList.add("imgCarrinho")
        imgCarrinho.src = cart.img
        cardCarrinho.appendChild(imgCarrinho)


        let nomeDoCardCarrinho = document.createElement("p")
        nomeDoCardCarrinho.classList.add("nomeDoCardDoCarrinho")
        nomeDoCardCarrinho.innerText = cart.nameItem
        cardCarrinho.appendChild(nomeDoCardCarrinho)

        let precoCardCarrinho = document.createElement("p")
        precoCardCarrinho.classList.add("precoDoCardDoCarrinho")
        precoCardCarrinho.innerText = `R$${cart.value},00`
        cardCarrinho.appendChild(precoCardCarrinho)
        secaocarrinho.appendChild(cardCarrinho)

        let remover = document.createElement("button")
        remover.classList.add("remover")
        remover.setAttribute("id", lista[i].id)
        remover.innerText = "remover"
        cardCarrinho.appendChild(remover)
        // criando o evento
    }
    removeCard()
}
      //criando a função de remover
function removeCard() {
    let botoesRemover = document.querySelectorAll(".remover")
    for (let i = 0; i < botoesRemover.length; i++) {
        botoesRemover[i].addEventListener("click", function (e) {
            elementoClicado = e.target
            for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].id == elementoClicado.id) {
                    carrinho.splice(i, 1)
                    totalCarrinho.innerText=`R$${subtraiValor(carrinho)},00`
                     itens.innerText= contarItens(carrinho)
                    adicionarAoCarrinho(carrinho)                   
                }
            }
        })
    }
}
//criando a função de somar o total da compra
function somarCompra(lista) {
    let contSoma = 0
    for (let i = 0; i <lista.length; i++) {

        contSoma+=lista[i].value
    }
    console.log(contSoma);
   
    return contSoma
}
somarCompra(carrinho)


// //criando a função de contar os itens do carrinho

function contarItens(lista) {
    let contaItens = 0

    for (let i = 0; i < lista.length; i++) {
        contaItens++
    }
    console.log(contaItens);
    return contaItens
}
contarItens(carrinho)

function subtrai(lista){
    let subtraiItens = 0

    for (let i = 0; i < lista.length; i++) {
        subtraiItens++
    }
    console.log(subtraiItens);
    return subtraiItens
}
subtrai(carrinho)

function subtraiValor(lista){
    let subtraiSoma = 0
    for (let i = 0; i <lista.length; i++) {

        subtraiSoma+=lista[i].value
    }
    console.log(subtraiSoma);
   
    return subtraiSoma

}
subtraiValor(carinho)


