
const palabras = ["UI/UX designer",
                  "Photography lover",
                  "Front-End developer"];

console.log(palabras.length)

const obj_texto = document.querySelector(".texto");

var posicion = 0;

function cambioTexto() {
	obj_texto.textContent = palabras[posicion%palabras.length]
	console.log("Modulo: " + posicion)
	console.log("posicion:" + posicion)
	posicion += 1
	/*if(posicion == palabras.length -1) {
		posicion = 0
	}
	else{
		posicion = posicion + 1
	}*/

	setTimeout(cambioTexto,2000)
}

setTimeout(cambioTexto,2000)