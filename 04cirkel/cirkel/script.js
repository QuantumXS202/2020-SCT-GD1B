// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
// context.beginPath();
// context.lineWidth = "104";
// context.strokeStyle = "purple";
// context.fillStyle = "blue";
// context.arc(300,400,100,0, Math.PI*2);
// context.closePath();
// context.stroke();
// context.fill();

let circleObject = {};
circleObject.x = 700;
circleObject.y = 400;
circleObject.radius = 100;
var ballRadius = 30;
var x = canvas.width/2;
var y = canvas.height/2;
var dx = 2;
var dy = -2;
var greenColors = ["#0000FF", "#FF0000", "#0055FF", "#00FF2B", "#6d00c1", "#6a0dad", "#671d9d", "#9621d9", "#550a8a", "#8741bb", "#a167c9", "#ba8cd7", "#d2b2e5", "#59128e", "#481470", "#381354"];
    var rdc = 0;

let circles = [];

function init() {
  // Initialize a new circle object with function Circle
  circles.push(new circle());
}

function circle() {
  this.x = Math.floor(Math.random() * width - 100) + 100;
  this.y = Math.floor(Math.random() * height - 100) + 100;
  this.dx = Math.floor(Math.random() * 10) + 5;
  this.dy = Math.floor(Math.random() * 10) + 5;
  this.ballRadius = Math.floor(Math.random() * 30) + 15;
  this.rdc = Math.floor(Math.random() * greenColors.length);

this.draw = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
    context.lineWidth = "104";
    context.fillStyle = greenColors[this.rdc];
    context.fill();
    context.closePath();

    if(this.x + this.dx > canvas.width-this.ballRadius || this.x + this.dx < this.ballRadius) {
        this.dx = -this.dx;
    }
    if(this.y + this.dy > canvas.height-this.ballRadius || this.y + this.dy < this.ballRadius) {
        this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
}
}
if(circles.length<200){
setInterval(init, 10000);}
init();
init();
init();
init();
init();
init();
animate();

function animate() {
  setInterval(drawfunction, 10);
}

function drawfunction() {
  context.clearRect(0, 0, width, height);
  for (let i = 0; i < circles.length; i++) {
    circles[i].draw();
  }
}
