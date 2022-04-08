var sound = new Howl({
    src: ['https://deependswamp.ddns.net:8443/deepend'],
    html5: true
});



function startHowlerPlayer() {
    var id1 = sound.play();
    sound.fade(0, 1, 1000, id1);
}

function stopHowlerPlayer() {
    sound.fade(1, 0, 1000, id1);
    await sleep(1000);
    sound.stop();
}

function switchHowlerStream(url) {
    sound.fade(1, 0, 1000, id1);
    await sleep(1000);
    sound.stop();
    sound.unload();
    sound.src = url;
    var id1 = sound.play();
    sound.fade(0, 1, 1000, id1);
}

