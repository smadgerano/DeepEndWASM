var sound = new Howl({
    src: ['https://deependswamp.ddns.net:8443/deepend'],
    html5: true
});

function startHowlerPlayer() {
    sound.play();
    sound.fade(0, 1, 1000);
}

function stopHowlerPlayer() {
    sound.fade(1, 0, 1000);
    sound.stop();
}

function switchHowlerStream(url) {
    sound.fade(1, 0, 1000);
    sound.stop();
    sound.unload();
    sound.src = url;
    sound.play();
    sound.fade(0, 1, 1000);
}