﻿var numSquare = (6);
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
        // if(this.textContent === "Easy"){
        //     numSquare = 3;
        // }
        // else{
        //     numSquare = 6;
        // }
    
        reset();

    });
}

function reset(){
    colors = generateRandomColors(numSquare);
   //pick a new random color from array
   pickedColor = pickColor(); 
   //change colorDisplay to match pickColor 
   colorDisplay.textContent = pickedColor;
   resetButton.textContent = "New colors";

   messageDisplay.textContent = "";
   //change colors of squares
   for(var i = 0; i < squares.length; i++){
       if(colors[i]){
       squares[i].style.display = "block";    
       squares[i].style.backgroundColor = colors[i];

        
       }else {
           squares[i].style.display = "none";
       }
   }
   h1.style.backgroundColor = "slategrey";
}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquare = (3);
//     colors = generateRandomColors(numSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
    

//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
    
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     colors = generateRandomColors(numSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     numSquare = (6);
//     for(var i = 0; i < squares.length; i++){
    
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
// });

resetButton.addEventListener("click", function(){
   reset();
});
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;

        //compare the color to pickedColor
       if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!";
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
           resetButton.textContent = "Play Again?";
       }
       else {
           this.style.backgroundColor = "black";
           messageDisplay.textContent = "Try Again";
       }
    });
}
function changeColors(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColors(num) {
    // make an array
    var arr = [];

    // repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
   var r = Math.floor (Math.random() * 256);
    //pick a "green" from 0 - 255
   var g = Math.floor (Math.random() * 256);
    //pick a "blue" from 0 - 255
   var b = Math.floor (Math.random() * 256);
   return "rgb(" + r +", " + g + ", " + b +  ")";
}