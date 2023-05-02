
const carta = document.querySelector(".tarjeta");
console.log(carta);

carta.addEventListener("mouseover", function(){
    const titulo = carta.querySelector(".titulo");
    const numero = carta.querySelector(".numero");
    console.log(titulo);
    console.log(numero);

    
    titulo.classList.add("animate__animated","animate__fadeInDown");
    numero.classList.add("animate__animated","animate__fadeInUp");
    
});

carta.addEventListener("mouseout", function(){
    const titulo = carta.querySelector(".titulo");
    const numero = carta.querySelector(".numero");
    console.log(titulo);
    console.log(numero);

    
    titulo.classList.remove("animate__animated","animate__fadeInDown");
    numero.classList.remove("animate__animated","animate__fadeInUp");
    
});

