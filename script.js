const random = (num) => Math.floor(Math.random() * num) 

window.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()

fetch('https://dummyjson.com/users')//NOME USUARIOS//
.then(res => res.json())
.then(jsonBody =>{
    document.querySelector("#nome_post").innerHTML = jsonBody.users[random(10)].firstName;//NOME DO USUARIO DO POST//
    document.querySelector("#nomeUsuario").innerHTML = jsonBody.users[0].firstName;//NOME DO USUARIO DA CONTA//

})

fetch('https://dummyjson.com/posts/search?q=love')//POSTS//
.then(res => res.json())
.then(json =>{
    document.querySelector("#conteudoPost").innerHTML = json.posts[random(10)].title;//TITULO DO POST//
    document.querySelector("#SubConteudoPost").innerHTML = json.posts[random(10)].body;//CONTEUDO DO POST//

});

fetch('https://dummyjson.com/comments')//COMENTARIO//
.then(res => res.json())
.then(json =>{
    document.querySelector("#comentarios").innerHTML = json.comments[random(10)].body;//COMENTARIO ANONIMO DO POST//
    
});
})

const button = document.querySelector('#like');//BUTTON LIKE//
const number = document.querySelector('#number');//CONTAGEM DOS NUMEROS DE LIKE//

button.addEventListener('click', () => {
  let likeValue = document.querySelector('#number').textContent;
  let newValue = Number(likeValue) + 1;//ADICIONA MAIS UMA CURTIDA PARA CADA CLICK//
  button.classList.add('like');
  number.innerHTML = newValue;//MOSTRANDO NA TELA +1 LIKE//
});
