let max_distance, sound, amplitude;

function preload(){
  sound = loadSound('../audio/wiley.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  max_distance = dist(0, 0, windowWidth, windowHeight);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(0);
  for (let i = 0; i <= width; i += 20) {
    for (let j = 0; j <= height; j += 20) {
      let level = amplitude.getLevel();
      let size1 = map(level, 0, 1, 0.5, 2);
      let size2 = dist(mouseX, mouseY, i, j);
      size2 = ((size2 / max_distance) * 25)*size1;
      fill(143, 30, 255 );
      ellipse(i, j, size2, size2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function toggleSound() {
  if (sound.isPlaying() ){
    sound.stop();
  } else {
    sound.play();
  }
}

function mousePressed() {
  userStartAudio();
  toggleSound();
}
