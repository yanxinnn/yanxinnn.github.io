//** Variables **********

//Background
var sky = "images/environment/blueSky.jpg";

// Player Animation
var lastKey = "";
var playerIdle1 = "images/characters/playerIdle1.png";
var playerIdle2 = "images/characters/playerIdle2.png";
var playerIdle3 = "images/characters/playerIdle3.png";
var playerIdle;
var playerRun1 = "images/characters/playerRun1.png";
var playerRun2 = "images/characters/playerRun2.png";
var playerRun3 = "images/characters/playerRun3.png";
var playerRun4 = "images/characters/playerRun4.png";
var playerRun;
var staticMoveSpeed = 6.5;
var moveSpeed = staticMoveSpeed;
var jump = false;
var moved = false;

// Characters
var yanxinIdle1 = "images/characters/yanxinIdle1.png";
var yanxinIdle2 = "images/characters/yanxinIdle2.png";
var yanxinIdle3 = "images/characters/yanxinIdle3.png";
var yanxinIdle;

// Text
var yanxinTexts = [
  "Hi! Welcome to my portfolio! Feel free to take a look around!",
  "Use the teleporters to my right to travel to different areas faster!",
  "Glad to have you here!",
  "Where are these petals coming from?",
  "Mouths don't exist in this world",
  "I'm always adding new things to this world. Come by again soon!",
  "*bounce bounce bounce*"
]
var firstGreeting = false;
var firstGreetingFinished = false;
var greetingUsed = true;
var randomText = "";
var chatCounter = 0;
var chatTimer = 0;
var globalTimer = 0;
var hoverAmnt = 0;

// Sounds
var snd_windyPetals;
var continueSound = false;

// Environment
var testSprite;
var testObject;
var numOfPlatforms = 80;
var platformsGroup;
var middlePlatform; // where camera snaps to following player
var groundTopLeft;
var groundBottomLeft;
var groundTop;
var groundBot;
var grass;
var dirt;
var petal;
var petalsGroup;
var pinkPetal;
var grassBlade;
var grassblade;
var grassBlade1 = "images/environment/grassblade1.png";
var grassBlade2 = "images/environment/grassblade2.png";
var grassBlade3 = "images/environment/grassblade3.png";
var grassBlade4 = "images/environment/grassblade4.png";
var grassBlade5 = "images/environment/grassblade5.png";
var whiteTp;
var whiteTp1 = "images/environment/whiteTp1.png";
var whiteTp2 = "images/environment/whiteTp2.png";
var whiteTp3 = "images/environment/whiteTp3.png";
var beginningTp;
var beginningSection;
var threeDTp;
var blueTp;
var blueTp1 = "images/environment/blueTp1.png";
var blueTp2 = "images/environment/blueTp2.png";
var blueTp3 = "images/environment/blueTp3.png";
var threeDSection;
var greenTp;
var graphicWebTp;
var greenTp1 = "images/environment/greenTp1.png";
var greenTp2 = "images/environment/greenTp2.png";
var greenTp3 = "images/environment/greenTp3.png";
var graphicWebSection;
var redTp;
var gameTp;
var redTp1 = "images/environment/redTp1.png";
var redTp2 = "images/environment/redTp2.png";
var redTp3 = "images/environment/redTp3.png";
var gameSection;
var purpleTp;
var videoTp;
var purpleTp1 = "images/environment/purpleTp1.png";
var purpleTp2 = "images/environment/purpleTp2.png";
var purpleTp3 = "images/environment/purpleTp3.png";
var videoSection;

// Graphic + Web
var slideNum = 0;
var dotCount = 0;
var currentSlides;
var currentSlidesName;
var dotUpdated = false;
var newSlides = true;
var newSlide = true;
var acornStation;
var acornstation;
var acornSection;
var acornSlides = [
  "images/slides/acornLogo.png",
  "images/slides/acornBottles.png",
  "images/slides/acornDrafts1.png",
  "images/slides/acornDrafts2.png",
  "images/slides/acornDrafts3.png",
  "images/slides/acornApplications1.png",
  "images/slides/acornApplications2.png"
]
var aboutAcorn = [

  "For this project, I conceptualized a company and created a logo and physical applications for it. \
  \"acorn\" is a health and wellness company that is dedicated to helping people live healthier \
  and more eco-friendly lifestlyes. \"acorn\" believes that small changes one makes today are \
  the seeds for a better future. <br><br>For the logo, I chose a simplistic and geometric design \
  to emphasize the company's clean and environmental conscious mission. Squirrel-like shapes and \
  custom lettering were created from transformations on circles. My favorite part of this \
  design is how the \"a\" ties together the wordmark and pictorial mark, serving as a letter in a word \
  and also the leg portion of a squirrel.",

  "In the brainstorming stage, I came up with 10 unique designs for the \"acorn\" logo. \
  I did a survey amongst my peers to find out which of these 10 were the most appealing to others. From \
  this feedback, I was able to narrow down the possible designs to 3. These are the winners!",
  
  "I then created sevaral iterations of the 3 designs, playing around with fonts, colors, spacing, \
  and other design elements. Shown in the picture are some of the iterations of the 3 chosen designs.",

  "In the next step, I take the logo I've made for \"acorn\" and create drafts for possible company merchandise",

  "I ended up selecting the water bottle and made three design iterations",

  "Here are the final products! Created with vinyl sheets, vinyl cutter, and bottles I ordered from Amazon (haven't \
  figured out glass blowing just yet)."

]


var timeInterface1 = "images/environment/timeInterface1.png";
var timeInterface2 = "images/environment/timeInterface2.png";
var timeInterface3 = "images/environment/timeInterface3.png";
var timeInterface4 = "images/environment/timeInterface4.png";
var timeInterface5 = "images/environment/timeInterface5.png";
var timeInterface;
var timeinterface;
var timeInterfaceSection;
var timeInterfaceSlides = [
  "images/slides/linkNYC.jpg",
  "images/slides/timeInterface1.png",
  "images/slides/timeInterface2.png",
  "images/slides/timeInterface3.png",
  "images/slides/timeInterface4.png",
  "images/slides/timeInterface5.png",
  "images/slides/timeInterfaceDrafts1.png",
  "images/slides/timeInterfaceDrafts2.png"
]

// Game
var missileCommand1 = "images/environment/missileCommand1.png";
var missileCommand2 = "images/environment/missileCommand2.png";
var missileCommand3 = "images/environment/missileCommand3.png";
var missileCommand;
var missilecommand;
var missileCommandSection;
var missileCommandSlides = [
  "images/slides/missileCommand01.png",
  "images/slides/missileCommand02.png",
  "images/slides/missileCommandVideo.mov"
]
var wizardsJourney1 = "images/environment/wizardsJourney1.png";
var wizardsJourney2 = "images/environment/wizardsJourney2.png";
var wizardsJourney3 = "images/environment/wizardsJourney3.png";
var wizardsJourney4 = "images/environment/wizardsJourney4.png";
var wizardsJourney;
var wizardsjourney;
var wizardsJourneySection;
var wizardsJourneySlides = [
  "images/slides/wizardsJourney01.png",
  "images/slides/wizardsJourney02.jpg",
  "images/slides/wizardsJourney03.jpg"
]

// Slideshow
var slideShowing = false;

//** Preload *************
function preload() {

  skyBackground = loadImage(sky);

  // Test Object
  testSprite = loadAnimation("images/environment/test.png");

  // Player Animations
  playerIdle = loadAnimation(playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3);
  playerRun = loadAnimation(playerRun1, playerRun2, playerRun3, playerRun2, playerRun1, playerRun4, playerRun3, playerRun2);

  // Characters
  yanxinIdle = loadAnimation(yanxinIdle1, yanxinIdle2, yanxinIdle1, yanxinIdle3, yanxinIdle1, yanxinIdle3);

  // Widgets
  snd_windyPetals = new sound("sounds/windyPetals.mp3");

  // Environment
  grass = loadImage("images/environment/grass.png");
  dirt = loadImage("images/environment/dirt.png");
  pinkPetal = loadImage("images/environment/petal.png");
  grassBlade = loadAnimation(grassBlade1, grassBlade2, grassBlade3, grassBlade4, grassBlade5, grassBlade4, grassBlade3, grassBlade2);
  whiteTp = loadAnimation(whiteTp1, whiteTp2, whiteTp3);
  blueTp = loadAnimation(blueTp1, blueTp2, blueTp3);
  greenTp = loadAnimation(greenTp1, greenTp2, greenTp3);
  redTp = loadAnimation(redTp1, redTp2, redTp3);
  purpleTp = loadAnimation(purpleTp1, purpleTp2, purpleTp3);

  // Graphic + Web
  acornStation = loadImage("images/environment/acornStation.png");
  timeInterface = loadAnimation(timeInterface1, timeInterface2, timeInterface3, timeInterface4, timeInterface5);

  // Game
  missileCommand = loadAnimation(missileCommand1, missileCommand2, missileCommand3);
  wizardsJourney = loadAnimation(wizardsJourney1, wizardsJourney2, wizardsJourney3, wizardsJourney4);

}

//** Setup *************
function setup() {

	var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("field-div");
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  document.getElementById("onIcon").setAttribute("draggable", false);
  document.getElementById("offIcon").setAttribute("draggable", false);
  document.getElementById("slides").setAttribute("draggable", false);

  // Platforms
  platformsGroup = new Group();
  for (i = 0; i < numOfPlatforms; ++i) { // top layer
    groundTop = createSprite(i * 100, window.innerHeight-100, 100, 100);
    groundTop.addImage(grass);
    platformsGroup.add(groundTop);
  }
  for (i = 0; i < 2; ++i) { // top layer left
    groundTopLeft = createSprite(i * -100, window.innerHeight-100, 100, 100);
    groundTopLeft.addImage(grass);
  }
  for (i = 0; i < numOfPlatforms; ++i) { // bottom layer
    groundBot = createSprite(i * 100, window.innerHeight, 100, 100);
    groundBot.addImage(dirt);
  }
  for (i = 0; i < 2; ++i) { // top layer left
    groundBottomLeft = createSprite(i * -100, window.innerHeight, 100, 100);
    groundBottomLeft.addImage(dirt);
  }
  middlePlatform = floor((window.innerWidth/2)/100);

  // Characters
  yanxinIdle.frameDelay = 18;

  yanxin = createSprite(platformsGroup[12].position.x, window.innerHeight-200, 100, 100);
  yanxin.addAnimation("idle", yanxinIdle);

  // Text
  textSize(18);
  fill(255);
  textAlign(LEFT);
  textFont("silkscreennormal");

  // Teleporters
  // Back to Beginning
  whiteTp.frameDelay = 12;
  beginningTp = createSprite(platformsGroup[65].position.x, window.innerHeight-200, 100, 100);
  beginningTp.addAnimation("static", whiteTp);
  beginningSection = platformsGroup[13].position.x;

  // Graphic + Web Design
  greenTp.frameDelay = 12;
  graphicWebTp = createSprite(platformsGroup[15].position.x, window.innerHeight-200, 100, 100);
  graphicWebTp.addAnimation("static", greenTp);
  graphicWebSection = platformsGroup[30].position.x;

  // Game Design
  redTp.frameDelay = 12;
  gameTp = createSprite(platformsGroup[17].position.x, window.innerHeight-200, 100, 100);
  gameTp.addAnimation("static", redTp);
  gameSection = platformsGroup[40].position.x;

  // 3D Modeling + Animation
  blueTp.frameDelay = 12;
  threeDTp = createSprite(platformsGroup[19].position.x, window.innerHeight-200, 100, 100);
  threeDTp.addAnimation("static", blueTp);
  threeDSection = platformsGroup[50].position.x;

  // Video Editing
  purpleTp.frameDelay = 12;
  videoTp = createSprite(platformsGroup[21].position.x, window.innerHeight-200, 100, 100);
  videoTp.addAnimation("static", purpleTp);
  videoSection = platformsGroup[60].position.x;

  // Test Object
  testObject = createSprite(threeDSection, window.innerHeight-225, 100, 100);
  testObject.addAnimation("static", testSprite);

  // Graphic + Web (back)
  acornSection = graphicWebSection + 350;
  acornstation = createSprite(acornSection, window.innerHeight-225, 300, 150);
  acornstation.addImage(acornStation);

  timeInterface.frameDelay = 100;
  timeInterfaceSection = graphicWebSection + 650;
  timeinterface = createSprite(timeInterfaceSection, window.innerHeight-225, 100, 150);
  timeinterface.addAnimation("static", timeInterface);

  // Game (back)
  missileCommand.frameDelay = 8;
  missileCommandSection = gameSection + 350;
  missilecommand = createSprite(missileCommandSection, window.innerHeight-210, 100, 120);
  missilecommand.addAnimation("static", missileCommand);

  wizardsJourney.frameDelay = 10;
  wizardsJourneySection = gameSection + 560;
  wizardsjourney = createSprite(wizardsJourneySection, window.innerHeight-210, 150, 120);
  wizardsjourney.addAnimation("static", wizardsJourney);

  // Player Animations
  playerIdle.frameDelay = 18;
  playerRun.frameDelay = 13;

  player = createSprite(platformsGroup[2].position.x, window.innerHeight-200, 100, 100);
  player.addAnimation("idle", playerIdle);
  player.addAnimation("run", playerRun);

  // Environment
  // Petals
  var numOfPetals = window.innerWidth/80;
  petalsGroup = new Group();
  for (i = 0; i < numOfPetals; ++i) {
    let randomX = random(0, window.innerWidth * 1.2);
    let randomY = random(0, window.innerHeight);
    let petalX = random(-0.2, -1);
    let petalY = random(1.5, 3.5);
    let petalRotation = random(0, 4);
    let scaleX = random(0.8, 1);
    petal = createSprite(randomX, randomY, 14, 14);
    petal.addImage(pinkPetal);
    petal.rotation = random(0, 360);
    petal.setVelocity(petalX, petalY);
    petal.rotationSpeed = petalRotation;
    petal.scale = scaleX;
    petalsGroup.add(petal);
  }

  // Grassblades
  grassBlade.frameDelay = 11;
  var numOfGrassblades = floor(numOfPlatforms/1.85);
  for (i = 0; i < numOfGrassblades; ++i) {
    let randomX = random(0, numOfPlatforms*100);
    grassblade = createSprite(randomX, window.innerHeight-162);
    grassblade.addAnimation("grassBlade", grassBlade);
  }

} // function setup

//** Draw ****************
function draw() {

  // Debugging
  //console.log("position:", floor(player.position.x/100));

  background(skyBackground);
  globalTimer++;

  // Player Movements
  player.velocity.x = 0;
  player.velocity.y += 0.85;
  player.changeAnimation("idle");
  if (lastKey == "right") {
    if (moved == false) {
      moved = true;
    }
    player.mirrorX(1);
  }
  else if (lastKey == "left") {
    if (moved == false) {
      moved = true;
    }
    player.mirrorX(-1);
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    if (moved == false) {
      moved = true;
    }
    lastKey = "right";
    player.changeAnimation("run");
    player.velocity.x = moveSpeed;
  }
  else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    if (moved == false) {
      moved = true;
    }
    lastKey = "left";
    player.changeAnimation("run");
    player.velocity.x = -(moveSpeed);
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    if (moved == false) {
      moved = true;
    }
    if (!jump) {
      player.changeAnimation("idle");
      player.velocity.y = -16;
      jump = true;
    }
  }
  if (moved == true) {
    movementDesktopMessageFade();
  }

  // Camera
  if (player.position.x >= platformsGroup[middlePlatform].position.x) {
    camera.position.x = player.position.x;
  }

  // Characters
  yanxin.changeAnimation("idle");
  yanxin.mirrorX(-1);

  if (player.position.x > yanxin.position.x) { // Faces player at all times)
    yanxin.mirrorX(1);
  }
  if (abs(yanxin.position.x - player.position.x) <= 130) {
    if (keyPressed() == "E" && firstGreeting == false) {
      chatBox(yanxin, 200, 450, 135);
      displayText("Yanxin", yanxin, 170, 400, 10, color("#FFBEBE"), LEFT, 18);
      typeWriter(yanxinTexts[0], yanxin, 140, 400, chatCounter, chatTimer, 10, 255);
      firstGreetingFinished = true;
    } else if (keyPressed() == "E") {
      if (greetingUsed == true) {
        randomText = random(yanxinTexts);
        greetingUsed = false;
      }
      chatBox(yanxin, 200, 450, 135);
      displayText("Yanxin", yanxin, 170, 400, 10, color("#FFBEBE"), LEFT, 18);
      typeWriter(randomText, yanxin, 140, 400, chatCounter, chatTimer, 10, 255);
    } else {
      interactText("Press \"E\" to interact", yanxin, -50);
      chatCounter = 0;
      chatTimer = 0;
      if (firstGreetingFinished == true) {
        firstGreeting = true;
      }
      greetingUsed = true;
    }
  }

  // Teleporters
  if (globalTimer >= 20) { // hover effect for teleporter text
    hoverAmnt = 4;
    if (globalTimer >= 60) {
      hoverAmnt = -4;
      globalTimer = -20;
    }
  }

  displayText("Back to Start", beginningTp, 30, 120, 5, 255, CENTER, 20);
  if (abs(beginningTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = beginningSection;
    }
    else {
      interactText("Press \"E\" to teleport", beginningTp, -50);
    }
  }

  // Sound
  var sound = document.getElementById("sound");

  // Graphic + Web Design
  displayText("Graphic + Web Design", graphicWebTp, 30, 200, 5, 255, CENTER, 20, hoverAmnt);
  if (abs(graphicWebTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = graphicWebSection;
    }
    else {
      interactText("Press \"E\" to teleport", graphicWebTp, -50);
    }
  }
  // Acorn Station
  if (abs(acornstation.position.x - player.position.x) <= 180) {
    if (keyPressed() == "E") {
      slideShow("acorn");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      interactText("Press \"E\" to view", acornstation, -90);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }
  // Time Interface
  if (abs(timeinterface.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      slideShow("LinkNYC Time Interface");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      interactText("Press \"E\" to view", timeinterface, -90);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }

  // Game
  displayText("Game Design", gameTp, 30, 150, 5, 255, CENTER, 20, hoverAmnt);
  if (abs(gameTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = gameSection;
    }
    else {
      interactText("Press \"E\" to teleport", gameTp, -50);
    }
  }
  // Missile Command
  if (abs(missilecommand.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      slideShow("Missile Command Clone", "About");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      interactText("Press \"E\" to view", missilecommand, -80);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }
  // Wizard's Journey
  if (abs(wizardsjourney.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      slideShow("Wizard's Journey");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      interactText("Press \"E\" to view", wizardsjourney, -80);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }

    // 3D Modeling + Animation
    displayText("3D Modeling + Animation", threeDTp, 30, 180, 5, 255, CENTER, 20, hoverAmnt);
    if (abs(threeDTp.position.x - player.position.x) <= 100) {
      if (keyPressed() == "E") {
        fadeInEffect();
        player.position.x = threeDSection;
      }
      else {
        interactText("Press \"E\" to teleport", threeDTp, -50);
      }
    }

  // Video
  displayText("Video Editing", videoTp, 30, 150, 5, 255, CENTER, 20, hoverAmnt);
  if (abs(videoTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = videoSection;
    }
    else {
      interactText("Press \"E\" to teleport", videoTp, -50);
    }
  }

  // Location Labels + Back to Start Link
  if (player.position.x >= graphicWebSection) {
    document.getElementById("locationMessage").style.visibility = "visible";
    document.getElementById("locationMessage").style.opacity = "1";
  }
  if (player.position.x >= videoSection) {
    document.getElementById("locationMessage").innerHTML = "Video Editing";
  }
  else if (player.position.x >= threeDSection) {
    document.getElementById("locationMessage").innerHTML = "3D Modeling + Animation";
  }
  else if (player.position.x >= gameSection) {
    document.getElementById("locationMessage").innerHTML = "Game Design";
  }
  else if (player.position.x >= graphicWebSection) {
    document.getElementById("locationMessage").innerHTML = "Graphic + Web Design";
  } 
  else {
    document.getElementById("locationMessage").style.visibility = "hidden";
    document.getElementById("locationMessage").style.opacity = "0";
  }
  if (player.position.x < platformsGroup[15].position.x) {
    document.getElementById("backToStartLink").style.visibility = "hidden";
    document.getElementById("backToStartLink").style.opacity = "0";
  }
  else {
    document.getElementById("backToStartLink").style.visibility = "visible";
    document.getElementById("backToStartLink").style.opacity = "1";
  }

  // Platforms
  for (var i = 0; i < numOfPlatforms; i++) {
    if (platformsGroup[i].overlapPixel(player.position.x, player.position.y+50)) {
      player.position.y -= 1;
      player.velocity.y = 0;
      jump = false;
    }
  }
  if (player.position.x < 24) {
    player.position.x = 24;
  }

  // Petals
  for (i = 0; i < petalsGroup.length; ++i) {
    if (petalsGroup[i].position.x < (player.position.x - window.innerWidth/2) || petalsGroup[i].position.y > window.innerHeight) {
      petalsGroup[i].remove();
      let randomX = random(player.position.x - window.innerWidth/2, player.position.x + window.innerWidth/2 + 100);
      let randomY = random(-100, 0);
      let petalX = random(-0.75, -1.8);
      let petalY = random(1.5, 3.5);
      let petalRotation = random(0, 4);
      let scaleX = random(0.8, 1);
      petal = createSprite(randomX, randomY, 14, 14);
      petal.addImage(pinkPetal);
      petal.rotation = random(0, 360);
      petal.setVelocity(petalX, petalY);
      petal.rotationSpeed = petalRotation;
      petal.scale = scaleX;
      petalsGroup.add(petal);
    }
  }
  drawSprites();
} // function draw

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// Widgets
function toggleSound() {
  var sound = document.getElementById("sound");
  if (sound.checked) {
    snd_windyPetals.play();
    snd_windyPetals.loop = true;
  }
  else {
    snd_windyPetals.stop();
  }
}

function movementDesktopMessageFade() {
  document.getElementById("movementDesktopMessage").style.opacity = "0";
}

// Text
function interactText(txt, target, hover) {
  textSize(18);
  textAlign(CENTER);
  text(txt, target.position.x, target.position.y+hover);
}

function keyPressed() {
  if (keyCode == 69) {
    return "E";
  }
  if (keyCode == 27) {
    return "ESCAPE";
  }
  return false;
}

function displayText(line, target, hover, length, custom, color, align, size, hoveramnt=0) {
  textSize(size);
  textAlign(align);
  fill(color);
  text(line, target.position.x-(length/2)+custom, target.position.y-hover+hoveramnt, length);
}

function typeWriter(script, target, hover, length, counter, timer, customX, color) {
  textSize(18);
  fill(color);
  textAlign(LEFT);
  if (counter < script.length){
    chatTimer++;
    text(script.substring(0, counter), target.position.x-(length/2)+customX, target.position.y-hover, length);
    if (timer % 2 == 0) {
      chatCounter++;
    }
  } else {
    text(script, target.position.x-(length/2)+customX, target.position.y-hover, length);
  }
}

function chatBox(target, hover, length, height) {
  var boxColor = color(0);
  boxColor.setAlpha(70);
  fill(boxColor);
  noStroke();
  rect(target.position.x-(length/2), target.position.y-hover, length, height, 5);
}

function slideShow(title) {
  snd_windyPetals.stop();
  moveSpeed = 0;
  player.changeAnimation("idle");
  document.getElementById("widgets").style.display = "none";
  document.getElementById("slideshow").style.visibility = "visible";
  document.getElementById("slideshow").style.opacity = "1";
  document.getElementById("title").innerHTML = title;
  //Graphics and Web Design
  if (title == "acorn") {
    currentSlides = acornSlides;
    currentSlidesName = "Acorn";
  } else if (title == "LinkNYC Time Interface") {
    currentSlides = timeInterfaceSlides;
    currentSlidesName = "TimeInterface";
  } else if (title == "Missile Command Clone") {
    currentSlides = missileCommandSlides;
    currentSlidesName = "MissileCommand";
  } else if (title == "Wizard's Journey") {
    currentSlides = wizardsJourneySlides;
    currentSlidesName = "WizardsJourney";
  }

  if (newSlides == true) { // new set of slides
    while (dotCount < currentSlides.length) { // creates dots based on amount of slides
      var child = document.createElement("div");
      child.setAttribute("class", "dots");
      document.getElementById("dotsLayout").appendChild(child);
      dotCount++;
    }
    let dotsList = document.getElementsByClassName("dots");
    for (i = 0; i < dotCount; i++) { // navigating using dots
      dotsList[i].setAttribute("onclick", "showSlide(" + i + ")");
    }
    dotsList[slideNum].className += " active"; // shows inital active dot
    newSlides = false;
  }
  if (newSlide == true) { // new slide showing
    if (document.getElementById("slides").firstChild) { // refreshes showing slide
      (document.getElementById("slides")).removeChild((document.getElementById("slides")).firstChild);
    }
    var string = currentSlides[slideNum];
    if (string.charAt(string.length-1) == "g") { // checks if jpg, png
      var currentSlide = document.createElement("img");
    } else if (string.charAt(string.length-1) == "v") { // checks if mov
      var currentSlide = document.createElement("video");
      currentSlide.controls = true;
      currentSlide.disablePictureInPicture = true;
      currentSlide.controlsList = "nodownload";
      currentSlide.autoplay = true;
    }
    currentSlide.src = currentSlides[slideNum]; //shows slide or video
    document.getElementById("slides").appendChild(currentSlide); 
    newSlide = false;
  }
  if (dotUpdated == false) { // dot updates
    dotUpdate();
    dotUpdated = true;
  }
}

function dotUpdate() { // dot update, description, and subtitle update
  let dotsList = document.getElementsByClassName("dots");
  for (i = 0; i < dotsList.length; i++) { // refreshes dots
    $(dotsList[i]).removeClass("active");
  }
  dotsList[slideNum].className += " active"; // shows active dot

  let currentAbout = document.getElementById("descriptions"); //description update
  let currentSubtitle = document.getElementById("aboutSectionHeader");
  if (slideNum == 0) {
    currentSubtitle.innerHTML = "About";
  }
  if (currentSlidesName == "Acorn") {
    if (slideNum == 1 || slideNum == 2) {
      currentSubtitle.innerHTML = "Logo Drafts";
    } else if (slideNum == 3 || slideNum == 4) {
      currentSubtitle.innerHTML = "Physical Application Drafts";
    } else if (slideNum == 5) {
      currentSubtitle.innerHTML = "Final Physical Applications";
    }
    currentAbout.innerHTML = aboutAcorn[slideNum];
  } else if (currentSlidesName == "TimeInterface") {
    currentAbout.innerHTML = "";
  } else {
    currentAbout.innerHTML = "";
  }
}

function showSlide(n) {
  slideNum = n;
  dotUpdated = false;
  newSlide = true;
}

function nextSlide(n) {
  slideNum += n;
  if (currentSlides.length <= slideNum) {
    slideNum = 0;
  }
  if (slideNum < 0) {
    slideNum = currentSlides.length-1;
  }
  dotUpdated = false;
  newSlide = true;
}

function noSlideShow() {
  document.getElementById("widgets").style.display = "grid";
  document.getElementById("slideshow").style.visibility = "hidden";
  document.getElementById("slideshow").style.opacity = "0";
  moveSpeed = staticMoveSpeed;
  slideNum = 0;
  dotCount = 0;
  var parent = document.getElementById("dotsLayout");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  newSlides = true;
  newSlide = true;
}

function noMoving() {
  moveSpeed = 0;
  player.changeAnimation("idle");
  player.velocity.y = 0;
}

function leaveSlidesCheck() {
  if (keyPressed() == "ESCAPE") {
    slideShowing = false;
  }
  noMoving();
}

function fadeInEffect () {
  $(".bouncingDaisies").remove();
  $(".loader-wrapper").fadeIn(0);
  $(".loader-wrapper").delay(200).fadeOut(800, "linear");
}

function sound(src) { // reference: https://www.w3schools.com/graphics/game_sound.asp
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function backToStart() {
  player.position.x = beginningSection;
  fadeInEffect();
  noSlideShow();
}
