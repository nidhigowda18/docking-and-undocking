var bg,spimg1,spimg2,spimg3,spimg4,issimg;
var hasdocked=false;

function preload()
{
bg=loadImage("images/spacebg.jpg");
spimg1=loadImage("images/spacecraft1.png");
spimg2=loadImage("images/spacecraft2.png");
spimg3=loadImage("images/spacecraft3.png");
spimg4=loadImage("images/spacecraft4.png");
issimg=loadImage("images/iss.png");
}

function setup() {
  createCanvas(800,400);
  spacecraft=createSprite(400, 200, 50, 50);
  spacecraft.addImage(spimg1);
  spacecraft.scale=0.15;

  iss=createSprite(330,130,50,50);
  iss.addImage(issimg);
  iss.scale=0.25;
}

function draw() {
  background(bg);  

  if(!hasdocked)
  {
    spacecraft.x=spacecraft.x+random(-1,1);
  }

  if(keyDown("UP_ARROW"))
  {
    spacecraft.addImage(spimg2);
    spacecraft.y=spacecraft.y-2
  }

  if(keyDown("DOWN_ARROW"))
  {
    spacecraft.addImage(spimg2);
    spacecraft.y=spacecraft.y+2;
  }

  if(keyDown("LEFT_ARROW"))
  {
    spacecraft.addImage(spimg3);
    spacecraft.x=spacecraft.x-2;
  }

  if(keyDown("RIGHT_ARROW"))
  {
    spacecraft.addImage(spimg4);
    spacecraft.x=spacecraft.x+2;
  }

  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10))
  {
    hasdocked=true;
    textSize(25);
    fill("white");
    text("DOCKING SUCCESSFUL",300,300);
  }

  drawSprites();
}