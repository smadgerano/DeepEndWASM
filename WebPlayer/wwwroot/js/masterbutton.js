export async function startPlayer(url) {
    var stream = document.getElementById('streamSourceElement');
    stream.src = url;
    await new Promise(res => { setTimeout(res, 10); });
    stream.load();
    stream.play();
}

export async function stopPlayer() {
    var stream = document.getElementById('streamSourceElement');
    stream.pause();
    stream.src = "";
    stream.load();
}