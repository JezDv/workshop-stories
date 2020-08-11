function changeView(button){

    var central = document.querySelector(".central");
    var perfil = document.querySelector(".perfil");
    var createStorie = document.querySelector(".createStorie")

    if(central.classList.contains("top-view")){central.classList.remove("top-view");}
    if(perfil.classList.contains("top-view")){perfil.classList.remove("top-view");}
    if(createStorie.classList.contains("top-view")){createStorie.classList.remove("top-view");}

    if(button === 'central'){
        central.classList.toggle("top-view");
    }
    else if(button === 'perfil'){
        perfil.classList.toggle("top-view");
    }
    else if(button === 'createStorie'){
        createStorie.classList.toggle("top-view");
    }
}