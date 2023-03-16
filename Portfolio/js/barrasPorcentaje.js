
const barra1 = document.querySelector(".bar desarollo");
const barra2 = document.querySelector(".bar diseño");
const barra3 = document.querySelector(".bar fotografia");
console.log(barra1);
console.log(barra2);
console.log(barra3);

window.addEventListener("scroll",function(){
    const rect2 = barra1.getBoundingClientRect();
    const rect3 = barra2.getBoundingClientRect();
    const rect4 = barra3.getBoundingClientRect();

    const alturaSeccion1 = rect1.top;
    const alturaSeccion2 = rect2.top;
    const alturaSeccion3 = rect3.top;

    const alturaPantalla = window.innerHeight;

    console.log("SECTION 1 - TOP:"+rect1.top);
    console.log("SECTION 2 - TOP:"+rect2.top);
    console.log("ALTURA DE LA PANTALLA ->"+window.innerHeight);

    if(alturaSeccion1 < alturaPantalla && alturaSeccion1 >= 0){
        item[0].style.borderBottom = "2px solid white";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "0px";
    }

});
