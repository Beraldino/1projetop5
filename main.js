function preload() {
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide(); 
    video.center();
}

function draw() {
    
    circle(0, 0, 0);
    circle(300, 200, 0);
    ellipse(10, 100, 100);
    rect(300, 200, 550, );
    image(video, 100, 100, 400, 400);
}