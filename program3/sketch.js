function setup() {
  createCanvas(1000,1000);
  }
  function draw()
  {
  if (mouseIsPressed) {
  fill(255, 0, 0, 160);
  strokeWeight(2)
  ellipse(mouseX,mouseY,20)
  }else {
  fill(0, 0, 255, 160);
  strokeWeight(2)
  ellipse(mouseX,mouseY,20)
  }
  
  }
  
  
