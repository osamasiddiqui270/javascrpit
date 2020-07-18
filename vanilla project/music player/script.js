const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['Believer', 'dharia', 'Rataan'];

//keep  track
let songIndex = 2;

//initial load song
loadsong(songs[songIndex]);

//update song detail
function loadsong(song){
	title.innerText = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `image/${song}.jpg`;
}
//play song
function playsong(){
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');
	
	audio.play();
}
//pause song
function pausesong(){
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	
	audio.pause();
}
//prev song
function prevsong(){
	songIndex--;
	
	if(songIndex < 0){
	   songIndex = songs.length -1;
	   }
	loadsong(songs[songIndex]);
	
	playsong();
}
//next sonng
function nextsong(){
	songIndex++;
	
	if(songIndex > songs.length -1){
		songIndex = 0;
	}
	loadsong(songs[songIndex]);
	playsong();
}
//update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
//event listeners
playBtn.addEventListener('click', () =>{
	const isPlaying = musicContainer.classList.contains('play');
	
	if(isPlaying){
	   pausesong();
	   }else{
	   playsong();
	   }
});

//change song
prevBtn.addEventListener('click', prevsong);
nextBtn.addEventListener('click', nextsong);

//time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);