//** Variables **********

//Background
var sky = "images/blueSky.png";

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
var jump = false;
var moved = false;

// Characters
var yanxinIdle1 = "images/characters/yanxinIdle1.png";
var yanxinIdle2 = "images/characters/yanxinIdle2.png";
var yanxinIdle3 = "images/characters/yanxinIdle3.png";
var yanxinIdle;

// Text
var yanxinText1 = "Hi! Welcome to my portfolio! Feel free to take a look around!";
var yanxinText2 = "Use the teleporters to my right to travel to different areas faster!";
var yanxinText3 = "Glad to have you here!";
var yanxinText4 = "Where are these petals coming from?";
var yanxinText5 = "Mouths don't exist in this world";
var yanxinText6 = "I'm always adding new things to this world. Come by again soon!";
var yanxinText7 = "*bounce bounce bounce*";
var yanxinTexts = [yanxinText1, yanxinText2, yanxinText3, yanxinText4, yanxinText5, yanxinText6, yanxinText7];
var firstGreeting = false;
var firstGreetingFinished = false;
var greetingUsed = true;
var randomText = "";
var chatCounter = 0;
var chatTimer = 0;

// Sounds
var snd_windyPetals;

// Environment
var platformsGroup;
var middlePlatform; // where camera snaps to following player
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
var threeDTp;
var blueTp;
var blueTp1 = "images/environment/blueTp1.png";
var blueTp2 = "images/environment/blueTp2.png";
var blueTp3 = "images/environment/blueTp3.png";
var threeDSection;

//** Preload *************
function preload() {

  skyBackground = loadImage(sky);

  // Player Animations
  playerIdle = loadAnimation(playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3);
  playerRun = loadAnimation(playerRun1, playerRun2, playerRun3, playerRun2, playerRun1, playerRun4, playerRun3, playerRun2);

  // Characters
  yanxinIdle = loadAnimation(yanxinIdle1, yanxinIdle2, yanxinIdle1, yanxinIdle3, yanxinIdle1, yanxinIdle3);

  // Widgets
  snd_windyPetals = loadSound("sounds/windyPetals.mp3");

  // Environment
  grass = loadImage("images/environment/grass.png");
  dirt = loadImage("images/environment/dirt.png");
  pinkPetal = loadImage("images/environment/petal.png");
  grassBlade = loadAnimation(grassBlade1, grassBlade2, grassBlade3, grassBlade4, grassBlade5, grassBlade4, grassBlade3, grassBlade2);
  blueTp = loadAnimation(blueTp1, blueTp2, blueTp3);

}

//** Setup *************
function setup() {

	var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("field-div");
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  // Platforms
  var platformsAcross = 40;
  platformsGroup = new Group();
  for (i = 0; i < platformsAcross; ++i) { // top layer
    groundTop = createSprite(i * 100, window.innerHeight-100, 100, 100);
    groundTop.addImage(grass);
    platformsGroup.add(groundTop);
  }
  for (i = 0; i < 2; ++i) { // top layer left
    let groundTopLeft = createSprite(i * -100, window.innerHeight-100, 100, 100);
    groundTopLeft.addImage(grass);
  }
  for (i = 0; i < platformsAcross; ++i) { // bottom layer
    groundBot = createSprite(i * 100, window.innerHeight, 100, 100);
    groundBot.addImage(dirt);
  }
  for (i = 0; i < 2; ++i) { // top layer left
    let groundBottomLeft = createSprite(i * -100, window.innerHeight, 100, 100);
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
  blueTp.frameDelay = 12;

  threeDTp = createSprite(platformsGroup[16].position.x, window.innerHeight-200, 100, 100);
  threeDTp.addAnimation("static", blueTp);

  threeDSection = platformsGroup[22].position.x;

  // Player Animations
  playerIdle.frameDelay = 18;
  playerRun.frameDelay = 13;

  player = createSprite(platformsGroup[2].position.x, window.innerHeight-200, 100, 100);
  player.addAnimation("idle", playerIdle);
  player.addAnimation("run", playerRun);

  // Environment
  // Petals
  let numOfPetals = window.innerWidth/80;
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
  let numOfGrassblades = floor(platformsAcross/1.85);
  for (i = 0; i < numOfGrassblades; ++i) {
    let randomX = random(0, platformsAcross*100);
    grassblade = createSprite(randomX, window.innerHeight-162);
    grassblade.addAnimation("grassBlade", grassBlade);
  }

} // function setup

//** Draw ****************
function draw() {

  background(skyBackground);

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
    player.velocity.x = 6.5;
  }
  else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    if (moved == false) {
      moved = true;
    }
    lastKey = "left";
    player.changeAnimation("run");
    player.velocity.x = -6.5;
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
      displayText("Yanxin", yanxin, 170, 400, 10, color("#FFBEBE"));
      typeWriter(yanxinText1, yanxin, 140, 400, chatCounter, chatTimer, 10, 255);
      firstGreetingFinished = true;
    } else if (keyPressed() == "E") {
      if (greetingUsed == true) {
        randomText = random(yanxinTexts);
        greetingUsed = false;
      }
      chatBox(yanxin, 200, 450, 135);
      displayText("Yanxin", yanxin, 170, 400, 10, color("#FFBEBE"));
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
  interactText("3D Modeling + Animation", threeDTp, 0);
  if (abs(threeDTp.position.x - player.position.x) <= 130) {
    if (keyPressed() == "E") {
      player.position.x = threeDSection;
    }
    else {
      interactText("Press \"E\" to teleport", threeDTp, -50);
    }
  }


  // Platforms
  for (var i = 0; i < platformsGroup.length; i++) {
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
    snd_windyPetals.loop();
  }
  else {
    snd_windyPetals.pause();
  }
}

function movementDesktopMessageFade() {
  document.getElementById("movementDesktopMessage").style.opacity = "0";
}

// Text
function interactText(txt, target, hover) {
  textAlign(CENTER);
  text(txt, target.position.x, target.position.y+hover);
}

function keyPressed() {
  if (keyCode === 69) {
    return "E";
  }
  return false;
}

function displayText(line, target, hover, length, custom, color) {
  textAlign(LEFT);
  fill(color);
  text(line, target.position.x-(length/2)+custom, target.position.y-hover, length);
}

function typeWriter(script, target, hover, length, counter, timer, customX, color) {
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
  let boxColor = color(50);
  boxColor.setAlpha(50);
  fill(boxColor);
  noStroke();
  rect(target.position.x-(length/2), target.position.y-hover, length, height, 5);
}
