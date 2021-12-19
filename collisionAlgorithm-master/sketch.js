var fixedRect, movingRect,rect1,rect2,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(300,250,80,30);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect2 = createSprite(200,350,80,30);
  rect2.shapeColor = "green";
  rect2.debug = true;
  rect3 = createSprite(100,450,80,30);
  rect3.shapeColor = "green";
  rect3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.isTouching(rect1))
  {
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }

  if(movingRect.isTouching(rect2))
  {
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  if(movingRect.isTouching(rect3))
  {
    movingRect.shapeColor = "red";
    rect3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    rect3.shapeColor = "green";
  }
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}