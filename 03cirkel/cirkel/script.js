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
var ballRadius = 100;
var x = canvas.width/2;
var y = canvas.height/2;
var dx = 2;
var dy = -2;


function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI*2);
    context.lineWidth = "104";
    context.fillStyle = "purple";
    context.strokeStyle = "green";
    context.fill();
    context.closePath();
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);
