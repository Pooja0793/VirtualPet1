//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  hungryDog = loadImage("Dog.png");
  fullDog = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage("hungry",hungryDog);
  dog.scale = 0.2

  readData();
  
}


function draw() {  
  background(46,139,87);
  fill("white")
  textSize(25);
  text("Food Remaining: "+foodS,180,150);
  drawSprites();

  //add styles here

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    if(foodS>0){
    database.ref("/").set({
      Food : foodS-1
    })
  }

  }
}
 function readData(){
  foodStock = database.ref("Food");
  foodStock.on("value",function(data){
    foodS = data.val();
  });

}


