$(document).ready(function(){
	//Set up canvas
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	//Set up grid
	var gridNum = 20;
	var gridSize = canvas.width/gridNum;

	var candy = {
		x:0,
		y:0,
		alive:false
	}

	var player = {
		x:7,
		y:7,
		//Direction
		direction: 5,
		alive: true,
		tail:1
	}

	var snakeBody = [ [7,7]];

	var keyPressed = null;
	var leftKey = 37, upKey = 38, rightKey = 39, downKey = 40;

	Array.prototype.insert = function(index, item) {
		this,splice(index, 0, item);
	}

	//Deciding the behaviour of how the game is proceeding
	function update(){

	}

	function draw(){
		//clear the screen
		context.clearRect(0,0,canvas.width, canvas.height);
		//draw food
		context.fillStyle = "red";
		context.fillRect(candy.x * gridSize, candy.y * gridSize, gridSize, gridSize);
		//draw player
		for (var i =0; i<player.tail; i++){
			context.fillStyle = "black";
			context.fillRect(snakeBody[i][0] * gridSize, snakeBody[i][1] * gridSize, gridSize, gridSize);
		}
	}
});