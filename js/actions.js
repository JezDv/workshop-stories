var server = 'http://127.0.0.1/stories-workshop/api/';

function sair(){
    $.ajax({
        url: 'api/login/sair',
        type: 'POST',
        success: function (data) {
            window.location.replace("index");
        }
    });
}

function openStories(id){
    console.log('Enviado -> '+ id)
    $.ajax({
        url: 'api/stories/load',
        type: 'POST',
        data: { id: id },
        success: function (data) {
            if(isJson(data)){
                var stories = JSON.parse(data);
                console.log(stories);

                var qtd_storie = '';
                var imagem = '';

                console.log(stories.length);

                for(var i=0; i < stories.length; i++){
                    qtd_storie += `<div class="storie-line" onclick="changeStorie(${i})"></div>`
                    imagem += `<div class="imagem-storie" style="background:url('imagens/${stories[i].imagem}') no-repeat center center; background-size:${stories[i].estilo[1]};"><h2 class="descricao">${stories[i].descricao}</h2></div>`;
                }

                document.querySelector(".qtd-storie").innerHTML = qtd_storie;
                document.querySelector(".imagens-storie").innerHTML = imagem;

                console.log(qtd_storie + ' ' + imagem);

                changeStorie(0)
            }
            else {
                console.log(data);
            }
        }
    });
}

// Rotate function

function rotate_infinity(){
    document.querySelector(".infinity-rotate").classList.toggle("hidden");
}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}