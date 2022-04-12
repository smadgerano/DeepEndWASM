export async function loadWebAudio() {

    let context = new (window.AudioContext || window.webkitAudioContext)();
    let audioElement = document.querySelector('#streamSourceElement');
    let source = context.createMediaElementSource(audioElement);
    let gainNode = context.createGain();

    var compressor = context.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-50, context.currentTime);
    compressor.knee.setValueAtTime(40, context.currentTime);
    compressor.ratio.setValueAtTime(12, context.currentTime);
    compressor.attack.setValueAtTime(0.2, context.currentTime);
    compressor.release.setValueAtTime(0.25, context.currentTime);

    source.connect(compressor);
    compressor.connect(gainNode);
    gainNode.connect(context.destination);

    document.getElementById('waapiVolumeSliderBigUI').addEventListener('input', function () {
        gainNode.gain.value = this.value;
    });

    document.getElementById('waapiVolumeSliderSmallUI').addEventListener('input', function () {
        gainNode.gain.value = this.value;
    });

    document.getElementById('masterButtonLarge').addEventListener('click', function () {
        var masterButtonIcon = document.getElementById('masterButtonIconLarge');
        var stream = document.getElementById('streamSourceElement');
        var source = document.getElementById('streamURL').innerHTML;

        if (masterButtonIcon.classList.contains('fa-circle-pause')) {
            console.log(source);
            stream.pause();
            stream.src = "";
            stream.load();
        } else {
            console.log(source);
            stream.src = source;
            stream.load();
            stream.play();
        }
    });

    document.getElementById('masterButtonSmall').addEventListener('click', function () {
        var masterButtonIcon = document.getElementById('masterButtonIconSmall');
        var stream = document.getElementById('streamSourceElement');
        var source = document.getElementById('streamURL').innerHTML;

        if (masterButtonIcon.classList.contains('fa-circle-pause')) {
            console.log(source);
            stream.pause();
            stream.src = "";
            stream.load();
        } else {
            console.log(source);
            stream.src = source;
            stream.load();
            stream.play();
        }
    });
}