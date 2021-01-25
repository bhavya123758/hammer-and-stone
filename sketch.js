
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var star_options;
var hammer,hammerBody;
var stone,stoneBody;
var ground;
var groundBody;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine= Engine.create();
	world = engine.world;
	options={
		'isStatic':true
	}
ground=createSprite(400,690,800,20);
ground.shapeColor="red"
groundBody=Bodies.rectangle(400,690,800,20,options)
	//Create the Bodies Here.
	World.add(world,groundBody)
hammer1=new Hammer(200,100);
stone1=new Stone(200,300,100,PI/7)
rubber1=new Rubber(700,300,100);
iron1= new Iron(150,100,70,50);
sand1=new Sand(90,20,20);
sand2=new Sand(110,20,20);
sand3=new Sand(130,20,20);
sand4=new Sand(170,20,20);
sand5=new Sand(190,20,20);
sand6=new Sand(210,20,20);
sand7=new Sand(230,20,20);
sand8=new Sand(250,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background("cyan");
  
 hammer1.display();
 stone1.display();
 rubber1.display();
 iron1.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 sand6.display();
 sand7.display();
 sand8.display();
  drawSprites();
 
}



