export async function loadWebAudio() {

    let context = new (window.AudioContext || window.webkitAudioContext)();
    let audioElement = document.querySelector('#streamSourceElement');
    let source = context.createMediaElementSource(audioElement);
    let gainNode = context.createGain();

    source.connect(gainNode);
    gainNode.connect(context.destination);


    //document.getElementById('masterVolume').addEventListener('input', function () {
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

