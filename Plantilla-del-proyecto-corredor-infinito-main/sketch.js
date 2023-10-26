var PLAY = 1
var END = 0
var serve = -1
var gameState = serve

var yoshi,yoshi_parado,yoshi_derecha,yoshi_izquierda,yoshi_salto,yoshi_over,yoshi_baile

var background,backgroundimg

var ground,ground2,ground2Img

var score = 0

function preload(){
//animaciones del yoshi
yoshi_parado = loadAnimation("0parado.png","1parado.png","2parado.png","3parado.png","4parado.png","5parado.png","6parado.png","7parado.png","1parado.png","1parado.png","1parado.png","1parado.png","1parado.png","1parado.png","1parado.png","1parado.png","1parado.png",)
//yoshi_derecha = loadAnimation("")
//yoshi_izquierda = loadAnimation("")
//yoshi_salto = loadAnimation("")
//yoshi_over = loadAnimation("")
//yoshi_baile = loadAnimation("")

//imagen del fondo
//backgroundimg = loadImage("fondo1.png")

ground2Img = loadImage("fondo1.png")
}

function setup() {
//canvas de la pantalla
createCanvas(windowWidth, windowHeight)

ground2 = createSprite(width/12,height/3)
ground2.addImage(ground2Img)
ground2.scale=0.5
ground2.x = width/2

yoshi = createSprite(80,height-150,20,50)
yoshi.scale=0.4

yoshi.addAnimation("parado",yoshi_parado)
//yoshi.addAnimation("derecha",yoshi_derecha)
//yoshi.addAnimation("izquierda",yoshi_izquierda)
//yoshi.addAnimation("salto",yoshi_salto)
//yoshi.addAnimation("over",yoshi_over)

//el invisible ground
ground = createSprite(width/2,760,width,125)
ground.visible = false

//el score
score = 0

}

function draw() {
    background(0);
if(gameState===PLAY){
//para que el fondo se regenere


if(ground2.x < 0){
    ground2.x = ground2.width/2
} 

yoshi.velocityY = yoshi.velocityY + 0.8

if(keyDown("space")) {
    yoshi.velocityY = -13;
}

if(keyDown("D")){
    yoshi.x=yoshi.x +3
    ground2.velocityX = -3
    //yoshi.changeAnimation("derecha", yoshi_derecha);
 }
 else {
   yoshi.changeAnimation("parado", yoshi_parado)
   ground2.velocityX = 0
 }

//para que tenga colision con el piso invisible
yoshi.collide(ground)
 }
if (gameState===END){

}

drawSprites()

//text de las monedas
fill("yellow")
stroke(1)
textSize(30);
text(""+ score,1355,85)

if(gameState===serve){
fill("yellow")
text("presiona F para caminar hacia la derecha con D..",50,200)

 if(keyDown("F")){
  gameState=PLAY
  }
 }
}