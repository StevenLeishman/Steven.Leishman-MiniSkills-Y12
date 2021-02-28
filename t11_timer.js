/********************************************************/
//
/********************************************************/
var timer;
var counter = 0;

function setup() {
  createCanvas(400,400)
  timer = createP("timer");
  setInterval(playTimer,500)
}

function playTimer (){
  timer.html(counter);
  counter++;
  if(counter > 30){
    counter--;
  } else if(counter < 0){
    counter++;
  }
}

function draw() {
  background(220);
}