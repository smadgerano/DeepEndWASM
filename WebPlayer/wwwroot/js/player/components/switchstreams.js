export async function switchStream(url) {
    stopPlayer();
    await new Promise(res => { setTimeout(res, 10); });
    startPlayer(url);
}
