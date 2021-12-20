var boy_1, boy_img, bg_img;
var bg;


function preload(){
  bg_img = loadImage("Beware_of_the _ghost\horror_background.jpg");
}


function setup() {
  createCanvas(800,600);

  bg = createSprite(400,300,800,600);
  bg.addImage(bg_img);
  
}


function draw() 
{
  background(51);
  drawSprites();
  
 
}

