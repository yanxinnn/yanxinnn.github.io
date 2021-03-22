//** Variables **********
//Background
var sky = "images/blueSky.png";

//** Preload *************
function preload() {
  skyBackground = loadImage(sky);
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
} // function setups

//** Draw ****************
function draw() {
  background(skyBackground);
  console.log(window.innerHeight);
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
