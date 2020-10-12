
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, mango;
var ground;
var stone;
var boy;

function preload(){
	treeImg = loadImage("Plucking mangoes/tree.png");
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-10, width, 20);

	//Create the Bodies Here.
	stone = new Stone(400, 500);

	mango = new Mango(300, 300, 40, 60);	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground.display();
  mango.display();
  stone.display();

  drawSprites();
 
}

/**function mouseDragged(){
    if (gameState !== "launch"){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launch";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
    }
}

*/
