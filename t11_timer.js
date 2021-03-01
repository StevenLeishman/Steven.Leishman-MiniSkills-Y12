/********************************************************/
//
/********************************************************/
var timeUp;
var timeDown;
var counter = 0;
var counter2 = 30;

function setup() {
  createCanvas(400, 400)
  background(255,255,255)
  timeUp = createP("timeUp");
  timeUp.style("font-size", "50px")
  timeDown = createP("timeDown");
  timeDown.style("font-size", "50px")
  setInterval(playTimer, 250)
}

function playTimer() {
  timeUp.html("timeUp = " + counter);
  counter++;
  if (counter > 30) {
    background(200, 30, 200)
    counter = 30;
    countDown();
  }
}

function countDown() {
  timeUp.html("timeUp");
  timeDown.html("timeDown = " + counter2);
  counter2--;
  if (counter2 < 0) {
    background(0, 0, 0)
    counter2 = 0;
  }
}