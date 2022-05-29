const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d")

let x = 100;
let y = 100;
let radius = 50;
let speed = 4;

let downpressed = false
let uppressed = false
let rightpressed = false
let leftpressed = false
//Game loop
function drawGame(){
	console.log("Redrew screen")
	requestAnimationFrame(drawGame);
	clearscreen();
	inputs();
	drawplayer();	
}

function inputs(){
	if(downpressed == true) {
		y = y + speed;
	}
	
	if(uppressed == true) {
		y = y - speed;
	}
	
	if(rightpressed == true) {
		x = x + speed;
	}
	
	if(leftpressed == true) {
		x = x - speed;
	}
}

function clearscreen(){
	ctx.fillStyle = "black";
	ctx.fillRect(0,0, canvas.width, canvas.height)	
}

function drawplayer(){
	ctx.fillStyle = "green";
	ctx.beginPath();
	ctx.arc(x,y,radius,0, Math.PI * 2);	
	ctx.fill();	
}

function keydown(event){
	if(event.keyCode == 40){
		downpressed = true;
	}
	
	if(event.keyCode == 38){
		uppressed = true;
	}
	
	if(event.keyCode == 39){
		rightpressed = true;
	}
	
	if(event.keyCode == 37){
		leftpressed = true;
	}
}

function keyup(event){
	if(event.keyCode == 40){
		downpressed = false;
	}
	
	if(event.keyCode == 38){
		uppressed = false;
	}
	
	if(event.keyCode == 39){
		rightpressed = false;
	}
	
	if(event.keyCode == 37){
		leftpressed = false;
	}
}


document.body.addEventListener('keydown', keydown)
document.body.addEventListener('keyup', keyup)

drawGame();
