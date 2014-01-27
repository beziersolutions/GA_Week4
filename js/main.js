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
    return randomValue = gameValues[Math.floor(gameValues.length * Math.random())];
    console.log("bot value " + randomValue);
}

function makeSelection() {

    var buttons = d.getElementsByTagName("button");
    var buttonsCount = buttons.length;

    for (var i = 0; i <= buttonsCount; i += 1) {
        buttons[i].onclick = function (e) {

            console.log("selected id is " + this.id);
            var botValue = playRandom();

            playGame(this.id, botValue);
        }
    }
}

function updatePlayerScore(score) {

    d.getElementById('humanScore').innerHTML = score;
}

function updateBotScore(score) {

    d.getElementById('computerScore').innerHTML = score;
}

function displayOverallResultsUI(overall) {
    d.getElementById('overallWin').innerHTML = overall;
}




function displayCount() {
    console.log("player 1 count " + player1_win.toString());
    console.log("bot count " + player2_win.toString());
    console.log("game count " + number_of_games.toString());
    updatePlayerScore(player1_win);
    updateBotScore(player2_win);
}

function displayResults() {
    console.log("=============================");
    console.log(" Overall Total ");
    console.log("player 1 total = " + player1_win.toString());
    console.log(" ======= ");
    console.log("player 2 total = " + player2_win.toString());
    console.log(" ======= ");
    console.log("number of draws = " + draw.toString());
    if (player1_win > player2_win) {
        console.log("overall winner is player one ");
        displayOverallResultsUI("you");

    } else if (player1_win == player2_win) {
        console.log("DRAW ");
    } else if (player2_win > player1_win) {
        console.log("overall winner is the bot ");
        displayOverallResultsUI("bot");
    }
    console.log("=============================");
}



function playGame(selection1, selection2) {

    if (number_of_games === 4) {
        displayResults();
        return;
    }


    if (selection1 === selection2) {
        console.log("player draw because " + selection1 + " = " + selection2);
        ++number_of_games;
        ++draw;
        displayCount();

    } else if (selection1.id === "paper" && selection2.id === "rock") {
        ++player1_win;
        console.log("player 1 wins because " + selection1 + " > rock");
        ++number_of_games;
        displayCount();

    } else if (selection1 == "scissors" && selection2 == "paper") {
        ++player1_win;
        console.log("player 1 wins because " + selection1 + " > paper");
        ++number_of_games;
        displayCount();

    } else if (selection1 == "rock" && selection2 == "scissors") {
        ++player1_win;
        ++number_of_games;
        console.log("player 1 wins because " + selection1 + " > scissors ");
        displayCount();

    } else {
        console.log("bot wins because " + selection2 + " is greater than " + selection1);
        ++player2_win;
        ++number_of_games;
        displayCount();
    }
}

makeSelection();