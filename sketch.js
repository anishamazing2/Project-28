const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var tree;
var mango;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var boy1;
var stone;
var sling1;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	tree = new Tree();
	mango = new Mangoe(random(1050, 1100), random(110, 80));
	mango2 = new Mangoe(random(1140, 1150), random(150, 165));
	mango3 = new Mangoe(random(970, 1000), random(130, 140));
	mango4 = new Mangoe(random(1040, 1041), random(140, 150));
	mango5 = new Mangoe(1120, 100);
	mango6 = new Mangoe(random(1040, 1060), random(30, 35));
	boy1 = new Boy();
	stone = new Stone();
	sling1 = new Sling(stone.body, {x: 260, y: 242});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  
	ground.display();
	tree.display();
	mango.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	boy1.display();
	stone.display();
	sling1.display();
	detectCollision(stone, mango);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);

  drawSprites();
 
}

function mouseDragged(){
	Body.setStatic(stone.body, false);
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
sling1.fly();

}

function keyPressed(){
if(keyCode === 32){
   sling1.attach(stone.body);
}
}

function detectCollision(stoneBody, mangoBody){
	MBP = mangoBody.body.position;
	SBP = stoneBody.body.position;
	

	var distance = dist(SBP.x, SBP.y, MBP.x, MBP.y);
	if(distance <= ((mangoBody.width)/2) + ((stoneBody.width)/2)){
		Body.setStatic(mangoBody.body, false);
	}
}
