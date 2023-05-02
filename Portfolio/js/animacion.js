
const aboutMe = document.querySelector(".aboutMe");

var activado = 0 

function Animacion(){
    var alturaElemento = aboutMe.getBoundingClientRect().top;
    var alturaScrollY = window.scrollY;

    var diferencia = alturaElemento - alturaScrollY ;

    console.log("DIV alturaElemento: " + alturaElemento);
    console.log("DIV alturaScrollY: " + alturaScrollY);
    console.log("DIV diferencia: " +diferencia);

    // si entramos aqui el objeto se anima
    if(diferencia < 0 && activado == 0){
        aboutMe.classList.add("animate__animated animate__fadeInUp");
        activado = 1 
    }
    if(diferencia > 0 && activado == 1){
        activado = 0
        aboutMe.classList.remove("animate__animated animate__fadeInUp");
    }
}

window.addEventListener("scroll",Animacion);