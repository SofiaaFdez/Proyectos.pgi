
let corazon = document.querySelectorAll(".corazon");

for (let i of corazon){
	i.addEventListener('click',function(){
		this.classList.toggle('far');
		this.classList.toggle('fa');

		if (this.classList.contains('fa')){
			this.style.color = 'red';

		} 
		else{
			this.style.color = 'black';
		}
	});
}


