var server = 'http://127.0.0.1/stories-workshop/api/'

function login(){
    console.log("Tentando Logar");
    var login = document.getElementById("l_login").value;
    var senha = document.getElementById("l_senha").value;

    rotate_infinity();

    $.ajax({
        url: 'api/login/entrar',
        type: 'POST',
        data: { login: login, senha: senha },
        success: function (data) {
            console.log(data)
            if(data === '0000'){
                window.location.replace("stories");
            }
        }
    });
}

function sair(){
    $.ajax({
        url: 'api/login/sair',
        type: 'POST',
        success: function (data) {
            window.location.replace("index");
        }
    });
}

function registro(){
    console.log("Tentando Registrar");
    var login = document.getElementById("r_login").value;
    var senha = document.getElementById("r_senha").value;
    var rsenha = document.getElementById("re_senha").value;
    var email = document.getElementById("r_email").value;

    rotate_infinity();

    $.ajax({
        url: 'api/login/registro',
        type: 'POST',
        data: { login: login, senha: senha, rsenha: rsenha, email: email },
        success: function (data) {
            console.log(data)
            if(data === '0000'){
                window.location.replace("stories");
            }
        }
    });
}

function change(num){
    if(num === 0){
        document.querySelector(".login").style.display = "none";
        document.querySelector(".registro").style.display = "block";
    }
    else {
        document.querySelector(".registro").style.display = "none";
        document.querySelector(".login").style.display = "block";
    }
}

// Rotate function

function rotate_infinity(){
    document.querySelector(".infinity-rotate").classList.toggle("hidden");
}