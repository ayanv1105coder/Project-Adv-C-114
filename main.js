function preload() {
}

function setup() {
    canvas = createCanvas(700, 390);
    canvas.position(65, 195);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 700, 480);
}

function take_selfie() {
    save('photo.png')
}