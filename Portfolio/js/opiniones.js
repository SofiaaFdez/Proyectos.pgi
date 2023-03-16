
const botones = document.querySelectorAll(".boton div");
console.log(botones);

const tarjetas = document.querySelector(".conten2");
console.log(tarjetas);


console.log(botones[0]);
console.log(botones[1]);

botones[0].addEventListener("click", function(){
    tarjetas.style.transform = "translateX(-350px)";
    tarjetas.classList.add("animate__animated animate__bounce");
});

botones[1].addEventListener("click", function(){
    tarjetas.style.transform = "translateX(0px)";
});