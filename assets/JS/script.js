
let nome = window.document.getElementById('nome')
let email = document.querySelector("#email")
let experiencia = document.querySelector('#experiencia')
let nomeOk = false
let emailOk = false
let experienciaOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
    function validEmail(){
        let txtEmail = document.querySelector('#txtEmail')

        if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red'
        }else{
            txtEmail.innerHTML = 'E-mail válido'
            txtEmail.style.color = 'green'
            emailOk = true 
        }
    }

    function validExperiencia(){
     let txtExperiencia = document.querySelector('#txtExperiencia')

     if(experiencia.value.length >= 100){
         txtExperiencia.innerHTML = ' excedeu o limite de caracteres máximo 100.'
         txtExperiencia.style.color = 'red'
         txtExperiencia.style.display = 'block'
     }else {
         txtExperiencia.style.display = 'none'
          experienciaOk = true
     }
    }

    function enviar(){
        if (nomeOk ==true && emailOk == true && experienciaOk == true){
            alert('Formulário enviado com sucesso')
        }else{
            alert('Preencha o formulário corretamente antes de enviar...')
        }
    }

    function mapazoom(){
     mapa.style.width = '800px'
     mapa.style.height = '600px'
    }

    function mapanormal(){
        mapa.style.width = '400px'
        mapa.style.height = '250px'
    }