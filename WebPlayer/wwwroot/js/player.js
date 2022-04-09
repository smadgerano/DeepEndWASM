var sound = new Howl({
    src: ['https://deependswamp.ddns.net:8443/deepend'],
    html5: true,
    volume: 0.0,
    autoplay: false,
    loop: false
});

function setVolume(newValue) {
    document.getElementById('volumeSlider').innerHTML = newValue;
    sound.volume(newValue);
}

function startHowlerPlayer() {
    vol = 0.0;
    sound.play();
    sound.fade(0.0, 1.0, 1000);
}

function stopHowlerPlayer() {
    sound.fade(1.0, 0.0, 1000);
    vol = 0.0;
    sound.stop();
}

function switchHowlerStream(url) {
    sound.fade(1.0, 0.0, 1000);
    vol = 0.0;
    sound.stop();
    sound.unload();
    sound.src = [url];
    sound.play();
    vol = 0.0;
    sound.fade(0.0, 1.0, 1000);
}

$("#masterButton").click(function () {
    $('.transform').toggleClass('transform-active');
});