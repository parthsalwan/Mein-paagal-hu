var ground;
var pinko;
var particles = []; 
var pinkos = []; 
var divisions = []; 

var divisionHeight = 300;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(480,800);
  

  engine = Engine.create();
  world = engine.world;

  for(var i=0;  i<particles.length; i++){
   particles[j].display();
}  

for(var k=0; k<divisions.length;k++){
  divisions[k].display();
}
  
  ground = new Ground(250, 700, 500, 10);


 Engine.run(engine);

}

function draw() {
  background(0,255,0);  


ground.display();


  drawSprites();
}