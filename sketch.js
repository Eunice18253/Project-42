var iss, issImg, spacecraft, scImg;
var backgrd;
var hasDocked= false;

function preload(){
  issImg= loadImage("iss.png");
  backgrd=loadImage("spacebg.jpg");
  scImg=loadImage("spacecraft1.png");
  scImg1=loadImage("spacecraft2.png");
  scImg2=loadImage("spacecraft3.png");
  scImg3=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,350);
  spacecraft=createSprite(285,240);
  spacecraft.addImage(scImg);
  spacecraft.scale=0.5;
}

function draw() {
  background(backgrd);
  spacecraft.addImage(scImg);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scImg3);
      spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scImg2);
      spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scImg1);
  }
}
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}    

