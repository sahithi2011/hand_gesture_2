prediction_1 ="";
prediction_2 ="";

Webcam.set({
    width:350,
    height:300,
    image_format : 'jpeg',
    jpeg_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'" />'
});

}


console.log('ml5 version:', ml5.version);
Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is " + prediction_1;
    speak_data_2 = "And The Second Prediction Is " + prediction_2;
    var utter_this =new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utter_this.rate = 0.5;
    synth.speak(utter_this);


}