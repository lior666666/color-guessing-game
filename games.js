let numSqueres = 6;
let colors = generateRandomColors(numSqueres);
let squeres = document.querySelectorAll(".squere");
let pickedColor = pickColor();

let colorDispaly = document.querySelector("#colorDisplay");
let massageDisplay = document.querySelector("#massage");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	massageDisplay.textContent = "";
	numSqueres = 3;
	colors = generateRandomColors(numSqueres);
	pickedColor = pickColor();
	colorDispaly.textContent = pickedColor;
	for(let i =0; i<squeres.length; i++){
		if(colors[i])
			squeres[i].style.backgroundColor = colors[i]; 
		else
			squeres[i].style.display = "none";
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	massageDisplay.textContent = "";
	numSqueres = 6;
	colors = generateRandomColors(numSqueres);
	pickedColor = pickColor();
	colorDispaly.textContent = pickedColor;
	for(let i =0; i<squeres.length; i++){
		squeres[i].style.backgroundColor = colors[i]; 
		squeres[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
})


resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSqueres);
	pickedColor = pickColor();
	colorDispaly.textContent = pickedColor;
	massageDisplay.textContent = "";
	for(let i =0; i<squeres.length; i++){
		squeres[i].style.backgroundColor = colors[i]; 
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
});
colorDispaly.textContent = pickedColor;

for(let i =0; i<squeres.length; i++){

	squeres[i].style.backgroundColor = colors[i]; 
	squeres[i].addEventListener("click", function(){
		if(this.style.backgroundColor === pickedColor){
			massageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(this.style.backgroundColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			massageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for(let i = 0; i<squeres.length; i++){
		squeres[i].style.backgroundColor = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	let arr = [];
	for(let i = 0; i<num; i++){
		arr.push(randomColor());
	}
	return arr; 
}

function randomColor()
{
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	return "rgb(" + r+ ", " + g + ", " + b + ")";
}