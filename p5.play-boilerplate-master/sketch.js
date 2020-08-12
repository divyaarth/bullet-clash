var bullet
var wall
var thickness
var speed
var weight;





function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  thickness= random(22,83);
  speed = random(223,321);
  weight=random(30,52);
 wall= createSprite(1500,200,thickness,height/2)
 //wall.shapecolor(80,80,80);
}

function draw() {
  background(255,255,255);  
  bullet.disply;
  bullet.velocityX=speed;
  //bullet.collide(wall);
 // wall.collide(bullet);
  wall.display;
  wall.shapeColor=color(80,80,80);
  function hasCollided(bullet,wall){
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
}
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage>10){
wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
      }
}
  
 /* if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
     var deformation =0.5*weight*speed*speed/22500
     if(deformation>180){
       bullet.shapeColor=color(225,0,0);
     }
     if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0);
    } 
    if(deformation<100){
      bullet.shapeColor=color(0,225,0);
    }
  }*/
   drawSprites();
}
