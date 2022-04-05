function stopAudioPlayer() {
    player = document.getElementById('streamPlayer')
    player.pause();
    player.currentTime = 0;
}

function reloadAudioPlayer() {
    player = document.getElementById('streamPlayer')
    player.load();
    player.play();
}