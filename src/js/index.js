/* 

Ojetivo 1 - quando usuario clicar no botao veja trailer, deve abrir a modal com o video do trailer

Objetivo 2 - quando o usuario clicar no 'X' devemos fechar a modal



Objetivo 1 - 
 passo 1 - dar um jeito de pegar o elemento usando js

 passo 2 - dar um jeito de identificar quando o usario clicar no botao

 passo 3 - dar um jeito de pegar o elementoda modal com js

 passo 4 - abrir a modal na tela

 Objetivo 2 - Quando o usuario clicar no X devemos fechar a modal

 passo 1 - dar um jeito de pegar o elemento de fehar a modal com js

 passo 2 - dar um jeito de identificar quando o usuario cliar no X

 passo 3 - fechar a modal
*/
 
//variaveis
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

console.log('mostrar o document',document);

console.log(document.querySelector(".botao-trailer"));

botaoTrailer.addEventListener("click", () => {
    alternarModal();    
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {
    alternarModal(); 
    video.setAttribute("src", "");
});

