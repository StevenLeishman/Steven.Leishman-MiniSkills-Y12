/********************************************************/
//
/********************************************************/
var canvas;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.mouseOver(changeCol);
  canvas.mouseOut(changeCol);
  canvas.mouseClicked(changeCol)
}

function draw() {
  
}

function changeCol(){
  background(random(0,255),random(0,255),random(0,255))
}