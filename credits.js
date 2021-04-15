//** Variables **********

//** Preload *************

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
  background(36,36,41);
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
