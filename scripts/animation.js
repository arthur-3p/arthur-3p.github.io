let max_distance, sound, amplitude;

// function preload(){
//   sound = loadSound('../audio/wiley.mp3');
// }

//random freq from array, less crap sounding
//panning?

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  max_distance = dist(0, 0, windowWidth, windowHeight);
  amplitude = new p5.Amplitude(0.5);

}

function draw() {
  background(0);
  for (let i = 0; i <= width; i += 20) {
    for (let j = 0; j <= height; j += 20) {
      let level = amplitude.getLevel();
      let size1 = map(level, 0, 1, 0.5, 2);
      let size2 = dist(mouseX, mouseY, i, j);
      size2 = ((size2 / max_distance) * 25)*size1;
      fill(143, 30, 255);
      ellipse(i, j, size2, size2);
    }
  }

    let r = random();
    if (r > 0.95) {
      for (let k = 0; k <= 1; k++) {
      let osc = new p5.Oscillator('sawtooth');
      osc.start();
      osc.freq(random(600, 750));
      osc.amp(0.2, 0.1);
      osc.amp(0, random(0.3, 0.6));
    }
  }
  if (r > 0.99) {
    let osc = new p5.Oscillator('sine');
    osc.start();
    osc.freq(random(60, 150));
    osc.amp(0.2, 0.1);
    osc.amp(0, random(0.5, 1));
  }
  if (r > 0.8) {
    let osc = new p5.Oscillator('square');
    osc.start();
    osc.freq(random(8000, 9000));
    osc.amp(0.1, 0.01);
    osc.amp(0, 0.01);
  }
  if (r > 0.7 && r < 0.8) {
    let osc = new p5.Oscillator('square');
    osc.start();
    osc.freq(random(10000, 12000));
    osc.amp(0.1, 0.01);
    osc.amp(0, 0.01);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// function toggleSound() {
//   if (sound.isPlaying() ){
//     sound.stop();
//   } else {
//     sound.play();
//   }
// }

function mousePressed() {
  userStartAudio();
  // toggleSound();
}
