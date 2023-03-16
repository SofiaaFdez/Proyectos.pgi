
const item = document.querySelectorAll("header nav article");
const section = document.querySelector(".fondo");
const section2 = document.querySelector(".aboutMe");
const section3 = document.querySelector(".services");
const section4 = document.querySelector(".experience");
const section5 = document.querySelector(".recentWorks");
const section6 = document.querySelector(".preciosPlanes");
const section7 = document.querySelector(".clientesOpiniones");
const section8 = document.querySelector(".LatestPosts");
const section9 = document.querySelector(".GetTouch");


window.addEventListener("scroll",function(){
    const rect1 = section.getBoundingClientRect();
    const rect2 = section2.getBoundingClientRect();
    const rect3 = section3.getBoundingClientRect();
    const rect4 = section4.getBoundingClientRect();
    const rect5 = section5.getBoundingClientRect();
    const rect6 = section6.getBoundingClientRect();
    const rect7 = section7.getBoundingClientRect();
    const rect8 = section8.getBoundingClientRect();
    const rect9 = section9.getBoundingClientRect();


    const alturaSeccion1 = rect1.top;
    const alturaSeccion2 = rect2.top;
    const alturaSeccion3 = rect3.top;
    const alturaSeccion4 = rect4.top;
    const alturaSeccion5 = rect5.top;
    const alturaSeccion6 = rect6.top;
    const alturaSeccion7 = rect7.top;
    const alturaSeccion8 = rect8.top;
    const alturaSeccion9 = rect9.top;

    const alturaPantalla = window.innerHeight;

    console.log("SECTION 1 - TOP:"+rect1.top);
    console.log("SECTION 2 - TOP:"+rect2.top);
    console.log("ALTURA DE LA PANTALLA ->"+window.innerHeight);

    if(alturaSeccion1 < alturaPantalla && alturaSeccion1 >= 0){
        item[0].style.borderBottom = "2px solid white";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "0px";
        item[4].style.borderBottom = "0px";
        item[5].style.borderBottom = "0px";
        item[6].style.borderBottom = "0px";
        item[7].style.borderBottom = "0px";
        item[8].style.borderBottom = "0px";
    }

    if(alturaSeccion2 < alturaPantalla && alturaSeccion2 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "2px solid white";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "0px";
        item[4].style.borderBottom = "0px";
        item[5].style.borderBottom = "0px";
        item[6].style.borderBottom = "0px";
        item[7].style.borderBottom = "0px";
        item[8].style.borderBottom = "0px";

        const dev_bar = document.querySelector(".development");
        dev_bar.style.width= "85%";

        const design_bar = document.querySelector(".design");
        design_bar.style.width= "95%";


        const photo_bar = document.querySelector(".photography");
        photo_bar.style.width= "70%";

    }

    if(alturaSeccion3 < alturaPantalla && alturaSeccion3 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "2px solid white";
        item[3].style.borderBottom = "0px";
        item[4].style.borderBottom = "0px";
        item[5].style.borderBottom = "0px";
        item[6].style.borderBottom = "0px";
        item[7].style.borderBottom = "0px";
        item[8].style.borderBottom = "0px";
    }

    if(alturaSeccion4 < alturaPantalla && alturaSeccion4 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "2px solid white";
        item[4].style.borderBottom = "0px";
        item[5].style.borderBottom = "0px";
        item[6].style.borderBottom = "0px";
        item[7].style.borderBottom = "0px";
        item[8].style.borderBottom = "0px";
    }

    if(alturaSeccion5 < alturaPantalla && alturaSeccion5 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "0px";
        item[4].style.borderBottom = "2px solid white";
        item[5].style.borderBottom = "0px";
        item[6].style.borderBottom = "0px";
        item[7].style.borderBottom = "0px";
        item[8].style.borderBottom = "0px";
    }

    if(alturaSeccion6 < alturaPantalla && alturaSeccion6 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "0px";
        item[4].style.borderBottom = "0px";
        item[5].style.borderBottom = "2px solid white";
        item[6].style.borderBottom = "0px";
        item[7].style.borderBottom = "0px";
        item[8].style.borderBottom = "0px";
    }

    if(alturaSeccion7 < alturaPantalla && alturaSeccion7 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "0px";
        item[4].style.borderBottom = "0px";
        item[5].style.borderBottom = "0px";
        item[6].style.borderBottom = "2px solid white";
        item[7].style.borderBottom = "0px";
        item[8].style.borderBottom = "0px";
    }

    if(alturaSeccion8 < alturaPantalla && alturaSeccion8 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "0px";
        item[4].style.borderBottom = "0px";
        item[5].style.borderBottom = "0px";
        item[6].style.borderBottom = "0px";
        item[7].style.borderBottom = "2px solid white";
        item[8].style.borderBottom = "0px";
    }

    if(alturaSeccion9 < alturaPantalla && alturaSeccion9 >= 0){
        item[0].style.borderBottom = "0px";
        item[1].style.borderBottom = "0px";
        item[2].style.borderBottom = "0px";
        item[3].style.borderBottom = "0px";
        item[4].style.borderBottom = "0px";
        item[5].style.borderBottom = "0px";
        item[6].style.borderBottom = "0px";
        item[7].style.borderBottom = "0px";
        item[8].style.borderBottom = "2px solid white";
    }

});    