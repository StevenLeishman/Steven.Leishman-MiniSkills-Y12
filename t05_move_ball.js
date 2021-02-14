/********************************************************/
//
/********************************************************/
var ballPosX=50;
var ballPosY=50;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  fill(255,0,0);
  ellipse(ballPosX,ballPosY,50,50);
  ballPosX++;
  ballPosY++;
}