
var car, wall



function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 50, 50);
wall = createSprite (400,300,30,40);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}