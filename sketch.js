
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var dbin1, dbin2, dbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,670,20);
	ground = new Ground(400,690,800,20);

	dbin1 = new Dustbin(500,630,20,60);
	dbin2 = new Dustbin(650,630,20,60);
	dbin3 = new Dustbin(575,670,170,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
 
  dbin1.display();
  dbin2.display();
  dbin3.display();

  if (keyDown("up")){
	  keyPressed();
  }
}
function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-85});
}
}

