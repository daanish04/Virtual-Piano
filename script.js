function playSound(event){
    let aud=new Audio(`piano-mp3/${event}.mp3`);
    aud.play();
}
