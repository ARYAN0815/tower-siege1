const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hexagonImg
var engine, world;
var box1;
var polygon;
var ground;
function preload(){
hexagonImg=loadImage("hexagon.png");
}
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
 
  //level1
  box1=new Box(390,235,30,40);
  box2=new Box(420,235,30,40);
  box3=new Box(450,235,30,40);
  box4=new Box(480,235,30,40);
  box5=new Box(510,235,30,40);
  //level2;
  box6=new Box(420,195,30,40);
  box7=new Box(450,195,30,40);
  box8=new Box(480,195,30,40);
 
  //level3
  box9=new Box(450,155,30,40);
 
   polygon=Bodies.circle(100,300,20);
   World.add(world,polygon);
   slingshot=new SlingShot(this.polygon,{x:200,y:100});
   ground=new Ground(450,260,200,10);
   console.log(box1);
}

function draw() {
  background(255);  
  Engine.update(engine);
  imageMode(CENTER);
  image(hexagonImg,polygon.position.x,polygon.position.y,40,40);
  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ground.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}