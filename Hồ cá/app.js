let currentSong=0;

const music = document.querySelector('#audio');
const seekBar = document.querySelector('.seek-bar');
const boxsong = document.querySelector('.box-song');
const playBtn = document.querySelector('.btn-play');

playBtn.addEventListener('click', () =>{
    playBtn.classList.toggle('pause');
    boxsong.classList.toggle('play');
});
