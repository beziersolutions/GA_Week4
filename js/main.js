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
console.log("game value " + gameValues[2]);
//d.getElementById("paper").onclick = getPlayerSelection;
//d.getElementById("rock").onclick = getPlayerSelection;



function getPlayerSelection() {
    console.log("button clicked ");
    playGame("rock");
    return false;
}

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