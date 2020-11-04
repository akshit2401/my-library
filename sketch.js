var fixedRect, movingRect;
var fixedSquare, movingSquare;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  fixedSquare = createSprite(200, 50, 50, 80);
  fixedSquare.shapeColor = "green";
  fixedSquare.debug = true;
  movingSquare = createSprite(500, 50, 80, 30);
  movingSquare.shapeColor = "green";
  movingSquare.debug = true;

  movingSquare.velocityX = -5;
  fixedSquare.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect , fixedRect);
  bounceoff(movingSquare , fixedSquare);
  drawSprites();
}

