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
var testSprite;
var testObject;
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
var acornLogo;
var acornlogo;
var acornSection;
var timeInterface1 = "images/environment/timeInterface1.png";
var timeInterface2 = "images/environment/timeInterface2.png";
var timeInterface3 = "images/environment/timeInterface3.png";
var timeInterface4 = "images/environment/timeInterface4.png";
var timeInterface5 = "images/environment/timeInterface5.png";
var timeInterface;
var timeinterface;
var timeInterfaceSection;

// Game
var missileCommand1 = "images/environment/missileCommand1.png";
var missileCommand2 = "images/environment/missileCommand2.png";
var missileCommand3 = "images/environment/missileCommand3.png";
var missileCommand;
var missilecommand;
var missileCommandSection;
var wizardsJourney1 = "images/environment/wizardsJourney1.png";
var wizardsJourney2 = "images/environment/wizardsJourney2.png";
var wizardsJourney3 = "images/environment/wizardsJourney3.png";
var wizardsJourney4 = "images/environment/wizardsJourney4.png";
var wizardsJourney;
var wizardsjourney;
var wizardsJourneySection;


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
  snd_windyPetals = loadSound("sounds/windyPetals.mp3");

  // Environment
  grass = loadImage("images/environment/grass.png");
  dirt = loadImage("images/environment/dirt.png");
  pinkPetal = loadImage("images/environment/petal.png");
  grassBlade = loadAnimation(grassBlade1, grassBlade2, grassBlade3, grassBlade4, grassBlade5, grassBlade4, grassBlade3, grassBlade2);
  blueTp = loadAnimation(blueTp1, blueTp2, blueTp3);
  greenTp = loadAnimation(greenTp1, greenTp2, greenTp3);
  redTp = loadAnimation(redTp1, redTp2, redTp3);
  purpleTp = loadAnimation(purpleTp1, purpleTp2, purpleTp3);

  // Graphic + Web
  acornLogo = loadImage("images/environment/acornLogo.png");
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

  // Platforms
  var platformsAcross = 70;
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
  // 3D Modeling + Animation
  blueTp.frameDelay = 12;
  threeDTp = createSprite(platformsGroup[15].position.x, window.innerHeight-200, 100, 100);
  threeDTp.addAnimation("static", blueTp);
  threeDSection = platformsGroup[30].position.x;

  greenTp.frameDelay = 12;
  graphicWebTp = createSprite(platformsGroup[17].position.x, window.innerHeight-200, 100, 100);
  graphicWebTp.addAnimation("static", greenTp);
  graphicWebSection = platformsGroup[40].position.x;

  redTp.frameDelay = 12;
  gameTp = createSprite(platformsGroup[19].position.x, window.innerHeight-200, 100, 100);
  gameTp.addAnimation("static", redTp);
  gameSection = platformsGroup[50].position.x;

  purpleTp.frameDelay = 12;
  videoTp = createSprite(platformsGroup[21].position.x, window.innerHeight-200, 100, 100);
  videoTp.addAnimation("static", purpleTp);
  videoSection = platformsGroup[60].position.x;

  // Test Object
  testObject = createSprite(threeDSection, window.innerHeight-225, 100, 100);
  testObject.addAnimation("static", testSprite);

  // Graphic + Web (back)
  acornSection = graphicWebSection + 350;
  acornlogo = createSprite(acornSection, window.innerHeight-225, 300, 150);
  acornlogo.addImage(acornLogo);

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

  // Debugging
  //console.log("position:", floor(player.position.x/100));

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
      displayText("Yanxin", yanxin, 170, 400, 10, color("#FFBEBE"), LEFT, 18);
      typeWriter(yanxinText1, yanxin, 140, 400, chatCounter, chatTimer, 10, 255);
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

  // 3D Modeling + Animation
  displayText("3D Modeling + Animation", threeDTp, 30, 180, 0, 255, CENTER, 20);
  if (abs(threeDTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      player.position.x = threeDSection;
    }
    else {
      interactText("Press \"E\" to teleport", threeDTp, -50);
    }
  }

  // Graphic + Web Design
  displayText("Graphic + Web Design", graphicWebTp, 30, 200, 0, 255, CENTER, 20);
  if (abs(graphicWebTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      player.position.x = graphicWebSection;
    }
    else {
      interactText("Press \"E\" to teleport", graphicWebTp, -50);
    }
  }
  // Acorn Logo
  if (abs(acornlogo.position.x - player.position.x) <= 180) {
    if (keyPressed() == "E") {
      // open
    }
    else {
      interactText("Press \"E\" to view", acornlogo, -90);
    }
  }
  // Time Interface
  if (abs(timeinterface.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      // open
    }
    else {
      interactText("Press \"E\" to view", timeinterface, -90);
    }
  }

  // Game
  displayText("Game Design", gameTp, 30, 150, 0, 255, CENTER, 20);
  if (abs(gameTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      player.position.x = gameSection;
    }
    else {
      interactText("Press \"E\" to teleport", gameTp, -50);
    }
  }
  // Missile Command
  if (abs(missilecommand.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      // open
    }
    else {
      interactText("Press \"E\" to view", missilecommand, -80);
    }
  }
  // Wizard's Journey
  if (abs(wizardsjourney.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      // open
    }
    else {
      interactText("Press \"E\" to view", wizardsjourney, -80);
    }
  }

  // Video
  displayText("Video Creation", videoTp, 30, 150, 0, 255, CENTER, 20);
  if (abs(videoTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      player.position.x = videoSection;
    }
    else {
      interactText("Press \"E\" to teleport", videoTp, -50);
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
  textSize(18);
  textAlign(CENTER);
  text(txt, target.position.x, target.position.y+hover);
}

function keyPressed() {
  if (keyCode === 69) {
    return "E";
  }
  return false;
}

function displayText(line, target, hover, length, custom, color, align, size) {
  textSize(size);
  textAlign(align);
  fill(color);
  text(line, target.position.x-(length/2)+custom, target.position.y-hover, length);
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
  let boxColor = color(50);
  boxColor.setAlpha(50);
  fill(boxColor);
  noStroke();
  rect(target.position.x-(length/2), target.position.y-hover, length, height, 5);
}
