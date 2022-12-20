
const icono = document.querySelector(".icono");

console.log(icono);

icono.addEventListener("click",
	function(){

		console.log(icono);

		if (icono.getAttribute("src") == "./img/bookmark-regular.svg"){
			icono.setAttribute("src","./img/bookmark-solid.svg");
			
		}

		else{
			icono.setAttribute("src","./img/bookmark-regular.svg");{

			}
		}

	});