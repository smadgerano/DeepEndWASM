var sound = new Howl({
    src: ['https://deependswamp.ddns.net:8443/deepend'],
    html5: true
});

function startHowlerPlayer() {
    sound.play();
}

function stopHowlerPlayer() {
    sound.stop();
}

function switchHowlerStream(url) {
    sound.stop();
    sound.unload();
    sound.src = url;
    sound.play();
}