export async function loadWebAudio() {

    let context = new (window.AudioContext || window.webkitAudioContext)();
    let audioElement = document.querySelector('#streamSourceElement');
    let source = context.createMediaElementSource(audioElement);
    let masterGain = context.createGain();

    var compressor = context.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-20, context.currentTime);
    compressor.knee.setValueAtTime(10, context.currentTime);
    compressor.ratio.setValueAtTime(3, context.currentTime);
    compressor.attack.setValueAtTime(0.02, context.currentTime);
    compressor.release.setValueAtTime(0.2, context.currentTime);

    var gainCompensator = context.createGain();

    var loShelf = context.createBiquadFilter();
    loShelf.type = "lowshelf";
    loShelf.frequency.setValueAtTime(90, context.currentTime);
    loShelf.gain.setValueAtTime(1, context.currentTime);

    var hiShelf = context.createBiquadFilter();
    hiShelf.type = "highshelf";
    hiShelf.frequency.setValueAtTime(7000, context.currentTime);
    hiShelf.gain.setValueAtTime(1, context.currentTime);

    var lowPass = context.createBiquadFilter();
    lowPass.type = "lowpass";
    lowPass.frequency.setValueAtTime(4400, context.currentTime);
    lowPass.Q.value = 1;

    var highPass = context.createBiquadFilter();
    highPass.type = "highpass";
    highPass.frequency.setValueAtTime(400, context.currentTime);
    highPass.Q.value = 1;


    source.connect(masterGain);
    masterGain.connect(context.destination);


    document.getElementById('streamSelectoDropListr').addEventListener('change', function () {
        var e = document.getElementById("streamSelectoDropListr");
        var selected = e.options[e.selectedIndex].value;
        var masterButtonIcon = document.getElementById('masterButtonIconLarge');
        var stream = document.getElementById('streamSourceElement');

        if (masterButtonIcon.classList.contains('fa-circle-pause')) {
            stream.pause();
            stream.src = selected;
            stream.load();
            stream.play();
        } else {
            stream.src = selected;
            stream.load();
        }
    });


    document.getElementById('dspPresetSelector').addEventListener('change', function () {
        //var preset = document.getElementById('dspPreset');
        var e = document.getElementById("dspPresetSelector");
        var selected = e.options[e.selectedIndex].text;
        //console.log(selected);

        switch (selected) {
            case "Disabled":

                globalDSPDisable();

                source.connect(masterGain);
                masterGain.connect(context.destination);

                break;
            case "FM Sparkle":

                globalDSPDisable();

                source.connect(compressor);
                compressor.connect(loShelf);
                loShelf.connect(hiShelf);
                hiShelf.connect(gainCompensator);
                gainCompensator.connect(masterGain);
                masterGain.connect(context.destination);

                compressor.threshold.setValueAtTime(-20, context.currentTime);
                compressor.knee.setValueAtTime(10, context.currentTime);
                compressor.ratio.setValueAtTime(4, context.currentTime);
                compressor.attack.setValueAtTime(0.02, context.currentTime);
                compressor.release.setValueAtTime(0.2, context.currentTime);

                loShelf.frequency.setValueAtTime(90, context.currentTime);
                loShelf.gain.setValueAtTime(1, context.currentTime);
                hiShelf.frequency.setValueAtTime(7000, context.currentTime);
                hiShelf.gain.setValueAtTime(1, context.currentTime);

                gainCompensator.gain.value = 0.85;
                break;
            case "AM Vibes":

                globalDSPDisable();

                source.connect(lowPass);
                lowPass.connect(highPass);
                highPass.connect(compressor);
                compressor.connect(gainCompensator);
                gainCompensator.connect(masterGain);
                masterGain.connect(context.destination);

                compressor.threshold.setValueAtTime(-20, context.currentTime);
                compressor.knee.setValueAtTime(10, context.currentTime);
                compressor.ratio.setValueAtTime(20, context.currentTime);
                compressor.attack.setValueAtTime(0.00, context.currentTime);
                compressor.release.setValueAtTime(0.5, context.currentTime);

                lowPass.frequency.value = 3000;
                lowPass.Q.value = 1.5;

                highPass.frequency.value = 800;
                highPass.Q.value = 1.5;

                loShelf.frequency.setValueAtTime(450, context.currentTime);
                loShelf.gain.setValueAtTime(-40, context.currentTime);
                hiShelf.frequency.setValueAtTime(5000, context.currentTime);
                hiShelf.gain.setValueAtTime(-40, context.currentTime);

                gainCompensator.gain.value = 0.9;

                break;
            case "Pirate Phattness":

                globalDSPDisable();

                source.connect(highPass);
                highPass.connect(loShelf);
                loShelf.connect(hiShelf);
                hiShelf.connect(compressor);
                compressor.connect(gainCompensator);
                gainCompensator.connect(masterGain);
                masterGain.connect(context.destination);

                highPass.frequency.value = 50;
                highPass.Q.value = 1.1;

                loShelf.frequency.setValueAtTime(170, context.currentTime);
                loShelf.gain.setValueAtTime(2.2, context.currentTime);
                hiShelf.frequency.setValueAtTime(5500, context.currentTime);
                hiShelf.gain.setValueAtTime(3.5, context.currentTime);

                compressor.threshold.setValueAtTime(-18, context.currentTime);
                compressor.knee.setValueAtTime(5, context.currentTime);
                compressor.ratio.setValueAtTime(10, context.currentTime);
                compressor.attack.setValueAtTime(0.008, context.currentTime);
                compressor.release.setValueAtTime(0.05, context.currentTime);

                gainCompensator.gain.value = 0.97;
                break;
        }
    });



    document.getElementById('waapiVolumeSliderBigUI').addEventListener('input', function () {
        masterGain.gain.value = this.value;
    });

    document.getElementById('waapiVolumeSliderSmallUI').addEventListener('input', function () {
        masterGain.gain.value = this.value;
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



    function globalDSPDisable() {

        try {
            source.disconnect(compressor);
        } catch { }
        try {
            source.disconnect(loShelf);
        } catch { }
        try {
            source.disconnect(hiShelf);
        } catch { }
        try {
            source.disconnect(gainCompensator);
        } catch { }
        try {
            source.disconnect(masterGain);
        } catch { }
        try {
            source.disconnect(lowPass);
        } catch { }
        try {
            source.disconnect(highPass);
        } catch { }
        try {
            source.disconnect(context.destination);
        } catch { }
        


        try {
            compressor.disconnect(compressor);
        } catch { }
        try {
            compressor.disconnect(loShelf);
        } catch { }
        try {
            compressor.disconnect(hiShelf);
        } catch { }
        try {
            compressor.disconnect(gainCompensator);
        } catch { }
        try {
            compressor.disconnect(masterGain);
        } catch { }
        try {
            compressor.disconnect(lowPass);
        } catch { }
        try {
            compressor.disconnect(highPass);
        } catch { }
        try {
            compressor.disconnect(context.destination);
        } catch { }


        try {
            loShelf.disconnect(compressor);
        } catch { }
        try {
            loShelf.disconnect(loShelf);
        } catch { }
        try {
            loShelf.disconnect(hiShelf);
        } catch { }
        try {
            loShelf.disconnect(gainCompensator);
        } catch { }
        try {
            loShelf.disconnect(masterGain);
        } catch { }
        try {
            loShelf.disconnect(lowPass);
        } catch { }
        try {
            loShelf.disconnect(highPass);
        } catch { }
        try {
            loShelf.disconnect(context.destination);
        } catch { }


        try {
            hiShelf.disconnect(compressor);
        } catch { }
        try {
            hiShelf.disconnect(loShelf);
        } catch { }
        try {
            hiShelf.disconnect(hiShelf);
        } catch { }
        try {
            hiShelf.disconnect(gainCompensator);
        } catch { }
        try {
            hiShelf.disconnect(masterGain);
        } catch { }
        try {
            hiShelf.disconnect(lowPass);
        } catch { }
        try {
            hiShelf.disconnect(highPass);
        } catch { }
        try {
            hiShelf.disconnect(context.destination);
        } catch { }


        try {
            gainCompensator.disconnect(compressor);
        } catch { }
        try {
            gainCompensator.disconnect(loShelf);
        } catch { }
        try {
            gainCompensator.disconnect(hiShelf);
        } catch { }
        try {
            gainCompensator.disconnect(gainCompensator);
        } catch { }
        try {
            gainCompensator.disconnect(masterGain);
        } catch { }
        try {
            gainCompensator.disconnect(lowPass);
        } catch { }
        try {
            gainCompensator.disconnect(highPass);
        } catch { }
        try {
            gainCompensator.disconnect(context.destination);
        } catch { }


        try {
            masterGain.disconnect(compressor);
        } catch { }
        try {
            masterGain.disconnect(loShelf);
        } catch { }
        try {
            masterGain.disconnect(hiShelf);
        } catch { }
        try {
            masterGain.disconnect(gainCompensator);
        } catch { }
        try {
            masterGain.disconnect(masterGain);
        } catch { }
        try {
            masterGain.disconnect(lowPass);
        } catch { }
        try {
            masterGain.disconnect(highPass);
        } catch { }
        try {
            masterGain.disconnect(context.destination);
        } catch { }
 
    };

}