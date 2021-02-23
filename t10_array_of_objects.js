/********************************************************/
//
/********************************************************/

var balls = []


//SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);


  for (var i = 0; i < 10; i++) {
    balls[i] = {
      posX: random(0,width),
      posY: random(0,height),
      diameter: 50,
      speedX: 4,
      speedY: 3,
      display: function () {
        fill(255, 0, 0);
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


  //randomize positions of balls
  /*balls.posY = random(25, 375)
  ball1.posX = random(25, 375)
  ball2.posY = random(25, 375)
  ball2.posX = random(25, 375)*/

  slider = createSlider(10, 150, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
}

//DRAW
function draw() {
  background(200, 200, 200, 100);

  for (var i = 0; i<balls.length; i++){
    balls[i].movement()
    balls[i].bounce()
    balls[i].display()
  }
}

