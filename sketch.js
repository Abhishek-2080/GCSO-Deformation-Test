var car,wall;
var speed,weight

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  car.shapeColor="blue";
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor="blue";
  speed=random(+55,+90);
  weight=random(400,1500);
}

function draw() {
  background(0);
  car.velocityX= speed;
collision(car,wall);
if(wall.x-car.x<(car.width-wall.width)/2){
  car.velocityX=0;
  var deformation= 0.5 * weight * speed * speed/22500;


if(deformation >180){
  car.shapeColor=color(255,0,0);
}

if(deformation <180 && deformation>100){
  car.shapeColor=color(230,230,0);
}

if(deformation <100 ){
  car.shapeColor=color(0,255,0);
}
}
  drawSprites();
}
function collision(object1,object2){
if ((object1.x-object2.x)<=((object2.width/2)+(object1.width/2))
&& (object2.x-object1.x)<=((object2.width/2)+(object1.width/2))
&& (object1.y-object2.y)<=((object2.width/2)+(object1.width/2))
&& (object2.y-object1.y)<=((object2.width/2)+(object1.width/2))
){

}
}
