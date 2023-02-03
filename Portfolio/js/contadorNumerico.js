

import { CountUp } from  '../countUp/dist/countUp.js';

const activador = document.querySelector(".activarContador");

console.log(activador)

activador.addEventListener("click", function(){
    var contador1 = new CountUp('contador1', 198);
    contador1.start();
});

window.onload = function() {
    var contador2 = new CountUp('contador2', 5670);
    var contador3 = new CountUp('contador3', 427);
    var contador4 = new CountUp('contador4', 35);
    contador2.start();
    contador3.start();
    contador4.start();

}
