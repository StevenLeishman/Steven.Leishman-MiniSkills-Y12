/********************************************************/
//
/********************************************************/

var ball1 = {
  posX:50,
  posY:50,
  diameter: 50,
  speedX: 4,
  speedY: 3,
  display : function(){
    fill(255,0,0);
    ellipse(this.posX,this.posY,this.diameter);
  },
  movement: function(){
    //Adjusts position of ball 1
    this.posY = this.posY + this.speedY;
    this.posX = this.posX + this.speedX;
  },
  bounce: function(){
    let rad = this.diameter /2;
      //checks if ball1 is off screen on X axis
    if(this.posX >= (width - (rad))){
      //reverse the speed of the ball1 and adjusts the position
      this.speedX = this.speedX * -1;
      this.posX = (width - (this.diameter / 2))

    //check if it is off the top of the screen  
    } else if(this.posX <= (this.diameter / 2)){
      //reverses the speed and adjusts the position
      this.speedX = this.speedX * -1;
      this.posX = this.diameter / 2;
    }

    //checks if ball1 is off screen on Y axis
    if(this.posY >= (height - (this.diameter / 2))){
      //reverse the speed of the ball1 and adjusts the position
      this.speedY = this.speedY * -1;
      this.posY = height - this.diameter / 2;

    } else if (this.posY <= this.diameter / 2 ){
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
  display: function(){
    fill(0,0,255)
    ellipse(this.posX,this.posY,this.diameter);
  },
  movement:function(){
    ball2.posY = ball2.posY + ball2.speedY;
    ball2.posX = ball2.posX + ball2.speedX;
  }
};

function setup() {
  createCanvas(400, 400);
  
  //randomize positions of balls
  ball1.posY = random(25,375)
  ball1.posX = random(25,375)
  ball2.posY = random(25,375)
  ball2.posX = random(25,375)
}

function draw() {
  background(200,200,200,100);

  
  ball1.movement();
  ball1.bounce();
  ball1.display();
  //draws ball1 in red
  

  //draws ball2 in blue
  

  
  //Adjusts position of ball 2
 

}

function ball2Movement (){
  //checks if ball2 is off screen on X axis
  //checks if ball2 is off screen on X axis
  if(ball2.posX >= (width - (ball2.diameter / 2))){
    //reverse the speed of the ball2 and set position if off the screen
    ball2.speedX = ball2.speedX * -1;
    ball2.posX = (width - (ball2.diameter / 2))

  //check if it is off the top of the screen  
  } else if(ball2.posX <= (ball2.diameter / 2)){
    //reverses the speed and adjusts the position
    ball2.speedX = ball2.speedX * -1;
    ball2.posX = ball2.diameter / 2;
  }

  //checks if ball2 is off screen on X axis
  if(ball2.posY >= (height - (ball2.diameter / 2))){
    //reverse the speed of the ball2
    ball2.speedY = ball2.speedY * -1;
    ball2.posY = height - ball2.diameter / 2;

  } else if (ball2.posY <= ball2.diameter / 2 ){
    ball2.speedY = ball2.speedY * -1;
    ball2.posY = ball2.diameter / 2;

  }
}