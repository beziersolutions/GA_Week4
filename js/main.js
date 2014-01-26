var d = document;
// variables
var player1;
var player1_win = 0;
var player1_lose = 0;

var player2;
var player2_win = 0;
var player2_lose = 0;

var number_of_games = 0;
var draw = 0;

var gameValues = ["rock", "paper", "scissors"];
var randomValue = gameValues[Math.floor(gameValues.length * Math.random())];
console.log("game value " + randomValue);




function playGame(selection1) {
    if (selection1 === "rock") { //write player1 and player2 draw
        console.log("playGame matched draw");
    } else {
        console.log("not matched");
    }
}

function playRandom() {

}

var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;

for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function (e) {
        console.log("selected id is " + this.id);
        playGame(this.id);
    }
}


//var sel = document.getElementById("rock");

//console.log("button value " + sel.innerHTML);
//sel.onclick = playGame(sel.innerHTML);