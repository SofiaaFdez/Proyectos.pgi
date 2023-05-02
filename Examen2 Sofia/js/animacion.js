
const tarjeta = document.querySelector(".tarjeta2");
console.log(tarjeta);

tarjeta.addEventListener("mouseover",function(){
    const textos = tarjeta.querySelectorAll(".titulo");

    //recorrido de los elementos del tipo class="titulo"
    textos.forEach(texto => {
        texto.classList.add("animate__animated","animate__fadeInUp");
    });
   

});

tarjeta.addEventListener("mouseout",function(){
    const textos = tarjeta.querySelectorAll(".titulo");

    //recorrido de los elementos del tipo class="titulo"
    textos.forEach(texto => {
        texto.classList.remove("animate__animated","animate__fadeInUp");
    });
   

});