var bullet,wall ;
var speed,weight,thickness ;

function setup() {
  createCanvas(1600,400);
  createSprite(200,200,50,50);
  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed ;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  
speed=Random(223,321);
weight=Random(30,52);
thickness=random(22,83)

}

function draw() {
  background(255,255,255);

  if (hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/thickness*thickness*thickness ;

if (damage<10)
{
  bullet.shapeColor = color(255,0,0);
}
if (damage>10)
{
  bullet.shapeColor = color(230,230,0);
}
}
  
  drawSprites();
}
function hasCollided(bullet,wall)
{
   bulletRightEdge=bullet.x +bullet.width;
   wallLeftEdge=wall.x;
   if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}