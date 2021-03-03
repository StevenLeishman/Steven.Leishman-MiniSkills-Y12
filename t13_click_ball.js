/********************************************************/
//
/********************************************************/
const NUMBALLS = 4;
var ballsArray = [];
var velArray = [10, 9, 8, 7, 6, -6, -7, -8, -9, -10];
var score


//SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < NUMBALLS; i++) {
    ballsArray[i] = {
      posX: width / 2,
      posY: height / 2,
      diameter: 50,
      speedX: random(velArray),
      speedY: random(velArray),
      colR: random(0, 255),
      colG: random(0, 255),
      colB: random(0, 255),

      display: function () {
        fill(this.colR, this.colG, this.colB);
        ellipse(this.posX, this.posY, this.diameter);
      },
      movement: function () {
        //Adjusts position of ball 1
        this.posY = this.posY + this.speedY;
        this.posX = this.posX + this.speedX;
      },
      bounce: function () {
        let rad = this.diameter / 2;
        //checks if ball1 is off screen on X axis
        if (this.posX >= (width - (rad))) {
          //reverse the speed of the ball1 and adjusts the position
          this.speedX = this.speedX * -1;
          this.posX = (width - (this.diameter / 2))

          //check if it is off the top of the screen  
        } else if (this.posX <= (this.diameter / 2)) {
          //reverses the speed and adjusts the position
          this.speedX = this.speedX * -1;
          this.posX = this.diameter / 2;
        }

        //checks if ball1 is off screen on Y axis
        if (this.posY >= (height - (this.diameter / 2))) {
          //reverse the speed of the ball1 and adjusts the position
          this.speedY = this.speedY * -1;
          this.posY = height - this.diameter / 2;

        } else if (this.posY <= this.diameter / 2) {
          //reverse the speed of the ball1 and adjusts the position
          this.speedY = this.speedY * -1;
          this.posY = this.diameter / 2;

        }

      }
    }
  }
}

//
function draw() {
  background(200, 200, 200, 100);
  checkBallHit()
  for (var i = 0; i < ballsArray.length; i++) {
    ballsArray[i].movement()
    ballsArray[i].bounce()
    ballsArray[i].display()
  }
}




/*******************************************************/
//function checkBallHit()
//Checks if the ball is hit then adds to score and deletes
//Input: N/A
//Returns: N/A
/*******************************************************/
function checkBallHit() {
  var ballHit = false;
  for (var i = 0; i < ballsArray.length; i++) {
    var px2Ball = dist(ballsArray[i].posX, ballsArray[i].posY, mouseX, mouseY);
    if (px2ball <= ballsArray[i].diameter / 2) {
      ballHit = true;
      ballsArray.splice(i, 1);
    }
  }
  if (ballHit == true) {
    score++;
  }
}