/********************************************************/
//
/********************************************************/
function setup (){
  createCanvas(400,400);
}

function draw(){
  background(0,255,238);
  
  //rectangle with colour red
  fill(250,0,0);
  noStroke();
  rect(175,175,50,50);

  
  //Oval
  fill(255,255,0);
  ellipse(100,100,100,50);
  
  
  stroke(0,250,0);
  strokeWeight(10)
  line(200,200,300,200);
  
  //Blue ellipse with green outline, slightly transparent
  fill(0,0,250,150);
  ellipse(125,125,75,75)
}