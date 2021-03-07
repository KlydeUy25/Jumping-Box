var canvas;
var music;
var box1, box2, box3, box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1=createSprite(0,580,360,30)
box1.shapeColor=("red")
box2=createSprite(295,580,200,30)
box2.shapeColor=("blue")
box3=createSprite(550,580,200,30)
box3.shapeColor=("green")
box4=createSprite(740,580,220,30)
box4.shapeColor=("yellow")
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="orange"
ball.velocityX=4
ball.velocityY=8


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
ball.bounceOff(edges)
if(box1.isTouching(ball) && ball.bounceOff(box1))
{ ball.shapeColor = rgb(0,0,255);
     music.play();
 }

 if(box2.isTouching(ball)){
    ball.shapeColor = rgb(255,128,0);
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
}

if(box3.isTouching(ball) && ball.bounceOff(box3)){
    ball.shapeColor = rgb(153,0,76);
}

if(box4.isTouching(ball) && ball.bounceOff(box4)){
    ball.shapeColor = rgb(0,100,0);
}
  drawSprites() 
//add condition to check if box touching surface and make it box
}
