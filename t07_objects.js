/********************************************************/
//
/********************************************************/

var ball1 = {
  posX: 50,
  posY: 50,
  diameter: 50,
  speedX: 4,
  speedY: 3,
};

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(200,200)
  
  //draws the ellipse in red
  fill(255,0,0);
  ellipse(ball1.posX,ball1.posY,ball1.diameter,ball1.diameter);

  //Adjusts position
  ball1.posY = ball1.posY + ball1.speedY;
  ball1.posX = ball1.posX + ball1.speedX;
  
  //checks if ball is off screen on X axis
  if(ball1.posX >= (width - (ball1.diameter / 2))){
    ball1.speedX = ball1.speedX * -1;
  } else if(ball1.posX <= (width + (ball1.diameter / 2))){
    ball1.speedX = ball1.speedX * -1;
  }

  //checks if ball is off screen on X axis
  if(ball1.posY >= (height - (ball1.diameter / 2))){

    console.log("test")
    
    ball1.speedY = ball1.speedY * -1;

  } else if (ball1.posY <= (height + (ball1.diameter / 2)) {

    ball1.speedY = ball1.speedY * -1;
  }

}