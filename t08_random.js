/********************************************************/
//
/********************************************************/

var ball1 = {
  posX: 50,
  posY: 50,
  diameter: 50,
  speedX: 12,
  speedY: 9,
};

var ball2 = {
  posX: 350,
  posY: 350,
  diameter: 50,
  speedX: -12,
  speedY: -9,
};

function setup() {
  createCanvas(400, 400);
  ball1.posX = random(ball1.diameter/2, width - (ball1.diameter/2))
  ball1.posY = random(ball1.diameter/2, height - (ball1.diameter/2))

  ball2.posX = random(ball2.diameter/2, width - (ball2.diameter/2))
  ball2.posY = random(ball2.diameter/2, height - (ball2.diameter/2))
}

function draw() {
  background(200,200);
  
  //draws the ellipse in red
  fill(255,0,0);
  ellipse(ball1.posX,ball1.posY,ball1.diameter);

  fill(0,0,255)
  ellipse(ball2.posX,ball2.posY,ball2.diameter);

  //Adjusts position of ball 1
  ball1.posY = ball1.posY + ball1.speedY;
  ball1.posX = ball1.posX + ball1.speedX;
  //Adjusts position of ball 2
  ball2.posY = ball2.posY + ball2.speedY;
  ball2.posX = ball2.posX + ball2.speedX;
  

  /*******************************************************/
  /*******************Ball 1******************************/
  /*******************************************************/
  //checks if ball1 is off screen on X axis
  if(ball1.posX >= (width - (ball1.diameter / 2))){
    //reverse the speed of the ball1
    ball1.speedX = ball1.speedX * -1;
    ball1.posX = width - (ball1.diameter / 2)

  } else if(ball1.posX <= (ball1.diameter / 2)){
    ball1.speedX = ball1.speedX * -1;
    ball1.posX = (ball1.diameter / 2);
  }

  //checks if ball1 is off screen on X axis
  if(ball1.posY >= (height - (ball1.diameter / 2))){
    //reverse the speed of the ball1
    ball1.speedY = ball1.speedY * -1;
    ball1.posY = (height - (ball1.diameter / 2))
  } else if (ball1.posY <= (ball1.diameter / 2)) {
    ball1.speedY = ball1.speedY * -1;
    ball1.posY = (ball1.diameter / 2);
  }

  /*******************************************************/
  /*******************Ball 2******************************/
  /*******************************************************/
  //checks if ball2 is off screen on X axis
  if(ball2.posX >= (width - (ball2.diameter / 2))){
    //reverse the speed of the ball2
    ball2.speedX = ball2.speedX * -1;
    ball2.posX = width - (ball2.diameter / 2)
  } else if(ball2.posX <= ((width-width) + (ball2.diameter / 2))){
    ball2.speedX = ball2.speedX * -1;
    ball2.posX = (ball2.diameter / 2)
  }

  //checks if ball2 is off screen on X axis
  if(ball2.posY >= (height - (ball2.diameter / 2))){
    //reverse the speed of the ball2
    ball2.speedY = ball2.speedY * -1;
    ball2.posY = height - (ball2.diameter / 2)
  } else if (ball2.posY <= ((height-height) + (ball2.diameter / 2))) {
    ball2.speedY = ball2.speedY * -1;
    ball2.posY = (ball2.diameter / 2)
  }

}