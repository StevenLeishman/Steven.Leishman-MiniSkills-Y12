/********************************************************/
//
/********************************************************/

<<<<<<< HEAD

//RED ONE
=======
>>>>>>> origin/master
var ball1 = {
  posX: 50,
  posY: 50,
  diameter: 50,
<<<<<<< HEAD
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

  },
};

//BLUE ONE
var ball2 = {
  posX: 350,
  posY: 350,
  diameter: 100,
  speedX: -12,
  speedY: -3,
  display: function () {
    fill(0, 0, 255)
    ellipse(this.posX, this.posY, this.diameter);
  },
  movement: function () {
    ball2.posY = ball2.posY + ball2.speedY;
    ball2.posX = ball2.posX + ball2.speedX;
  },
  bounce: function () {
    let rad = this.diameter / 2
    //checks if ball2 is off screen on X axis
    //checks if ball2 is off screen on X axis
    if (this.posX >= width - rad) {
      //reverse the speed of the ball2 and set position if off the screen
      this.speedX = this.speedX * -1;
      this.posX = width - rad

      //check if it is off the top of the screen  
    } else if (this.posX <= rad) {
      //reverses the speed and adjusts the position
      this.speedX = this.speedX * -1;
      this.posX = rad;
    }

    //checks if ball2 is off screen on X axis
    if (this.posY >= height - rad) {
      //reverse the speed of the ball2
      this.speedY = this.speedY * -1;
      this.posY = height - rad;

    } else if (this.posY <= rad) {
      this.speedY = this.speedY * -1;
      this.posY = rad;

    }
  }
};

//SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);

  //randomize positions of balls
  ball1.posY = random(25, 375)
  ball1.posX = random(25, 375)
  ball2.posY = random(25, 375)
  ball2.posX = random(25, 375)

  slider = createSlider(10, 150, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
=======
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
  
  //
  ball1.posX = random(ball1.diameter/2, width - (ball1.diameter/2))
  ball1.posY = random(ball1.diameter/2, height - (ball1.diameter/2))

  ball2.posX = random(ball2.diameter/2, width - (ball2.diameter/2))
  ball2.posY = random(ball2.diameter/2, height - (ball2.diameter/2))
>>>>>>> origin/master
}

//DRAW
function draw() {
<<<<<<< HEAD
  background(200, 200, 200, 100);

  //change the slider
  ball1.diameter = slider.value();
  ball2.diameter = slider.value();

  //ball 1 functions
  ball1.movement();
  ball1.bounce();
  ball1.display();

  //ball 2 functions
  ball2.movement();
  ball2.bounce();
  ball2.display();

}

=======
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
  
  ball1movement();
  ball2movement();
  

  

}


/*******************************************************/
/*******************Ball 1******************************/
/*******************************************************/
function ball1movement(){
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

}



/*******************************************************/  /*******************Ball 2******************************/
/*******************************************************/
function ball2movement(){

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
>>>>>>> origin/master
