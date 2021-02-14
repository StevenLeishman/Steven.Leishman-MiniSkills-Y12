/********************************************************/
//
/********************************************************/
var ballPosX=50;
var ballPosY=50;
var ballSpeedX = 22;
var ballSpeedY = 12;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(200,200)
  
  //draws the ellipse in red
  fill(255,0,0);
  ellipse(ballPosX,ballPosY,50,50);

  //Adjusts position
  ballPosY = ballPosY + ballSpeedY;
  ballPosX = ballPosX + ballSpeedX;
  
  //checks if ball is off screen on X axis
  if(ballPosX >= 375){
    ballSpeedX = ballSpeedX * -1;
  } else if(ballPosX <= 25){
    ballSpeedX = ballSpeedX * -1;
  }

  //checks if ball is off screen on X axis
  if(ballPosY >= 375){
    ballSpeedY = ballSpeedY * -1;
  } else if(ballPosY <= 25){
    ballSpeedY = ballSpeedY * -1;
  }

}