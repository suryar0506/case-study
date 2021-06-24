function preload(){

}

function setup(){
canvas = createCanvas(300, 300);
canvas.position(700, -10);
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function draw(){
image(video, 0, 0, 300, 300);
classifier.classify(video, getResult);
}

function getResult(error, result){
if(error){
    console.log(error);
} else {
    console.log(result);
    document.getElementById("realtime_mobilenet_result").innerHTML = result[0].label;
}
}

var images = [
 "Fork.jpg", "Paintbrush.jpg", "Pen.jpg", "Scissors.jpg","Ball.jpg",
];

var mobilenet_results = [
    "swab/swop/mop","ballpoint/ballpoint pen/biro","oscilloscope","swab/swop/mop","Balloon",
];

var googleLens_results = [
    "Fork", "Brush", "Nail", "Scissors","Green Ball",
];

var i = 0;

function imageSlideshow(){
    document.getElementById("imageDisplay").src = images[i];
    document.getElementById("mobilenet_result").innerHTML = mobilenet_results[i];
    document.getElementById("googleLens_results").innerHTML = googleLens_results[i];
    i++;
    if(i == 5){
        i = 0;
    }
}

function final_conclusion(){
    document.getElementById("final_conclusion_display").innerHTML = "The results that I've gathered, state that Google lens is more accurate than Mobilenet.";
}

function empty_of_text(){
    document.getElementById("final_conclusion_display").innerHTML = "";
    console.log("I'm supposed to work...");
}