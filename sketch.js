var box
function setup() {
  createCanvas(600,600);
  box =createSprite (300,300, 30,30);
  box.shapeColor = "pink"
}

function draw() 
{
  background("black");

if (keyDown ("right")){
  box.x=box.x+8;
}

if (keyDown ("left")){
  box.x=box.x-8;
}

if (keyDown ("up")){
  box.y=box.y-8;
}

if (keyDown ("down")){
  box.y=box.y+8;
}
drawSprites();
}




