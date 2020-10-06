
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper , dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper=new paper(100,100,70);
   dustbin=new dustbin(400,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine); 
  dustbin.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
}

