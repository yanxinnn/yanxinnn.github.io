//** Variables **********
import * as variables from "./fieldVariables.js";

//Background
var gradientRange = 80;

// Player Animation
var player;
var playerIdle;
var playerRun;
var lastKey = "";
var defaultMoveSpeed = 6.5;
var moveSpeed = defaultMoveSpeed;
var jump = false;
var moved = false;

// Characters
var yanxin;
var yanxinIdle;

// Text
var firstGreeting = false;
var firstGreetingFinished = false;
var greetingUsed = true;
var randomText = "";
var chatCounter = 0;
var chatTimer = 0;
var teleporterHoverTimer = 0;
var hoverAmnt = 0;

// Sounds
var snd_windyPetals;
var continueSound = false;

// Environment
var numOfPlatforms = 80;
var platformsGroup;
var middlePlatform; // where camera snaps to following player
var endPlatform = 65; // where world stops
var groundTopLeft;
var groundBottomLeft;
var groundTop;
var groundBot;
var grassBlockFrames;
var dirtBlockFrames;
var petal;
var petalsGroup;
var pinkPetalFrames;
var grassblade;
var grassBladeFrames;
// Teleporters
var whiteTpFrames;
var beginningTp;
var beginningSection;
var threeDTp;
var threeDSection;
var uiUxTp;
var greenTpFrames;
var uiUxSection;
var gameTp;
var redTpFrames;
var gameSection;
var purpleTpFrames;
var tpLabelTextHeight = 80;
var tpLabelChatboxHover = tpLabelTextHeight + 8;
var tpInstructionChatboxHover = 142;
var tpInteractTextHover = -121;

// Slides
var currentSlideNum = 0;
var dotCount = 0;
var currentSlides = [];
var currentSlidesName = "";
var dotUpdated = false;
var newSlides = true;
var newSlide = true;

// Projects
var projects = [];
var inertiaFrames;
var floatItFrames;
var roomFrames;
var askAppsFrames;
var acornStationFrames;
var outcastFrames;
var missileCommandFrames;
var wizardsJourneyFrames;
var tantrumFrames;
var deskRoomFrames;
var raygunFrames;

// Slideshow
var slideShowing = false;
var expandedImageShowing = false;

//** Preload *************
function preload() {
  // Player Animations
  playerIdle = loadAnimation(
    variables.playerIdle1,
    variables.playerIdle2,
    variables.playerIdle1,
    variables.playerIdle3,
    variables.playerIdle1,
    variables.playerIdle3
  );
  playerRun = loadAnimation(
    variables.playerRun1,
    variables.playerRun2,
    variables.playerRun3,
    variables.playerRun2,
    variables.playerRun1,
    variables.playerRun4,
    variables.playerRun3,
    variables.playerRun2
  );

  // Characters
  yanxinIdle = loadAnimation(
    variables.yanxinIdle1,
    variables.yanxinIdle2,
    variables.yanxinIdle1,
    variables.yanxinIdle3,
    variables.yanxinIdle1,
    variables.yanxinIdle3
  );

  // Sounds
  snd_windyPetals = new sound(variables.snd_windyPetals);

  // Environment
  grassBlockFrames = loadImage(variables.grassBlock1);
  dirtBlockFrames = loadImage(variables.dirtBlock1);
  pinkPetalFrames = loadImage(variables.petal1);
  grassBladeFrames = loadAnimation(
    variables.grassBlade1,
    variables.grassBlade2,
    variables.grassBlade3,
    variables.grassBlade2
  );
  whiteTpFrames = loadAnimation(
    variables.whiteTp1,
    variables.whiteTp2,
    variables.whiteTp3
  );
  greenTpFrames = loadAnimation(
    variables.greenTp1,
    variables.greenTp2,
    variables.greenTp3
  );
  redTpFrames = loadAnimation(
    variables.redTp1,
    variables.redTp2,
    variables.redTp3
  );
  purpleTpFrames = loadAnimation(
    variables.purpleTp1,
    variables.purpleTp2,
    variables.purpleTp3
  );

  // UI/UX
  inertiaFrames = loadAnimation(
    variables.inertia1,
    variables.inertia2,
    variables.inertia3,
    variables.inertia4
  );
  floatItFrames = loadAnimation(
    variables.floatIt1,
    variables.floatIt2,
    variables.floatIt3,
    variables.floatIt4
  );
  roomFrames = loadAnimation(
    variables.room1,
    variables.room2,
    variables.room3,
    variables.room2
  );
  askAppsFrames = loadAnimation(
    variables.askApps1,
    variables.askApps2,
    variables.askApps3,
    variables.askApps4
  );
  acornStationFrames = loadImage(variables.acorn1);

  // Game
  outcastFrames = loadAnimation(
    variables.outcast1,
    variables.outcast1,
    variables.outcast1,
    variables.outcast2
  );
  missileCommandFrames = loadAnimation(
    variables.missileCommand1,
    variables.missileCommand2,
    variables.missileCommand3
  );
  wizardsJourneyFrames = loadAnimation(
    variables.wizardsJourney1,
    variables.wizardsJourney2,
    variables.wizardsJourney3,
    variables.wizardsJourney4
  );

  // 3D Modeling + Animation
  tantrumFrames = loadImage(variables.tantrum1);
  deskRoomFrames = loadAnimation(variables.deskRoom1, variables.deskRoom2);
  raygunFrames = loadImage(variables.raygun1);
} // function preload

//** Setup *************
function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("field-div");
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  document.getElementById("onIcon").setAttribute("draggable", false);
  document.getElementById("offIcon").setAttribute("draggable", false);
  document.getElementById("slides").setAttribute("draggable", false);
  document.getElementById("backToStartLink").style.backgroundColor =
    "#0000004D";
  document.getElementById("widgets").style.backgroundColor = "#0000004D";
  document.getElementById("movementDesktopMessage").style.backgroundColor =
    "#0000004D";

  // Platforms
  platformsGroup = new Group();
  for (let i = 0; i < numOfPlatforms; ++i) {
    // top layer
    groundTop = createSprite(i * 99, window.innerHeight - 100, 100, 100);
    groundTop.addImage(grassBlockFrames);
    platformsGroup.add(groundTop);
  }
  for (let i = 0; i < 2; ++i) {
    // top layer left
    groundTopLeft = createSprite(i * -99, window.innerHeight - 100, 100, 100);
    groundTopLeft.addImage(grassBlockFrames);
  }
  for (let i = 0; i < numOfPlatforms; ++i) {
    // bottom layer
    groundBot = createSprite(i * 99, window.innerHeight, 100, 100);
    groundBot.addImage(dirtBlockFrames);
  }
  for (let i = 0; i < 2; ++i) {
    // top layer left
    groundBottomLeft = createSprite(i * -99, window.innerHeight, 100, 100);
    groundBottomLeft.addImage(dirtBlockFrames);
  }
  middlePlatform = floor(window.innerWidth / 2 / 100);

  // Characters
  yanxinIdle.frameDelay = 18;

  yanxin = createSprite(
    platformsGroup[12].position.x,
    window.innerHeight - 200,
    100,
    100
  );
  yanxin.addAnimation("idle", yanxinIdle);

  // Text
  textSize(18);
  fill(255);
  textAlign(LEFT);
  textFont("silkscreennormal");

  // Teleporters
  beginningSection = platformsGroup[13].position.x;
  uiUxSection = platformsGroup[22].position.x + 50;
  gameSection = platformsGroup[39].position.x + 100;
  threeDSection = platformsGroup[49].position.x + 150;

  beginningTp = createTp({ frames: whiteTpFrames, positionIndex: 63 });
  uiUxTp = createTp({ frames: greenTpFrames, positionIndex: 15 });
  gameTp = createTp({
    frames: redTpFrames,
    positionIndex: 17,
    additionalOffsetX: 10,
  });
  threeDTp = createTp({
    frames: purpleTpFrames,
    positionIndex: 19,
    additionalOffsetX: 30,
  });

  // Projects
  // UI/UX Design
  const inertiaProject = createProject({
    name: "Inertia",
    groupSection: uiUxSection,
    groupOffsetX: 250,
    slides: variables.inertiaSlides,
    aboutTitles: variables.inertiaTitles,
    aboutDescriptions: variables.inertiaDescriptions,
    frames: inertiaFrames,
    frameDelay: 25,
    width: 176,
    height: 118,
  });
  const floatItProject = createProject({
    name: "Float-it Notes",
    groupSection: uiUxSection,
    groupOffsetX: 540,
    slides: variables.floatItSlides,
    aboutTitles: variables.floatItTitles,
    aboutDescriptions: variables.floatItDescriptions,
    frames: floatItFrames,
    frameDelay: 15,
    width: 199,
    height: 136,
  });
  const roomProject = createProject({
    name: "Room",
    groupSection: uiUxSection,
    groupOffsetX: 830,
    slides: variables.roomSlides,
    aboutTitles: variables.roomTitles,
    aboutDescriptions: variables.roomDescriptions,
    frames: roomFrames,
    frameDelay: 20,
    width: 161,
    height: 141,
  });
  const askAppsProject = createProject({
    name: "Ask Applications Internship",
    groupSection: uiUxSection,
    groupOffsetX: 1120,
    slides: variables.askAppsSlides,
    aboutTitles: variables.askAppsTitles,
    aboutDescriptions: variables.askAppsDescriptions,
    frames: askAppsFrames,
    frameDelay: 20,
    width: 154,
    height: 140,
  });
  const acornStationProject = createProject({
    name: "Acorn",
    groupSection: uiUxSection,
    groupOffsetX: 1420,
    slides: variables.acornSlides,
    aboutTitles: variables.acornTitles,
    aboutDescriptions: variables.acornDescriptions,
    frames: acornStationFrames,
    frameDelay: 0,
    width: 267,
    height: 142,
  });
  // Game
  const outcastProject = createProject({
    name: "Outcast",
    groupSection: gameSection,
    groupOffsetX: 250,
    slides: variables.outcastSlides,
    aboutTitles: variables.outcastTitles,
    aboutDescriptions: variables.outcastDescriptions,
    frames: outcastFrames,
    frameDelay: 8,
    width: 99,
    height: 134,
  });
  const missileCommandProject = createProject({
    name: "Missile Command Clone",
    groupSection: gameSection,
    groupOffsetX: 520,
    slides: variables.missileCommandSlides,
    aboutTitles: variables.missileCommandTitles,
    aboutDescriptions: variables.missileCommandCloneDescriptions,
    frames: missileCommandFrames,
    frameDelay: 8,
    width: 72,
    height: 113,
  });
  const wizardsJourneyProject = createProject({
    name: "Wizard's Journey",
    groupSection: gameSection,
    groupOffsetX: 790,
    slides: variables.wizardsJourneySlides,
    aboutTitles: variables.wizardsJourneyTitles,
    aboutDescriptions: variables.wizardsJourneyDescriptions,
    frames: wizardsJourneyFrames,
    frameDelay: 10,
    width: 90,
    height: 113,
  });
  // 3D Animation + Modeling
  const tantrumProject = createProject({
    name: "Tantrum",
    groupSection: threeDSection,
    groupOffsetX: 250,
    slides: variables.tantrumSlides,
    aboutTitles: variables.tantrumTitles,
    aboutDescriptions: variables.tantrumDescriptions,
    frames: tantrumFrames,
    frameDelay: 0,
    width: 83,
    height: 150,
  });
  const deskRoomProject = createProject({
    name: "Home Office",
    groupSection: threeDSection,
    groupOffsetX: 520,
    slides: variables.deskRoomSlides,
    aboutTitles: variables.deskRoomTitles,
    aboutDescriptions: variables.deskRoomDescriptions,
    frames: deskRoomFrames,
    frameDelay: 25,
    width: 133,
    height: 212,
  });
  const raygunProject = createProject({
    name: "Raygun",
    groupSection: threeDSection,
    groupOffsetX: 790,
    slides: variables.raygunSlides,
    aboutTitles: variables.raygunTitles,
    aboutDescriptions: variables.raygunDescriptions,
    frames: raygunFrames,
    frameDelay: 0,
    width: 204,
    height: 130,
  });

  // Player Animations
  playerIdle.frameDelay = 18;
  playerRun.frameDelay = 13;

  player = createSprite(
    platformsGroup[2].position.x,
    window.innerHeight - 200,
    100,
    100
  );
  player.addAnimation("idle", playerIdle);
  player.addAnimation("run", playerRun);

  // Environment
  // Petals
  var numOfPetals = window.innerWidth / 80;
  petalsGroup = new Group();
  for (let i = 0; i < numOfPetals; ++i) {
    let randomX = random(0, window.innerWidth * 1.2);
    let randomY = random(0, window.innerHeight);
    let petalX = random(-0.2, -1);
    let petalY = random(1.5, 3.5);
    let petalRotation = random(0, 4);
    let scaleX = random(0.8, 1);
    petal = createSprite(randomX, randomY, 14, 14);
    petal.addImage(pinkPetalFrames);
    petal.rotation = random(0, 360);
    petal.setVelocity(petalX, petalY);
    petal.rotationSpeed = petalRotation;
    petal.scale = scaleX;
    petalsGroup.add(petal);
  }

  // Grassblades
  grassBladeFrames.frameDelay = 18;
  var numOfGrassblades = floor(numOfPlatforms / 1.85);
  for (let i = 0; i < numOfGrassblades; ++i) {
    let randomX = random(0, numOfPlatforms * 100);
    grassblade = createSprite(randomX, window.innerHeight - 162);
    grassblade.addAnimation("idle", grassBladeFrames);
  }
} // function setup

//** Draw ****************
function draw() {
  background(color(134, 193, 239));
  teleporterHoverTimer++;

  if (deviceType() != "desktop") {
    alert(
      "Uh oh! The mobile version of this page is in the works. Please view using a laptop or desktop!"
    );
  }

  // Player Movements
  player.velocity.x = 0;
  player.velocity.y += 0.85;
  player.changeAnimation("idle");
  if (lastKey == "right") {
    if (moved == false) {
      moved = true;
    }
    player.mirrorX(1);
  } else if (lastKey == "left") {
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
  } else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    if (moved == false) {
      moved = true;
    }
    lastKey = "left";
    player.changeAnimation("run");
    player.velocity.x = -moveSpeed;
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87) || keyIsDown(32)) {
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
    // snaps camera onto player
    camera.position.x = player.position.x;
  }

  if (player.position.x >= platformsGroup[endPlatform].position.x) {
    // camera stops moving player at end
    camera.position.x = platformsGroup[endPlatform].position.x;
  }

  // Characters
  yanxin.changeAnimation("idle");
  yanxin.mirrorX(-1);

  if (player.position.x > yanxin.position.x) {
    // Faces player at all times)
    yanxin.mirrorX(1);
  }
  if (abs(yanxin.position.x - player.position.x) <= 130) {
    if (keyPressed() == "E" && !firstGreeting) {
      chatBox({
        target: yanxin,
        hover: 200,
        length: 450,
        height: 135,
        alpha: 80,
      });
      displayText({
        textContent: "Yanxin",
        target: yanxin,
        hover: 170,
        length: 400,
        custom: 10,
        color: color("#FFBEBE"),
        align: LEFT,
        fontSize: 18,
      });
      typeWriter({
        textContent: variables.yanxinTexts[0],
        target: yanxin,
        hover: 140,
        length: 400,
        counter: chatCounter,
        timer: chatTimer,
        customX: 10,
      });
      firstGreetingFinished = true;
    } else if (keyPressed() == "E") {
      if (greetingUsed) {
        randomText = random(variables.yanxinTexts);
        greetingUsed = false;
      }
      chatBox({
        target: yanxin,
        hover: 200,
        length: 450,
        height: 135,
        alpha: 80,
      });
      displayText({
        textContent: "Yanxin",
        target: yanxin,
        hover: 170,
        length: 400,
        custom: 10,
        color: color("#FFBEBE"),
        align: LEFT,
        fontSize: 18,
      });
      typeWriter({
        textContent: randomText,
        target: yanxin,
        hover: 140,
        length: 400,
        counter: chatCounter,
        timer: chatTimer,
        customX: 10,
      });
    } else {
      chatBox({
        target: yanxin,
        hover: 80,
        length: 270,
        height: 32,
      });
      interactText({
        textContent: 'Press "E" to interact',
        target: yanxin,
        hover: -59,
      });
      chatCounter = 0;
      chatTimer = 0;
      if (firstGreetingFinished == true) {
        firstGreeting = true;
      }
      greetingUsed = true;
    }
  }

  if (slideShowing) {
    // turn off widgets in slideshow mode
    document.getElementById("widgets").style.visibility = "hidden";
    document.getElementById("widgets").style.opacity = "0";
  } else {
    document.getElementById("widgets").style.visibility = "visible";
    document.getElementById("widgets").style.opacity = "1";
  }

  if (player.position.x < platformsGroup[15].position.x || slideShowing) {
    // turns off "Back to Teleporters" button when user hasn't passed it yet or in slideshow mode
    document.getElementById("backToStartLink").style.visibility = "hidden";
    document.getElementById("backToStartLink").style.opacity = "0";
  } else {
    document.getElementById("backToStartLink").style.visibility = "visible";
    document.getElementById("backToStartLink").style.opacity = "1";
  }

  // Location Labels + Back to Start Link
  if (slideShowing) {
    document.getElementById("locationMessage").style.visibility = "hidden";
    document.getElementById("locationMessage").style.opacity = "0";
  } else if (player.position.x >= uiUxSection) {
    document.getElementById("locationMessage").style.visibility = "visible";
    document.getElementById("locationMessage").style.opacity = "1";
    document.getElementById("locationMessage").style.backgroundColor =
      "#5A89AD";
  }
  if (player.position.x >= threeDSection - 100) {
    document.getElementById("locationMessage").innerHTML =
      "3D Modeling + Animation";
    document.getElementById("locationMessage").style.backgroundColor =
      "#D3D1FF";
    let startColor = color(148, 193, 234);
    let endColor = color(158, 187, 230);
    background(
      lerpColor(
        startColor,
        endColor,
        map(
          player.position.x - threeDSection,
          -gradientRange,
          gradientRange,
          0,
          1
        )
      )
    );
  } else if (player.position.x >= gameSection - 100) {
    document.getElementById("locationMessage").innerHTML = "Game Design";
    document.getElementById("locationMessage").style.backgroundColor =
      "#FFD0CC";
    let startColor = color(135, 198, 221);
    let endColor = color(148, 193, 234);
    background(
      lerpColor(
        startColor,
        endColor,
        map(
          player.position.x - gameSection,
          -gradientRange,
          gradientRange,
          0,
          1
        )
      )
    );
  } else if (player.position.x >= uiUxSection - 100) {
    document.getElementById("locationMessage").innerHTML = "UI/UX Design";
    document.getElementById("locationMessage").style.backgroundColor =
      "#BEE8CC";
    let startColor = color(134, 193, 239);
    let endColor = color(135, 198, 221);
    background(
      lerpColor(
        startColor,
        endColor,
        map(
          player.position.x - uiUxSection,
          -gradientRange,
          gradientRange,
          0,
          1
        )
      )
    );
  } else {
    document.getElementById("locationMessage").style.visibility = "hidden";
    document.getElementById("locationMessage").style.opacity = "0";
  }

  // Sound
  var sound = document.getElementById("sound");

  // Teleporters
  if (teleporterHoverTimer >= 20) {
    // hover effect for teleporter text
    hoverAmnt = 4;
    if (teleporterHoverTimer >= 60) {
      hoverAmnt = -4;
      teleporterHoverTimer = -20;
    }
  }
  // Teleporter Interactions
  handleTpInteraction({ targetTp: beginningTp, destination: beginningSection });
  handleTpInteraction({ targetTp: uiUxTp, destination: uiUxSection });
  handleTpInteraction({ targetTp: gameTp, destination: gameSection });
  handleTpInteraction({ targetTp: threeDTp, destination: threeDSection });

  // Back to Teleporters top button
  chatBox({
    target: beginningTp,
    hover: tpLabelChatboxHover,
    length: 170,
    height: 60,
    alpha: 255,
    clr: "#DCDCDC",
    hoveramnt: hoverAmnt,
  });
  displayText({
    textContent: "Back to Teleporters",
    target: beginningTp,
    hover: tpLabelTextHeight,
    length: 120,
    custom: 5,
    color: 95,
    fontSize: 20,
    hoveramnt: hoverAmnt,
  });

  // Top banners for sections
  // UI/UX Design
  chatBox({
    target: uiUxTp,
    hover: tpLabelChatboxHover,
    length: 115,
    height: 60,
    alpha: 255,
    clr: "#BEE8CC",
    hoveramnt: hoverAmnt,
  });
  displayText({
    textContent: "UI/UX Design",
    target: uiUxTp,
    hover: tpLabelTextHeight,
    length: 160,
    custom: 5,
    color: "#0000008F",
    fontSize: 20,
    hoveramnt: hoverAmnt,
  });
  // Game
  chatBox({
    target: gameTp,
    hover: tpLabelChatboxHover,
    length: 115,
    height: 60,
    alpha: 255,
    clr: "#FFD0CC",
    hoveramnt: hoverAmnt,
  });
  displayText({
    textContent: "Game Design",
    target: gameTp,
    hover: tpLabelTextHeight,
    length: 150,
    custom: 5,
    color: "#0000008F",
    fontSize: 20,
    hoveramnt: hoverAmnt,
  });
  // 3D Modeling + Animation
  chatBox({
    target: threeDTp,
    hover: tpLabelChatboxHover,
    length: 180,
    height: 60,
    alpha: 255,
    clr: "#D3D1FF",
    hoveramnt: hoverAmnt,
  });
  displayText({
    textContent: "3D Modeling + Animation",
    target: threeDTp,
    hover: tpLabelTextHeight,
    length: 180,
    custom: 5,
    color: "#0000008F",
    fontSize: 20,
    hoveramnt: hoverAmnt,
  });

  // Project Interactions
  for (let i = 0; i < projects.length; i++) {
    handleProjectInteraction({ project: projects[i], sound: sound });
  }

  // Platforms
  for (let i = 0; i < numOfPlatforms; i++) {
    if (
      platformsGroup[i].overlapPixel(player.position.x, player.position.y + 50)
    ) {
      player.position.y -= 1;
      player.velocity.y = 0;
      jump = false;
    }
  }
  if (player.position.x < 24) {
    // keeps player in screen
    player.position.x = 24;
  }
  if (player.position.x >= platformsGroup[endPlatform].position.x + 1) {
    // keeps player in screen
    player.position.x -= 6.5;
  }

  // Petals
  for (let i = 0; i < petalsGroup.length; ++i) {
    if (
      petalsGroup[i].position.x < player.position.x - window.innerWidth / 2 ||
      petalsGroup[i].position.y > window.innerHeight
    ) {
      petalsGroup[i].remove();
      let randomX = random(
        player.position.x - window.innerWidth / 2,
        player.position.x + window.innerWidth / 2 + 100
      );
      let randomY = random(-100, 0);
      let petalX = random(-0.75, -1.8);
      let petalY = random(1.5, 3.5);
      let petalRotation = random(0, 4);
      let scaleX = random(0.8, 1);
      petal = createSprite(randomX, randomY, 14, 14);
      petal.addImage(pinkPetalFrames);
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

window.preload = preload;
window.setup = setup;
window.draw = draw;

// Widgets
// Home widget
document.getElementById("homeIcon").addEventListener("click", () => mainMenu());

function mainMenu() {
  window.location = "index.html";
}

// Sound widget
document
  .getElementById("soundIcon")
  .addEventListener("click", () => toggleSound());

function toggleSound() {
  var sound = document.getElementById("sound");
  if (sound.checked) {
    snd_windyPetals.play();
    snd_windyPetals.loop = true;
  } else {
    snd_windyPetals.stop();
  }
}

function movementDesktopMessageFade() {
  document.getElementById("movementDesktopMessage").style.opacity = "0";
}

// Text
function interactText({ textContent, target, hover }) {
  fill(255, 255, 255);
  textSize(18);
  textAlign(CENTER);
  text(textContent, target.position.x, target.position.y + hover);
}

function keyPressed() {
  if (keyCode == 69) {
    return "E";
  }
  if (keyIsDown(ESCAPE) || keyCode == 81) {
    return "ESCAPE";
  }
  return true;
}

function displayText({
  textContent,
  target,
  hover,
  length,
  custom,
  color,
  fontSize,
  align = CENTER,
  hoveramnt = 0,
}) {
  textSize(fontSize);
  textAlign(align);
  fill(color);
  text(
    textContent,
    target.position.x - length / 2 + custom,
    target.position.y - hover + hoveramnt,
    length
  );
}

function typeWriter({
  textContent,
  target,
  hover,
  length,
  counter,
  timer,
  customX = 0,
  color = 255,
}) {
  textSize(18);
  fill(color);
  textAlign(LEFT);
  if (counter < textContent.length) {
    chatTimer++;
    text(
      textContent.substring(0, counter),
      target.position.x - length / 2 + customX,
      target.position.y - hover,
      length
    );
    if (timer % 2 == 0) {
      chatCounter++;
    }
  } else {
    text(
      textContent,
      target.position.x - length / 2 + customX,
      target.position.y - hover,
      length
    );
  }
}

function chatBox({
  target,
  hover,
  length,
  height,
  alpha = 50,
  clr = "#000000",
  hoveramnt = 0,
}) {
  var boxColor = color(clr);
  boxColor.setAlpha(alpha);
  fill(boxColor);
  noStroke();
  rect(
    target.position.x - length / 2,
    target.position.y - hover + hoveramnt,
    length,
    height,
    5
  );
}

function handleTpInteraction({ targetTp, destination }) {
  if (abs(targetTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = destination;
    } else {
      chatBox({
        target: targetTp,
        hover: tpInstructionChatboxHover,
        length: 270,
        height: 32,
      });
      interactText({
        textContent: 'Press "E" to teleport',
        target: targetTp,
        hover: tpInteractTextHover,
      });
    }
  }
}

function handleProjectInteraction({ project, sound }) {
  if (abs(project.sprite.position.x - player.position.x) <= 130) {
    if (keyPressed() == "E") {
      slideShow(project);
      continueSound = sound.checked;
      slideShowing = true;
    } else if (slideShowing) {
      leaveSlidesCheck();
    } else {
      chatBox({
        target: project.sprite,
        hover: project.height / 2 + 55,
        length: 230,
        height: 32,
      });
      interactText({
        textContent: 'Press "E" to view',
        target: project.sprite,
        hover: -project.height / 2 - 34,
        horizontal: 0,
      });
      noSlideShow();
      if (sound.checked && continueSound) {
        toggleSound();
        continueSound = false;
      }
    }
  }
}

function createTp({ frames, positionIndex, additionalOffsetX = 0 }) {
  frames.frameDelay = 12;
  let tp = createSprite(
    platformsGroup[positionIndex].position.x + additionalOffsetX,
    window.innerHeight - 190,
    86,
    80
  );
  tp.addAnimation("static", frames);
  return tp;
}

function createProject({
  name,
  groupSection,
  groupOffsetX,
  slides,
  aboutTitles,
  aboutDescriptions,
  frames,
  frameDelay,
  width,
  height,
  sprite,
}) {
  // Sprite
  var projectSprite = createSprite(
    groupSection + groupOffsetX,
    windowHeight - (150 + height / 2),
    width,
    height
  );
  projectSprite.addAnimation("static", frames);
  projectSprite.animation.frameDelay = frameDelay;

  // Adds to projects array
  let project = {
    name: name,
    groupSection: groupSection,
    groupOffsetX: groupOffsetX,
    frames: frames,
    slides: slides,
    aboutTitles: aboutTitles,
    aboutDescriptions: aboutDescriptions,
    frameDelay: frameDelay,
    width: width,
    height: height,
    sprite: projectSprite,
  };
  projects.push(project);
  return projectSprite;
}

function slideShow(project) {
  snd_windyPetals.stop();
  moveSpeed = 0;
  player.changeAnimation("idle");

  document.getElementById("widgets").style.gridTemplateRows = "15px 30px 15px";
  document.getElementById("soundIcon").style.display = "none";
  document.getElementById("slideshow").style.visibility = "visible";
  document.getElementById("slideshow").style.opacity = "1";
  document.getElementById("title").innerHTML = project.name;
  currentSlides = project.slides;
  currentSlidesName = project.name;

  if (newSlides == true) {
    // new set of slides
    while (dotCount < currentSlides.length) {
      // creates dots based on amount of slides
      var child = document.createElement("div");
      child.setAttribute("class", "dots");
      document.getElementById("dotsLayout").appendChild(child);
      dotCount++;
    }
    let dotsList = document.getElementsByClassName("dots");
    for (let i = 0; i < dotCount; i++) {
      // navigating using dots
      dotsList[i].addEventListener("click", () => showSlide(i));
    }
    dotsList[currentSlideNum].className += " active"; // shows initial active dot
    newSlides = false;
  }
  if (newSlide == true) {
    // new slide showing
    if (document.getElementById("slides").firstChild) {
      // refreshes showing slide image
      document
        .getElementById("slides")
        .removeChild(document.getElementById("slides").firstChild);
    }
    var imageName = currentSlides[currentSlideNum];
    if (imageName.endsWith("jpg") || imageName.endsWith("png")) {
      var currentSlide = document.createElement("img");
      document.getElementById("expandSlideImageButton").style.visibility =
        "visible"; // hides expand image button since video has prebuilt expand
      document.getElementById("expandSlideImageButton").style.opacity = 1;

      // Prepare a space for a new expanded image for new slide
      if (document.getElementById("expandedSlideImage").firstChild) {
        document
          .getElementById("expandedSlideImage")
          .removeChild(
            document.getElementById("expandedSlideImage").firstChild
          );
      }
    } else if (imageName.endsWith("mov")) {
      var currentSlide = document.createElement("video");
      currentSlide.controls = true;
      currentSlide.disablePictureInPicture = true;
      currentSlide.controlsList = "nodownload";
      currentSlide.autoplay = true;
      currentSlide.volume = 0.2;
      document.getElementById("expandSlideImageButton").style.visibility =
        "hidden"; // hides expand image button since video has built-in expand
      document.getElementById("expandSlideImageButton").style.opacity = 0;
    }
    currentSlide.src = currentSlides[currentSlideNum]; //shows slide or video
    document.getElementById("slides").appendChild(currentSlide);
    newSlide = false;
  }
  if (!dotUpdated) {
    updateSlideDots();
    updateSlideAbout(project);
    dotUpdated = true;
  }
}

function updateSlideDots() {
  let dotsList = document.getElementsByClassName("dots");
  for (let i = 0; i < dotsList.length; i++) {
    // refreshes dots
    $(dotsList[i]).removeClass("active");
  }
  dotsList[currentSlideNum].className += " active";
}

function updateSlideAbout(project) {
  let currentAboutTitle = document.getElementById("aboutSectionHeader");
  currentAboutTitle.innerHTML = project.aboutTitles[currentSlideNum];

  let currentAboutDescription = document.getElementById("descriptions");
  currentAboutDescription.scrollTop = 0;
  currentAboutDescription.innerHTML =
    project.aboutDescriptions[currentSlideNum];
}

function showSlide(n) {
  currentSlideNum = n;
  dotUpdated = false;
  newSlide = true;
}

// Next and previous slide buttons
document
  .getElementById("nextSlideButton")
  .addEventListener("click", () => nextSlide(1));

document
  .getElementById("prevSlideButton")
  .addEventListener("click", () => nextSlide(-1));

function nextSlide(n) {
  currentSlideNum += n;
  if (currentSlides.length <= currentSlideNum) {
    currentSlideNum = 0;
  }
  if (currentSlideNum < 0) {
    currentSlideNum = currentSlides.length - 1;
  }
  dotUpdated = false;
  newSlide = true;
}

// Expand and compress slide image
document
  .getElementById("expandSlideImageButton")
  .addEventListener("click", () => expandCurrentImage());

function expandCurrentImage() {
  document.getElementById("expandedSlideScreen").style.visibility = "visible";
  document.getElementById("expandedSlideScreen").style.opacity = "1";
  expandedImageShowing = true;

  var currentSlide = document.getElementById("slides").firstChild;
  if (document.getElementById("expandedSlideImage").firstChild) {
    // If coming from expanded image view (an expanded image is already prepared), keep same image if on same slide
    return;
  }
  // Otherwise, ready a new expanded image for new slide
  var expandedImage = document.createElement("img");
  expandedImage.src = currentSlide.getAttribute("src");
  expandedImage.style.maxWidth = window.innerWidth;
  expandedImage.style.maxHeight = window.innerHeight;
  expandedImage.style.objectFit = "scale-down";
  document.getElementById("expandedSlideImage").appendChild(expandedImage);
}

document
  .getElementById("compressSlideImageButton")
  .addEventListener("click", () => compressCurrentImage());

function compressCurrentImage() {
  document.getElementById("expandedSlideScreen").style.visibility = "hidden";
  document.getElementById("expandedSlideScreen").style.opacity = "0";
  expandedImageShowing = false;
}

function noSlideShow() {
  if (document.getElementById("slides").firstChild) {
    // refreshes showing slide
    document
      .getElementById("slides")
      .removeChild(document.getElementById("slides").firstChild);
  }
  if (document.getElementById("expandedSlideImage").firstChild) {
    // refreshes expanded slide image space and hides it
    document
      .getElementById("expandedSlideImage")
      .removeChild(document.getElementById("expandedSlideImage").firstChild);
  }
  compressCurrentImage();

  document.getElementById("widgets").style.gridTemplateRows =
    "15px 30px 30px 30px 15px";
  document.getElementById("soundIcon").style.display = "initial";
  document.getElementById("slideshow").style.visibility = "hidden";
  document.getElementById("slideshow").style.opacity = "0";
  moveSpeed = defaultMoveSpeed;
  currentSlideNum = 0;
  dotCount = 0;
  dotUpdated = false;
  var parent = document.getElementById("dotsLayout");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  newSlides = true;
  newSlide = true;
  currentSlides = [];
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

function fadeInEffect() {
  $(".bouncingDaisies").remove();
  $(".loader-wrapper").fadeIn(0);
  $(".loader-wrapper").delay(200).fadeOut(800, "linear");
}

function sound(src) {
  // reference: https://www.w3schools.com/graphics/game_sound.asp
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

// Back to Teleporters top button
document
  .getElementById("backToStartLink")
  .addEventListener("click", () => backToStart());

function backToStart() {
  player.position.x = beginningSection;
  fadeInEffect();
  noSlideShow();
}

//  Reference: https://attacomsian.com/blog/javascript-detect-mobile-device
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

function joystickUserInput() {
  console.log("");
  document.getElementById("joystick-innerCircle").style.top = "20%";
  document.getElementById("joystick-innerCircle").style.left = "20%";
}
