
const item = document.querySelectorAll("nav ul li");
const section = document.querySelector(".seccion1");
const section2 = document.querySelector(".seccion2");
const section3 = document.querySelector(".seccion3");
const section4 = document.querySelector(".seccion4");


window.addEventListener("scroll",function(){
    const rect1 = section.getBoundingClientRect();
    const rect2 = section2.getBoundingClientRect();
    const rect3 = section3.getBoundingClientRect();
    const rect4 = section4.getBoundingClientRect();

    const alturaSeccion1 = rect1.top;
    const alturaSeccion2 = rect2.top;
    const alturaSeccion3 = rect3.top;
    const alturaSeccion4 = rect4.top;

    const alturaPantalla = window.innerHeight;

    console.log("SECTION 1 - TOP:"+rect1.top);
    console.log("SECTION 2 - TOP:"+rect2.top);
    console.log("ALTURA DE LA PANTALLA ->"+window.innerHeight);

    if(alturaSeccion1 < alturaPantalla && alturaSeccion1 >= 0){
        item[0].style.borderBottom = "2px solid black";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "0px";

    }

    if(alturaSeccion2 < alturaPantalla && alturaSeccion2 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "2px solid black";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "0px";
    }

    if(alturaSeccion3 < alturaPantalla && alturaSeccion3 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "2px solid black";
        item[3].style.borderBottom = "0px";
    }

    if(alturaSeccion4 < alturaPantalla && alturaSeccion4 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "2px solid black";
    }

    //ESTO ES PARA CALCULAR
    // console.log("ALTURA DE LA PANTALLA ->"+this.window.innerHeight);


});