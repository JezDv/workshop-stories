function changeStorie(num){
    var storieLine = document.querySelectorAll(".storie-line");
    var storieImage = document.querySelectorAll(".imagem-storie");

    for(var i=0; i < storieLine.length; i++){
        storieLine[i].classList.remove("this-position");
        storieImage[i].classList.remove("this-image");
    }
    storieLine[num].classList.toggle("this-position");
    storieImage[num].classList.toggle("this-image");
}