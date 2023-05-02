
const todas = document.querySelector(".todas");
console.log(todas);

cajas = document.querySelectorAll(".contenedor article");
console.log(cajas);

todas.addEventListener("click", function(){
    cajas.forEach(cajas => {
        cajas.style.display = "inline-flex";
    });

});

//QUITAR IMAGEN PULSANDO EL BOTON

const papelera = document.querySelector("article");
console.log(papelera);



    cajas.forEach(caja => {

        const papelera = caja.querySelector(".ico");
        papelera.addEventListener("click", function(){
            caja.style.display="none";
        });
    });
