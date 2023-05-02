
const everything = document.querySelector(".everything");
const creative = document.querySelector(".creative");
const art = document.querySelector(".art");
const design = document.querySelector(".design");
const branding = document.querySelector(".branding");
console.log(everything);

cajas = document.querySelectorAll("article");
console.log(cajas);

everything.addEventListener("click", function(){

    cajas.forEach(caja => {

        //todas las cajas 
    
        caja.style.display="inline-flex";
        
    });
});

creative.addEventListener("click", function(){

    cajas.forEach(caja => {
        
        if(caja.getAttribute("data-filter") == "creative") {
            caja.style.display="inline-flex";
        }

        else{
            caja.style.display="none";
        }
 
    });

});

art.addEventListener("click", function(){

    cajas.forEach(caja => {
        
        if(caja.getAttribute("data-filter") == "art") {
            caja.style.display="inline-flex";
        }

        else{
            caja.style.display="none";
        }
 
    });

});

design.addEventListener("click", function(){

    cajas.forEach(caja => {

        if(caja.getAttribute("data-filter") == "design") {
            caja.style.display="inline-flex";
        }

        else{
            caja.style.display="none";
        }
 
    });

});

branding.addEventListener("click", function(){

    cajas.forEach(caja => {
        
        if(caja.getAttribute("data-filter") == "branding") {
            caja.style.display="inline-flex";
        }

        else{
            caja.style.display="none";
        }
 
    });

});




