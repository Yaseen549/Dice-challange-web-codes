
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 5;
randomNumber1 = Math.round(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 5;
randomNumber2 = Math.round(randomNumber2) + 1;

var images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

document.querySelector(".img1").setAttribute("src",images[randomNumber1 - 1]);

document.querySelector(".img2").setAttribute("src",images[randomNumber2 - 1]);

if(randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "Draw!";
}else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "⛳ Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").textContent = "Player 2 Wins ⛳!";
}

// short Version

//
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//
// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//
// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//
// var image1 = document.querySelectorAll("img")[0];
//
// image1.setAttribute("src", randomImageSource);
//
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
//
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
