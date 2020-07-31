const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var paper;
var ground;
var engine;
var world;
var bodies;
var bin2;
var launcher1;

function setup() {

	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	

	paper = new Paper(100,250);
	launcher1 = new Launcher(paper.body,{x:100,y:600});
  ground = new Ground(600,680,1200,20);
  bin2 = new Bin(930,635);

  
}

function draw() {

  background(255);

  Engine.update(engine);
paper.display();
ground.display();
launcher1.display();
bin2.display();
  drawSprites();
 
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-90});
    }
    
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher1.fly();
}