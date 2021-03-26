
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(150,260,50)
	bob2 = new Bob(200,260,50)
	bob3 = new Bob(250,260,50)
	bob4 = new Bob(300,260,50)
	bob5 = new Bob(350,260,50)
	Ground = new ground(250,100,250,20)
	rope = new SlingShot(bob1.body ,{x:150,y:110})
	rope2= new SlingShot(bob2.body ,{x:200,y:110})
	rope3= new SlingShot(bob3.body ,{x:250,y:110})
	rope4= new SlingShot(bob4.body ,{x:300,y:110})
	rope5= new SlingShot(bob5.body ,{x:350,y:110})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,192,203);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  Ground.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-105,y:-85})
		
	}
	
	
}
