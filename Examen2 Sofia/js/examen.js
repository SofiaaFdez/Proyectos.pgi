
const icono = document.querySelector(".ico");
console.log(icono);

icono.addEventListener("click",function(){

    if(icono.getAttribute("src") == "img/guardarBlanco.png"){
        icono.setAttribute("src", "img/guardarNegro .png");
    }

    else{
        icono.setAttribute("src", "img/guardarBlanco.png")
    }
});
