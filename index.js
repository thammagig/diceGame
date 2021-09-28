var num1 = Math.floor(Math.random() * (6) + 1)
var randomDiceImage = "dice" + num1 +".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - 

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource)

var num2 = Math.floor(Math.random() * (6) + 1)
var randomDiceImage2 = "dice" + num2 +".png"; //dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - 

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource2)



var num3 = Math.floor(Math.random() * (6) + 1)
var randomDiceImage3 = "dice" + num3 +".png"; //dice1.png - dice6.png
var randomImageSource3 = "images/" + randomDiceImage3; // images/dice1.png - 

var img3 = document.querySelectorAll("img")[2];
img3.setAttribute("src",randomImageSource3)

// if num1 > num2 say Play 1 Wins!
// if num2 > num1 say Play 2 Wins!
// if num2 = num1 say Draw!
if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!"
}
else if (num2 > num1) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}