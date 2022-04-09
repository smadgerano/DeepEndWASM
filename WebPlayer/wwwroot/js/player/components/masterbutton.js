export async function startPlayer(url) {
    // var random = Math.floor(Math.random() * 1000000).toString();    

    var stream = document.getElementById('streamSourceElement');
    //stream.src = url + '?nocache=' + random;
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