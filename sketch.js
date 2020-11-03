
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ourworld,ourengine, paper, ground, groundSprite;
var RB1, RB2, RB3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ourengine = Engine.create();
	ourworld = ourengine.world;

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,480);

	ground = new Box(width/2, 500, width, 10);
	RB1 = new Bin(700, 490, 150, 15);
	RB2 = new Bin(780, 460, 15, 70);
	RB3 = new Bin(620, 460, 15, 70);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(ourengine);
  rectMode(CENTER);
  background(0);
  paper.display(); 
  ground.display();
  RB1.display();
  RB2.display();
  RB3.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

     Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-13});
  }
}


