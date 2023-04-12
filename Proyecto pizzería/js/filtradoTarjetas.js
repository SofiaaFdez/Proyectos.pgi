
const todo = document.querySelector(".todo");
const bebidas = document.querySelector(".bebidas");
const entradas = document.querySelector(".entradas");
const pizzas = document.querySelector(".pizzas");
const pastas = document.querySelector(".pastas");
const postre = document.querySelector(".postre");
console.log(entradas);

cajas = document.querySelectorAll("article");
console.log(cajas);

todo.addEventListener("click", function(){

    cajas.forEach(caja => {

        //todas las cajas 
    
        caja.style.display="inline-flex";
        
    });
});

bebidas.addEventListener("click", function(){

    cajas.forEach(caja => {
        
        if(caja.getAttribute("data-filter") == "bebidas") {
            caja.style.display="inline-flex";
        }

        else{
            caja.style.display="none";
        }
 
    });

});

entradas.addEventListener("click", function(){

    cajas.forEach(caja => {
        
        if(caja.getAttribute("data-filter") == "entradas") {
            caja.style.display="inline-flex";
        }

        else{
            caja.style.display="none";
        }
 
    });

});

pizzas.addEventListener("click", function(){

    cajas.forEach(caja => {
        
        if(caja.getAttribute("data-filter") == "pizzas") {
            caja.style.display="inline-flex";
        }

        else{
            caja.style.display="none";
        }
 
    });

});

pastas.addEventListener("click", function(){

    cajas.forEach(caja => {
        
        if(caja.getAttribute("data-filter") == "pastas") {
            caja.style.display="inline-flex";
        }

        else{
            caja.style.display="none";
        }
 
    });

});

postre.addEventListener("click", function(){

    cajas.forEach(caja => {
        
        if(caja.getAttribute("data-filter") == "postre") {
            caja.style.display="inline-flex";
        }

        else{
            caja.style.display="none";
        }
 
    });

});

