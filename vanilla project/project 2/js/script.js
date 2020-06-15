const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

populateUI;

let ticketprice = +movieselect.value;
// save movie seat and price
function setmoviedata(movieindex, movieprice){
	localStorage.setItem('selectedmovieindex', movieindex);
	localStorage.setItem('selectedmovieprice', movieprice);
}
// get data from localstorage
function populateUI() {
const selectedseats = JSON.parse(localStorage.getItem('selectedseats'));
if(selectedseats !== null && selectedseats.length > 0){
	seats.forEach((seat, index) => {
	if(selectedseats.indexOf(index) > -1) {
	   seat.classList.add('selected');
	   }	
	});
 }	
}


//update totak and count

function updateselectedcount() {
const selectedseats	= document.querySelectorAll('.row .seat.selected');

	const seatsindex = [...selectedseats].map(seat => [...seats].indexOf(seat));
	
	
	localStorage.setItem('selectedseats', JSON.stringify(seatsindex));
	
	
const selectedseatscount = selectedseats.length;
	
count.innerText = selectedseatscount;
total.innerText = selectedseatscount * ticketprice;	
}

//movie select
movieselect.addEventListener('change', function(e){
	ticketprice = +e.target.value;
	setmoviedata(e.target.selectedindex, e.target.value);
	updateselectedcount();
})



// seat 
container.addEventListener ('click', function(e){
	if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
		e.target.classList.toggle('selected');
		
		updateselectedcount()
		}
});