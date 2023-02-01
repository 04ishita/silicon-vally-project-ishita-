var girl , girlAn ,backGround ,coin , coinAn,obstacle1,snake,bullet,coinSound1

var score = 0
var coinGroup,obstacleGroup

function preload() {
girlAn = loadAnimation("assets/girl1.png","assets/girl2.png","assets/girl3.png","assets/girl4.png","assets/girl5.png",
"assets/girl6.png","assets/girl7.png","assets/girl8.png","assets/girl9.png","assets/girl10.png")
backImg = loadImage("assets/backGround1.jpg")
coinAn = loadAnimation("assets/coin1.png","assets/coin2.png","assets/coin3.png","assets/coin4.png","assets/coin5.png",
"assets/coin6.png")
bulletImg = loadImage("assets/bullet.png")
snakeImg = loadImage("assets/snake.png")
obstacle1Img = loadImage("assets/obstacle1.png")
coinSound1=loadSound("assets/coinSound1.mp3")
 //backSound=loadSound("assets/backgroundSound.mp3")
}

function setup (){


createCanvas(windowWidth,windowHeight)
backGround=createSprite(width/2,height/2-200)
backGround.addImage(backImg)
backGround.scale = 1.6


girl= createSprite(200,600)
girl.addAnimation("girlRunning",girlAn)
girl.scale= 0.2
ground=createSprite(width/2,730,width,10)
//girl.velocityX = 2
coinGroup=new Group();
obstacleGroup=new Group();
ground.visible=false;
}

function draw(){
    
background(0);
//backSound.play();
backGround.velocityX = -2

if(backGround.x < width/2-40){
    backGround.x = width/2
}



if(keyDown(UP_ARROW)){
girl.velocityY= -10
}

girl.velocityY +=0.8
girl.collide(ground)

if(coinGroup.isTouching(girl)){
score+=1
coinSound1.play()
coinGroup[0].destroy()

}

createObstracle()
spawnCoin()
spawnBullets()

if(obstacleGroup.isTouching(girl)){
    girl.x=200;
    girl.y=600;
    text("Game Over",300,300)
}




    


drawSprites()




fill("white")
textSize(30)
text("score:"+score,100,50)  







}

function spawnCoin(){

if(frameCount%60===0){
coin= createSprite(width,Math.round(random(400,700)))
coin.addAnimation("movingCoins ",coinAn)
coin.scale= 0.1
coin.velocityX = -2
coinGroup.add(coin)
coin.lifetime=width/2

}

}

function spawnBullets(){

if(keyDown("space")){
bullet =createSprite(200,670)
bullet.addImage(bulletImg)
bullet.velocityX = 4
bullet.scale=0.1
}


}




 function createObstracle(){
if(frameCount%430===0){
    obstacle1=createSprite(width,690)

obstacle1.velocityX= -2
obstacle1.scale=0.15
rand=Math.round(random(0,2))
if(rand===0){
obstacle1.addImage(snakeImg)
 

}

   else{
    obstacle1.addImage(obstacle1Img)
   }

   obstacleGroup.add(obstacle1)
obstacle1.lifetime=width/2


}


 }
