const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row.seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

const ticketprice = +movieselect.value;

container.addEventListener ('click', function(e){
	if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
		e.target.classList.toggle('selected');
		
		updateselectedcount();	}
})