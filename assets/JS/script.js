
let nome = window.document.getElementById('nome')
let email = document.querySelector("#email")
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validNome(){
    let txt = document.querySelector('txtNome')
    if(nome.ariaValueMax.length <3){
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
    }else{
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }
}