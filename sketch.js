let userInput;
let button;
let answer;
let hasFood;
let wc;

function preload(){
  summer = loadImage("images/summer.jpg");
  autumn = loadImage("images/autumn.jpg");
  valleys = loadImage("images/valleys.jpg");
  oldforests = loadImage("images/oldforests.jpg");
  wintercave = loadImage("images/wintercave.jpg");
  wintercoast = loadImage("images/wintercoast.jpg");
  springcoast = loadImage("images/springcoast.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  borderThickness = 5;
  hasFood = 0;
  wc = 0;
  
  userInput = createInput();
  userInput.position(windowWidth/2,windowHeight*0.75);
  button = createButton('submit');
  button.position(userInput.x, userInput.y + 21);
  button.mousePressed(enterAnswer);
  answer = "start";
}

function enterAnswer(){
  answer = userInput.value();
  userInput.value('');
  
}

function draw(){
  frameRate(0.5);
  background(50);
  fill(255);
  

  if(answer == "Restart"){
    restart();
  }
  if(answer == "start"){
    isSummerA();
    if(answer == "Harvest"){
      hasFood = 1;
    }
    if(answer == "Celebrate"){
      hasFood = random(1,10);
    }

  }

  if(answer == "Celebrate" || answer == "Harvest"){
    isSummerB(hasFood);
  }
  if(answer == "Old Forests"){
    winterCheck();
    wc = 1;
    forests();
  }
  if(answer == "Valleys"){
    winterCheck();
    bigValleys();
  }
  if(answer == "Continue" && wc == 1){
    winterCave(hasFood);
  }
  if(answer == "Continue" && wc == 0){
    springCoast();
  }
  
}

function springCoast(){
  image(springcoast,0,0,windowWidth,windowHeight);
  textRectangles();
  
  fill(255);

  myString = "It was tough, and cold, but you made it. You are able to build shelters, and fish the seas for food. You live another winter.\n\nCongratulations.\n\nType 'Restart' to play again."
  text(myString, rectBlackCornerX+10, rectBlackCornerY+10);

    if(answer != "Continue"){
      restart();
    }
}


function winterCheck(){
  wc = random(0,1);
}

function forests(){
  image(oldforests,0,0,windowWidth,windowHeight);
  //winterCheck = random(0,1);
  
  textRectangles();

  fill(255);

  myString = "your people take the gentle, lush path through the forests. The natural shelter and soft earth are a comfort, but it's hard progress."
  if(wc == 1){
   myString+="\nYou hear a chill wind in the leaves."
  }

  myString+="\n\nType 'Continue' to proceed."
  text(myString, rectBlackCornerX+10, rectBlackCornerY+10);
}


function bigValleys(){
    image(valleys,0,0,windowWidth,windowHeight);
    //winterCheck = random(0,1);
    //wc = 1;
    textRectangles();
  
  fill(255);

  myString = "your people take the steep, hard path up over the crests of the valleys. Despite their brutality, the vistas are breath taking."
  if(wc == 1){
    myString+="\nYou feel a chill wind on your face."
  }
  
  myString+="\n\nType 'Continue' to proceed."
  text(myString, rectBlackCornerX+10, rectBlackCornerY+10);
}
  
function winterCoast(){
  image(wintercoast,0,0,windowWidth,windowHeight);
  textRectangles();
  
  fill(255);

  myString = "It was tough, and cold, but you made it. You are able to build shelters, and fish the seas for food. You live another winter.\n\nCongratulations.\n\nType 'Restart' to play again."
  text(myString, rectBlackCornerX+10, rectBlackCornerY+10);

    if(answer != "Continue"){
      restart();
    }
}
 
  
function winterCave(hasFood){
    answer = "winter"  
    image(wintercave,0,0,windowWidth,windowHeight);
    textRectangles();
    
    fill(255);

    
    myString = "The road was hard going, and winter found you. Your people are forced to take shelter in a cave";
    if(hasFood==1){
      myString += "\nLuckily, you think you were able to find enough provisions on the road to stretch your rations to last the snow storm.\n\nType 'Continue' to eat them and proceed."
    }else{
      myString += "\nWith no food, you are forced to only hope that the snow clears enough to proceed and ensure your survival. \nThis time, hope does not prevail.\n\nType 'Restart' to try again."
    }
    myString += answer;
    text(myString, rectBlackCornerX+10, rectBlackCornerY+10);

    if(answer == "Restart"){
      restart();
    }
    if(answer == "Continue" && wc == 1){
      winterCoast();
    }

}

function isSummerA(){
    image(summer,0,0,windowWidth,windowHeight);
    textRectangles();
    
    fill(255);

    myString = "It is the height of Summer, and your village are working through the long hot days and into the long evenings to\n reap this years harvest.\n\n Type 'Celebrate' to celebrate and not help to go there, or 'Harvest' to help."
    
    text(myString, rectBlackCornerX+10, rectBlackCornerY+10);
}

function isSummerB(hasFood){
  image(autumn,0,0,windowWidth,windowHeight);
  
  if(hasFood != 1){
    myString = "Your people were unable to harvest enough food, and you now must move on to the coast to hope to survive\n the winter. You can go through the Old Forests, or the Valley, but both shall take you some time.\n\n Type 'Old Forests' to go there, or the 'Valleys'."
  }else{
    myString = "You harvest plenty of food and feast, but due to autumn floods, you now must move on to the coast to hope to survive\n the winter. You can go through the Old Forests, or the Valley, but both shall take you some time.\n\n Type 'Old Forests' to go there, or the 'Valleys'."
  }
  textRectangles();
  fill(255);
  text(myString, rectBlackCornerX+10, rectBlackCornerY+10);
}

function restart(){
  answer = "start";
}

function textRectangles(){
  rectWidthWhite = windowWidth*0.95;
  rectHeightWhite = windowHeight*0.3;
  rectWidthBlack = rectWidthWhite-2*borderThickness;
  rectHeightBlack = rectHeightWhite-2*borderThickness;
  
  rectWhiteCornerY = windowHeight*0.6;
  rectWhiteCornerX = windowWidth*((1-0.95)/2);

  rectBlackCornerY = rectWhiteCornerY+borderThickness;
  rectBlackCornerX = rectWhiteCornerX+borderThickness;
  fill(255);
  rect(rectWhiteCornerX, rectWhiteCornerY, rectWidthWhite, rectHeightWhite);
  
  fill(0);
  rect(rectBlackCornerX, rectBlackCornerY, rectWidthBlack, rectHeightBlack);
}