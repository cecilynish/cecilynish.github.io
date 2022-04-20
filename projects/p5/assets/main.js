let slider;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.class("container");
  slider = createSlider(30,windowWidth,0, 0);
  slider.position(0, 10);
  slider.class("slider");
}

function draw() {
  let val = slider.value();
  background ("black");
  ellipse(slider.value()-15, windowHeight/2, 30, slider.value()/3+20);
}