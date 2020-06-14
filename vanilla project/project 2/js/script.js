const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row.seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

let ticketprice = +movieselect.value;

//update totak and count

function updateselectedcount() {
const selectedseats	= document.querySelectorAll('.row .seat.selected');

const seatsIndex = [...selectedseats].map(function(seat){
 return[...seats].indexOf(seat);
});
	
console.log(seatsIndex);	
	
const selectedseatscount = selectedseats.length;
	
count.innerText = selectedseatscount;
total.innerText = selectedseatscount * ticketprice;	
}

//movie select
movieselect.addEventListener('change', function(e){
	ticketprice = +e.target.value;
	updateselectedcount();
})



// seat 
container.addEventListener ('click', function(e){
	if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
		e.target.classList.toggle('selected');
		
		
		updateselectedcount()}
});