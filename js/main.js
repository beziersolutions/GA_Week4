// variables
var d = document;
var player1;
var player1_win = 0;
var player2;
var player2_win = 0;


var number_of_games = 0;
var draw = 0;


function playGame(selection1) {
    if (selection1 === "rock") {
        console.log("playGame matched draw");
    } else {
        console.log("not matched");
    }
}

function playRandom() {

    var gameValues = ["rock", "paper", "scissors"];
    var randomValue = gameValues[Math.floor(gameValues.length * Math.random())];
    console.log("bot value " + randomValue);
    return randomValue;
}

function makeSelection() {

    var buttons = d.getElementsByTagName("button");
    var buttonsCount = buttons.length;
    this.clearTimeout(1);
    for (var i = 0; i <= buttonsCount; i += 1) {
        buttons[i].onclick = function (e) {

            console.log("selected id is " + this.id);
            var botValue = playRandom();

            playGame(this.id, botValue);
        }
    }
}

function playGame(selection1, selection2) {
    if (selection1 === selection2) {
        console.log("player draw because " + selection1 + " = " + selection2);
        ++number_of_games;
        ++draw;
    } else if (selection1.id === "paper" && selection2.id === "rock") {
        ++player1_win;
        console.log(selection1, " wins because wins paper > rock");
        console.log("player 1 count " + player1_win.toString());
        ++number_of_games;

    } else if (selection1 == "scissors" && selection2 == "paper") {
        ++player1_win;
        console.log(selection1, " wins because sissors > paper");
        console.log("player 1 count " + player1_win.toString());
        ++number_of_games;

    } else if (selection1 == "rock" && selection2 == "scissors") {
        ++player1_win;
        console.log(selection1 + " wins because rock > scissors");
        ++number_of_games;

    } else {
        console.log(selection2, " wins because selection1 is " +
            selection1);
        ++player2_win;
        ++number_of_games;
    }
}

function displayResults() {
    console.log("=======");
    console.log("player 1 total = " + player1_win.toString());
    console.log("=======");
    console.log("player 2 total = " + player2_win.toString());
    console.log("=======");
    console.log("number of draws = " + draw.toString());
    if (player1_win > player2_win) {
        console.log("overall winner is player one");
    } else if (player1_win == player2_win) {
        console.log("DRAW");
    } else {

        console.log("overall winner is player two")
    }
}
if (number_of_games === 10) {
    displayResults();
}
//playRandom();
makeSelection();