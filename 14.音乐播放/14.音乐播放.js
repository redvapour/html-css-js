let music = document.getElementById('music');
let icon = document.getElementById('icon');

icon.onclick = function(){
    if(music.paused){
        music.play();
        icon.src = "./images/pause.png";
    }else{
        music.pause();
        icon.src = "./images/play.png";
    }
}