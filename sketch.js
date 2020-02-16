var box,box2;
var sidebox;
var window;
var extention1,extention2,extention3,extention4;

function setup() {
  createCanvas(800,400);
  box=createSprite(400, 200, 50, 120);
  box.shapeColor="red";
  sidebox= createSprite(350, 200, 58, 20, 86, 75);
  sidebox.shapeColor="blue"
  box2=createSprite(300,200,50,120);
  box2.shapeColor="red";
  extention1=createSprite(250,230,50,50);
  extention1.shapeColor="green";
  extention2=createSprite(225,180,10,150); 
  extention2.shapeColor="yellow";
  extention3=createSprite(450,230,50,50);
  extention3.shapeColor="green";
  extention4=createSprite(475,180,10,150);
  extention4.shapeColor="yellow";
  
}

function draw() {
  background(255,255,255);  

  drawSprites();
}