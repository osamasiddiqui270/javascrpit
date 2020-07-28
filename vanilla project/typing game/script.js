const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

//Init word
let randomword;

//Init score
let score = 0;

// Set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';
//Init time
let time = 10;

text.focus();

function getRandomWord(){
	return words[Math.floor(Math.random() * words.length)];
}
//update score
function updateScore(){
	score++;
	scoreEl.innerHTML = score;
}
//time change
const timeInterval = setInterval(updateTime, 1000);



//add word to dom
function addWordToDOM(){
	randomword =  getRandomWord();
	word.innerHTML = randomword;
}
addWordToDOM();
//time
function updateTime(){
	time--;
	timeEl.innerHTML =  time + 's';
	
	if(time === 0){
		clearInterval(timeInterval);
		
		gameover();
	}
}
//game over and end game
function gameover(){
	endgameEl.innerHTML = `
      <h1>Time Out</h1>
      <p>Your final score is ${score}</p>
      <button onclick="location.reload()">Reload</button>
`;
	endgameEl.style.display = 'flex';
}
//event listener
text.addEventListener('input', e => {
	const insertedText = e.target.value;
	
	if(insertedText === randomword){
	   addWordToDOM();
	   updateScore();	
		e.target.value = '';	   
		
		if(difficulty === 'hard'){
			time += 2;
		} else if(difficulty === 'medium'){
			time += 3;
		}else{
			time += 5;
		}
		updateTime();
	}
});

//setting goes up
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});

