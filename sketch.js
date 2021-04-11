
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var Bob1,Bob2,Bob3,Bob4,Bob5,Roof;
var Rope1,Rope2,Rope3,Rope4,Rope5;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob1 = new bob(320,575,40);
	Bob2 = new bob(340,575,40);
	Bob3 = new bob(360,575,40);
	Bob4 = new bob(380,575,40);
	Bob5 = new bob(400,575,40);
	Roof = new roof(250,250,230,20);
	Rope1 = new rope(Bob1.body,Roof.body,-80,0);
	Rope2 = new rope(Bob2.body,Roof.body,-40,0);
	Rope3 = new rope(Bob3.body,Roof.body,0,0);
	Rope4 = new rope(Bob4.body,Roof.body,40,0);
	Rope5 = new rope(Bob5.body,Roof.body,80,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();

 Bob1.display();
 Bob2.display();
 Bob3.display();
 Bob4.display();
 Bob5.display();
 Roof.display();
 Rope1.display();
 Rope2.display();
 Rope3.display();
 Rope4.display();
 Rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-50,y:-45})
	}
}



