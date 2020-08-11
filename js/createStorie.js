// Create Storie

function drop(num){
    var drops = document.querySelectorAll(".forDrop");

    for(var i=0; i < drops.length; i++){
        if(num != i && drops[i].classList.contains("drop-active")){
            drops[i].classList.remove("drop-active");
        }
    }
    drops[num].classList.toggle("drop-active");
}


// IMAGE URL, IMAGE BACKGROUND SIZE, IMAGE ZOOM, IMAGE POSITIONS
var imageSettings = [{image: '', bgSize: '', zoom: 1, imgPos: ''}];

function uploadImage(image) {
    var image = window.URL.createObjectURL(image);
    console.log(image);
    var upImage = document.querySelector(".upload-image");
    var viewUp = document.querySelector(".view-upload");

    viewUp.style.background = `url('${image}') no-repeat center center`;
    viewUp.style.backgroundSize = "contain";

    imageSettings.image = image;
    imageSettings.bgSize = 'contain';
    imageSettings.zoom = 1;
    imageSettings.imgPos = 'center';

    console.log(viewUp);

    upImage.style.display = "none";
}

function backgroundSize(type) {
    var viewUp = document.querySelector(".view-upload");
    
    console.log(viewUp);

    if(type == 0){
        // Cover
        viewUp.style.backgroundSize = "cover";
    }
    else if(type == 1){
        // Contain
        viewUp.style.backgroundSize = "contain";
    }
    else if(type == 2) {
        // auto
        viewUp.style.backgroundSize = "inherit";
    }
}

function zoom(type) {
    var toZoom = document.querySelector(".to-image-up");
    
    imageSettings.zoom

    if(type == 0 && imageSettings.zoom <= 3){
        imageSettings.zoom += 0.1;
    }
    else if(type == 1 && imageSettings.zoom >= 0.2){
        imageSettings.zoom -= 0.1;
    }
    else if(type == 2) {
        imageSettings.zoom = 1;
    }
    toZoom.style.transform = `scale(${imageSettings.zoom})`;
    console.log(imageSettings.zoom)
}

function newImage(){
    var upImage = document.querySelector(".upload-image");

    document.getElementById("upload_imagem").value = "";
    
    upImage.style.display = "block";
}