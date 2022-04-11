export async function loadWebAudio() {

    let context = new (window.AudioContext || window.webkitAudioContext)();
    let audioElement = document.querySelector('#streamSourceElement');
    let source = context.createMediaElementSource(audioElement);
    let gainNode = context.createGain();

    source.connect(gainNode);
    //gainNode.connect(context.destination);

    //var masterVolume = document.getElementById('masterVolume');
    //var volumeLevel = masterVolume.value;


    var compressor = context.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-50, context.currentTime);
    compressor.knee.setValueAtTime(40, context.currentTime);
    compressor.ratio.setValueAtTime(12, context.currentTime);
    compressor.attack.setValueAtTime(0.2, context.currentTime);
    compressor.release.setValueAtTime(0.25, context.currentTime);

    gainNode.connect(compressor);

    compressor.connect(context.destination);



    //Object.defineProperty(masterVolume, "value", {
    //    set(newValue) {
    //        console.log(newValue);
    //        //volumeLevel = newValue;
    //        //gainNode.gain.value = newValue;
    //    },
    //    get() {
    //        return value;
    //    }
    //});


    //document.getElementById('masterVolume').addEventListener('change', function () {
    //    gainNode.gain.value = this.value;

    //    // document.getElementById('volumeSlider').value = this.value;
    //    //window.WriteCSharpMessageToConsole = (dotnetHelper) => {
    //    //    dotnetHelper.invokeMethod('UpdateVolumeState', this.value);
    //    //}
    //});

    //document.getElementById('waapiVolumeSlider').addEventListener('input', function () {
    //    gainNode.gain.value = this.value;

    ////    // document.getElementById('volumeSlider').value = this.value;
    ////    //window.WriteCSharpMessageToConsole = (dotnetHelper) => {
    ////    //    dotnetHelper.invokeMethod('UpdateVolumeState', this.value);
    //    //}
    //});


    //document.getElementById('masterButton').addEventListener('click', function () {
    //    var masterButtonIcon = document.getElementById('masterButtonIcon');
    //    var stream = document.getElementById('streamSourceElement');
    //    var source = document.getElementById('streamURL').innerHTML;

    //    if (masterButtonIcon.classList.contains('fa-circle-pause')) {           
    //        stream.pause();
    //        stream.src = "";
    //        stream.load();
    //    } else {
    //        stream.src = source;
    //        stream.load();
    //        stream.play();
    //    }
    //});    
}

