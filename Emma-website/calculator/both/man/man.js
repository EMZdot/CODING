var list = ["data/1.jpg",
            "data/2.jpg",
            "data/3.jpg",
            "data/4.jpg"];

// get a random item from the list
// first a random index
var index = Math.floor( Math.random() * list.length );

// use the index to get the image from the list
var image_url = list[index];

// set the src of the image with id random-image (see html) to the image url
$("#random-image").attr("src",image_url);


let video;

let classificationResult;
let samples = 0;

function setup() {
    myText = document.getElementById("text");
    noCanvas();
    video = createCapture(VIDEO).parent('videoContainer');
  // Create a video element
  video = createCapture(VIDEO);
  // Append it to the videoContainer DOM element
  video.hide();
  // Extract the features from MobileNet
  // featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  // Create a new classifier using those features and give the video we want to use
  // classifier = featureExtractor.classification(video, videoReady);
  // Create the UI buttons
  // setupButtons();
}

// A function to be called when the video has loaded
function videoReady() {
  select('#videoStatus').html('Video ready!');
}
