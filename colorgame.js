var numSquares = 6;
var colors = generateColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var winDisplay = document.getElementById("winDisplay");
var h1 = document.querySelector("h1");
var button = document.getElementById("butt");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


var winColor = pickColor();
colorDisplay.textContent = winColor;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateColors(numSquares);
	winColor = pickColor();
	colorDisplay.textContent = winColor;
	for(i= 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	h1.style.background = "steelblue";

	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateColors(numSquares);
	winColor = pickColor();
	colorDisplay.textContent = winColor;
	for(i= 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		}
	h1.style.background = "steelblue";

});

button.addEventListener("click", function(){
	colors = generateColors(numSquares);
	winColor = pickColor();
	colorDisplay.textContent = winColor;
	winDisplay.textContent = "";


	for( i = 0; i < colors.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	button.textContent = "New colors";


});


for (var i = 0; i < colors.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		if(this.style.background === winColor){
			winDisplay.textContent = "You Win!";
			allSquaresWin(winColor);
			h1.style.background = winColor;
			button.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			winDisplay.textContent = "Try Again";
		}
	});
}

function allSquaresWin(color){
	for(i=0 ; i < squares.length ; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var randInt = Math.floor(Math.random()*colors.length);
	return colors[randInt];
}

function generateColors(num){
	var arr = [];
	for( i = 0 ; i < num ; i++){
		arr.push(randomColor());

	}
	return arr;
	
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);

	var str = "rgb(" + r + ", " + g + ", " + b + ")";
	return str;
}