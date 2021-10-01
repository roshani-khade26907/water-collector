var game;
var gameState=0;
var form,player;
var database;
var bg,bg2;
var playerCount=0;
var player1,player2;
var players=[];
var bucket,bucket2;
var allPlayers;
var dropImage,drop;
var bDropImage,BDrop;
var dropsG,BDropsG;
var bgMusic,dropCmusic,BDropCmusic,gameoverMusic;

function preload(){
  bg=loadImage("assets/nature background.jpg");
  bg2=loadImage("assets/rainy_bg.jpg");
  bucket=loadImage("assets/bucket.png");
  bucket2=loadImage("assets/bucket2.png");
  dropImage=loadImage("assets/drop.png");
  bDropImage=loadImage("assets/DirtyDrop.png");
  bgMusic=loadSound("sound/bgmusic.wav");
  dropCmusic=loadSound("sound/correct.wav");
  BDropCmusic=loadSound("sound/wrong.mp3");
  gameoverMusic=loadSound("sound/finish.wav");

}

function setup() {
  createCanvas(1400,600);
  database=firebase.database();

  dropsG=new Group();
  BDropsG=new Group();
  
  game=new Game();
  game.getState();
  game.start();
  
  bgMusic.loop();

  muteB = createImg("assets/mute.png");
  muteB.position(1230,10);
  muteB.size(50,50);
  muteB.mousePressed(mute);

  
}

function draw() {
  background(bg);  
  

  if (playerCount===2)  {
    game.update(1);
  }

  if(gameState===1){
    game.play();
  }

  if(gameState===2){
    game.gameOver();
  }
  
  
}

function mute(){
  if(bgMusic.isPlaying()){
    bgMusic.stop();
  }
  else{
    bgMusic.play();
  }
}