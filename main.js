function setup(){
    Canvas = createCanvas(225, 225);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fpBWevCyl/model.json",modelLoaded);

}
function modelLoaded(){
    console.log("Model Loaded!")
}

function draw(){
    image(video, 0, 0, 225, 225);
    classifier.classify(video, gotResult);
}

function draw(){
    image(video, 0, 0, 225, 225);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}
