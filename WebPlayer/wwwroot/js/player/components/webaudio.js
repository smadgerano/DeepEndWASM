﻿//var context = new (window.AudioContext || window.webkitAudioContext)();
////var context = new AudioContext();
////var audioElement = document.getElementById("streamSourceElement");
//var audioElement = document.querySelector('audio');
export async function loadWebAudio(){
    let context = new (window.AudioContext || window.webkitAudioContext)();

    let audioElement = document.querySelector('#streamSourceElement');

    let source = context.createMediaElementSource(audioElement);

    let gainNode = context.createGain();
    gainNode.gain.value = 0.92;


    //var analyser = context.createAnalyser();
    //analyser.fftSize = 2048;
    //var bufferLength = analyser.frequencyBinCount;
    //var dataArray = new Uint8Array(bufferLength);
    //analyser.getByteTimeDomainData(dataArray);

    //source.connect(analyser);

    source.connect(gainNode);

    gainNode.connect(context.destination);



    //var canvas = document.getElementById("oscilloscope");
    //var canvasCtx = canvas.getContext("2d");

    //// draw an oscilloscope of the current audio source

    //function draw() {

    //    requestAnimationFrame(draw);

    //    analyser.getByteTimeDomainData(dataArray);

    //    canvasCtx.fillStyle = '#21252900';
    //    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    //    canvasCtx.lineWidth = 2;
    //    canvasCtx.strokeStyle = "rgb(0, 0, 0)";

    //    canvasCtx.beginPath();

    //    var sliceWidth = canvas.width * 1.0 / bufferLength;
    //    var x = 0;

    //    for (var i = 0; i < bufferLength; i++) {

    //        var v = dataArray[i] / 128.0;
    //        var y = v * canvas.height / 2;

    //        if (i === 0) {
    //            canvasCtx.moveTo(x, y);
    //        } else {
    //            canvasCtx.lineTo(x, y);
    //        }

    //        x += sliceWidth;
    //    }

    //    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    //    canvasCtx.stroke();
    //}

    //draw();
}
