//** Variables **********
var numOfRipples;
var rainSprite = "images/environment/rain.png";
var rain;
var ripple2 = "images/environment/rain2.png";
var ripple3 = "images/environment/rain3.png";
var ripple4 = "images/environment/rain4.png";
var ripple5 = "images/environment/rain5.png";
var ripple6 = "images/environment/rain6.png";
var ripple7 = "images/environment/rain7.png";
var x = "images/environment/nothing.png";
var rainGroup;
var waterGradient = "images/environment/water.png";
var lilypad;
var lilypad1 = "images/environment/lilypad1.png";
var lilypad2 = "images/environment/lilypad2.png";

//** Preload *************
function preload() {
  waterBackground = loadImage(waterGradient);

  //Ripples
  rainAnimation = loadAnimation(rainSprite);
  rippleAnimation = loadAnimation(ripple2, ripple3, ripple4, ripple5, ripple6, ripple7, x,x,x);
  lilypadAnimation = loadAnimation(lilypad1, lilypad2);

  }

//** Setup *************
function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("mainMenu-div");
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  document.getElementById("profilePic").setAttribute("draggable", false);
  document.getElementById("linkedInIcon").setAttribute("draggable", false);
  document.getElementById("emailIcon").setAttribute("draggable", false);
  document.getElementById("widgets").style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("widgets").style.gridTemplateRows = "15px 30px 15px";

  // Ripples
  var numOfRipples = window.innerWidth/25;
  rainGroup = new Group();
  rippleAnimation.frameDelay = 5;
  for (i = 0; i < numOfRipples; ++i) {
    let randomX = random(0, window.innerWidth * 1.2);
    let randomY = random(-400, 0);
    rain = createSprite(randomX, randomY, 300, 300);
    rain.rippleTimerOn = false;
    rain.rippleTimer = 0;
    rain.fallTimer = 0;
    rain.setVelocity(0, random(30, 40));
    rain.addAnimation("idle", rainAnimation);
    rain.scale = random(0.8, 0.9);
    rain.addAnimation("rippling", rippleAnimation);
    rainGroup.add(rain);
  }

  // Lilypads
  var numOfLilypadsBotLeft = window.innerWidth/200;
  lilypadAnimation.frameDelay = 30;
  for (i = 0; i < numOfLilypadsBotLeft; ++i) {
    let randomX = random(0, window.innerWidth/6);
    let randomY = random(window.innerHeight*8/10, window.innerHeight);
    lilypad = createSprite(randomX, randomY, 550, 200);
    lilypad.scale = random(0.4, 0.5);
    lilypad.addAnimation("idle", lilypadAnimation);
  }

  var numOfLilypadsBotRight = window.innerWidth/200;
  for (i = 0; i < numOfLilypadsBotRight; ++i) {
    let randomX = random(window.innerWidth*5/6, window.innerWidth);
    let randomY = random(window.innerHeight*8/10, window.innerHeight);
    lilypad = createSprite(randomX, randomY, 550, 200);
    lilypad.scale = random(0.4, 0.5);
    lilypad.addAnimation("idle", lilypadAnimation);
  }

  var numOfLilypadsBot = window.innerWidth/400;
  for (i = 0; i < numOfLilypadsBot; ++i) {
    let randomX = random(window.innerWidth/6, window.innerWidth*5/6);
    let randomY = random(window.innerHeight*9/10, window.innerHeight*1.05);
    lilypad = createSprite(randomX, randomY, 550, 200);
    lilypad.scale = random(0.4, 0.5);
    lilypad.addAnimation("idle", lilypadAnimation);
  }

} // function setup

//** Draw ****************
function draw() {
  background(waterBackground);

  // Ripples
  var numOfRipples = window.innerWidth/25;
  for (i = 0; i < numOfRipples; ++i) {
    rainGroup[i].fallTimer += 1;
    if (rainGroup[i].fallTimer > random(0, window.innerHeight/5)) {
      rainGroup[i].rippleTimerOn = true;
    }
    if (rainGroup[i].rippleTimerOn) {
      rainGroup[i].setVelocity(0, 0);
      rainGroup[i].changeAnimation("rippling");
      rainGroup[i].rippleTimer += 1;
    }
    if (rainGroup[i].rippleTimer > 35 || rainGroup[i].position.y > window.innerHeight * 1.2) {
      rainGroup[i].remove();
      let randomX = random(0, window.innerWidth * 1.2);
      let randomY = random(-400, 0);
      rain = createSprite(randomX, randomY, 300, 300);
      rain.rippleTimerOn = false;
      rain.rippleTimer = 0;
      rain.fallTimer = 0;
      rain.addAnimation("idle", rainAnimation);
      rain.scale = random(0.8, 0.9);
      rain.addAnimation("rippling", rippleAnimation);
      rain.setVelocity(0, random(30, 40));
      rainGroup.add(rain);
    }
  }

  drawSprites();

} // function draw

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// reference: https://codepen.io/shaikmaqsood/pen/XmydxJ
function copyToClipboard(element) {
  var $temp = $("<input>");
  var message = document.getElementById("emailCopiedMessage");
  message.style.display = "block";
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// reference: https://stackoverflow.com/questions/18032220/css-change-image-src-on-imghover
function hover(element) {
  element.setAttribute("src", "images/widgets/" + element.id + "2.png");
}

function unhover(element) {
  element.setAttribute("src", "images/widgets/" + element.id + "1.png");
}

function mainMenu() {
  window.location = "index.html";
}

function openResume() {
  window.open("images/YanxinJiangResume.pdf");
}