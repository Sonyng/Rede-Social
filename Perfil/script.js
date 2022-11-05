window.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()

fetch('https://dummyjson.com/users/1')
.then(res => res.json())
.then(json => {
    document.querySelector("#NamePerfil").innerHTML = json.firstName; //firstname//
    document.querySelector("#Usename").innerHTML = json.username; //usename//
    document.querySelector("#Cidade").innerHTML = json.address.city; //city//
    document.querySelector("#Email").innerHTML = json.email; //email//
    document.querySelector("#Idade").innerHTML = json.age; //age//
    document.querySelector("#Telefone").innerHTML = json.phone; //phone//
    document.querySelector("#Sexo").innerHTML = json.gender; //gender//
});


})