/*const a = document.getElementById("burger");
console.log(a);
const b = document.getElementByClassName("burger");
console.log(b);
console.log(b[0]);
const c = document.querySelector(".menu");
console.log(c);
const c = document.querySelectorAll(".idiomas a");
console.log(d);
const e =document.querySelector(".idiomas")
console.log(e);
const f = e.querySelectorAll("a");
console.log(f);
//Aplicamos estilo a un objeto que acabamos de recuperar 
//mediante una consulta por su selector
//console.log(f[0].style ="border: 1px solid #B80F15;");
const atributo = f[0].getAttribute("class");
console.log(atributo);
if(atributo == "border"){
	console.log("El atributo es border");
	f[0].setAttribute("class","border-alt");
}
else{
	console.log("El atributo no es border")
}
console.log(f[0].textContent);
e.innerHTML+= "<a href='#' class='border'> EN </a>";
f[0].addEventListener("click", function(){
	this.removeAttribute("class");
});
*/

// Obtenemos <<img src="img/silo-creativo.png" class="logo"></div>
const img = document.querySelector(".img-logo");

console.log(img);

console.log(img.getAttribute("src"));

//img.setAttribute("src","img/logo-Google.png");



const icono_burger=document.getElementById("burger");

//console.log(icono_burger);
const menu = document.querySelector(".menu");

icono_burger:addEventListener("click", 
	function(){

		menu.classList.toggle("mostrar");

		//const menu = document.querySelector(".menu");


		/*console.log(menu.classList);
		menu.classList.add("nuevo");
		console.log(menu.classList);
		menu.classList.remove("menu");
		console.log(menu.classList);
		console.log(menu.classList.contains("rojo"));
		console.log(menu.classList.contains("nuevo"));
		*/



		/*console.log(menu);

		if (menu.classList.contains("ocultar") == true ){
			menu.classList.remove("ocultar");
			menu.classList.add("mostar");
		}

		else{
			if (menu.classList.contains("mostar") == true ){
				menu.classList.remove("mostar");
				menu.classList.add("ocultar");
			}
		}*/


	});

//Recupero el elemento html que hace referencia a la 
// imagen del corazon 

const corazon = document.querySelector(".corazon");

console.log(corazon);

corazon.addEventListener("click",
	function(){

		console.log(corazon);

		if (corazon.getAttribute("src") == "img/me-gusta.png"){
			corazon.setAttribute("src","img/corazon.png");
			
		}

		else{
			corazon.setAttribute("src","img/me-gusta.png");{

			}
		}

	});


//Recupero el elemento html que hace referencia a la 
// imagen de la lupa 

const lupa = document.querySelector(".lupa");

const cuadro = document.querySelector("cuadro-busqueda");

lupa.addEventListener("click", 
	function(){
<<<<<<< HEAD
		cuadro.classList.toggle("mostrar");
	});
=======
		cuadro.classList.toggle("mostrar")
});


//Modo oscuro

const checkbox = document.querySelector(".checkbox");

console.log(checkbox);

checkbox.addEventListener("click",
	function(){
		document.body.classList.toggle("dark");
	
});
>>>>>>> 9b0ceca841f49c0ce6c2773892e9465b58c634c1
