function setup() {
    createCanvas(400, 400);
  }
  
  function draw()  {
  if (mouseIsPressed) {
  fill(52,12,150);
  } else {
  fill(12,123,73);
  }
  square(mouseX, mouseY, 50,360, 9);
  }
  
  
  
