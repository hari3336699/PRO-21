
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var groundObj;
var leftSide;
var rightSide;




function preload()
{
	
}

function setup() {
	createCanvas(2000, 1500);


	engine = Engine.create();
	world = engine.world;

groundObj=new Ground(width/2,670,width,20);
leftSide=new Ground(1100,600,20,120);
rightSide=new Ground(1350,600,20,120)







	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.4,
		friction:0,
		density:1.2

	}
	ball=Bodies.circle(200,100,14,ball_options);
	World.add(world,ball);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  groundObj.show()
  leftSide.show()
  rightSide.show()
  Engine.update(engine);

  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:0})

	}
}



