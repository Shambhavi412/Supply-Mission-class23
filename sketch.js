var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
box1 = new Box(650,648,200,20);
box2 = new Box(750,608,20,100);
box3 = new Box(550,608,20,100);
	packageSprite=createSprite(100, 80, 10,10);
	
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(100, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	
	World.add(world, packageBody);
	

	//Create a Ground
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(10,140,70);
  Engine.update(engine);
  rectMode(CENTER);

  
  packageSprite.y= packageBody.position.y 
  keyPressed();

  if(packageSprite.x< 650)
		{
			packageSprite.x = packageSprite.x + 8;
}
  if(helicopterSprite.x<650)
  {
	helicopterSprite.x=helicopterSprite.x+8;
 
  }

box1.display();
  box2.display();
  box3.display();

  


  drawSprites();



 
}

function keyPressed() {
	if (keyDown(DOWN_ARROW)&& packageSprite.x>650) {
		Matter.Body.setStatic(packageBody,false);

		
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	/*var packageBody_options = {
		isStatic : false
	}
   
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, packageBody_options});
	World.add(world, packageBody);
*/	
}
   }
   
