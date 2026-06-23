const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic(){
    if(music.paused){
        music.play();
        musicBtn.textContent = "⏸ Pause Our Song";
    }else{
        music.pause();
        musicBtn.textContent = "🎵 Play Our Song";
    }
}