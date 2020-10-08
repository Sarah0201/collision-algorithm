var fixedRect, movingRect,gameobject,gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject = createSprite(200,100,50,50);
  gameobject.shapeColor = "green";
  gameobject2 = createSprite(400,100,50,50);
  gameobject2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(touch(movingRect,gameobject2)){
    movingRect.shapeColor = "red";
    gameobject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameobject2.shapeColor = "green";
  }

  drawSprites();
}

function touch(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else {
  return false;
}
}