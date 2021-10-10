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
var waterGradient = "images/environment/waterGradient.png";

//** Preload *************
function preload() {
  waterBackground = loadImage(waterGradient);

  //Ripples
  rainAnimation = loadAnimation(rainSprite);
  rippleAnimation = loadAnimation(ripple2, ripple3, ripple4, ripple5, ripple6, ripple7, x,x,x);

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

  //Bubbles
  var numOfRipples = window.innerWidth/10;
  rainGroup = new Group();
  rippleAnimation.frameDelay = 5;
  for (i = 0; i < numOfRipples; ++i) {
    let randomX = random(0, window.innerWidth * 1.2);
    let randomY = random(-400, 0);
    rain = createSprite(randomX, randomY, 300, 300);
    rain.rippleTimerOn = false;
    rain.rippleTimer = 0;
    rain.fallTimer = 0;
    rain.scale = random(0.4, 0.6);
    rain.setVelocity(0, random(30, 40));
    rain.addAnimation("idle", rainAnimation);
    rain.addAnimation("rippling", rippleAnimation);
    rainGroup.add(rain);
  }

} // function setups

//** Draw ****************
function draw() {
  background(waterBackground);
  console.log(window.innerWidth);

  // Ripples
  var numOfRipples = window.innerWidth/10;
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
      rain.addAnimation("rippling", rippleAnimation);
      rain.setVelocity(0, random(30, 40));
      rain.scale = random(0.4, 0.6);
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
