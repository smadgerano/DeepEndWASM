export async function loadWebAudio() {

    let context = new (window.AudioContext || window.webkitAudioContext)();
    let audioElement = document.querySelector('#streamSourceElement');
    let source = context.createMediaElementSource(audioElement);
    let gainNode = context.createGain();

    var compressor = context.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-20, context.currentTime);
    compressor.knee.setValueAtTime(10, context.currentTime);
    compressor.ratio.setValueAtTime(3, context.currentTime);
    compressor.attack.setValueAtTime(0.02, context.currentTime);
    compressor.release.setValueAtTime(0.2, context.currentTime);

    source.connect(compressor);
    compressor.connect(gainNode);
    gainNode.connect(context.destination);


    // EQ / Filters

    // Presets:
    // --------
    // 0 - clean
    // 1- Classic FM - levleller, tiny EQ boosts
    // compressor.threshold.setValueAtTime(-20, context.currentTime);
    // compressor.knee.setValueAtTime(10, context.currentTime);
    // compressor.ratio.setValueAtTime(3, context.currentTime);
    // compressor.attack.setValueAtTime(0.02, context.currentTime);
    // compressor.release.setValueAtTime(0.2, context.currentTime);
    // radio gain variable?

    // 2 - smasher
    // 3 - old timer
    // 4 - 200 - 2k

    // DSP presets

    // Later
    // =====
    // Fade ins and outs
    // CPU monitoring
    // Static samples - a la deep end
    // Sliders for DSP controls



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
        var userVolume = document.getElementById('waapiVolumeSliderBigUI');

        if (masterButtonIcon.classList.contains('fa-circle-pause')) {
            stream.pause();
            stream.src = "";
            stream.load();
        } else {
            stream.src = source;
            stream.load();
            stream.play();
        }
    });

    document.getElementById('masterButtonSmall').addEventListener('click', function () {
        var masterButtonIcon = document.getElementById('masterButtonIconSmall');
        var stream = document.getElementById('streamSourceElement');
        var sourceURL = document.getElementById('streamURL').innerHTML;
        var userVolume = document.getElementById('waapiVolumeSliderSmallUI');

        if (masterButtonIcon.classList.contains('fa-circle-pause')) {
            stream.pause();
            stream.src = "";
            stream.load();
        } else {
            stream.src = sourceURL;
            stream.load();
            stream.play();
        }
    });


    document.getElementById('dspGlobalEnableButtonLarge').addEventListener('click', function () {
        var isPlaying = document.getElementById('isPlaying').innerHTML;
        var dspEnabled = localStorage.getItem('dspGlobalEnabled');

        if (dspEnabled != "true") {

            if (isPlaying == "true") {
                //stream.pause();
                source.disconnect(gainNode);

                source.connect(compressor);
                compressor.connect(gainNode);
                gainNode.connect(context.destination);
                //stream.play();
            } else {
                source.disconnect(gainNode);

                source.connect(compressor);
                compressor.connect(gainNode);
                gainNode.connect(context.destination);;
            }

        } else {
            if (isPlaying == "true") {
                //stream.pause();
                source.disconnect(compressor);
                source.connect(gainNode);
                gainNode.connect(context.destination)
                //stream.play();
            } else {
                source.disconnect(compressor);
                source.connect(gainNode);
                gainNode.connect(context.destination);

            }
        }
    });



    // this is all bullshit apparently?????
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function fadeIn(currentVol) {
        var v = 0.00;
        while (v < currentVol) {
            gainNode.gain.value = v;
            console.log(v);
            v + 0.01;
            await sleep(100);
        }
    }

    async function fadeOut(currentVol) {
        var v = currentVol;
        while (v > 0.00) {
            gainNode.gain.value = v;
            console.log(v);
            v - 0.01;
            await sleep(100);
        }
    }
}