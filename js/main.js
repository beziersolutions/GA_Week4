// variables
var d = document;
var player1;
var player1_win = 0;
var player2;
var player2_win = 0;
var number_of_games = 0;
var draw = 0;

function playRandom() {

    var gameValues = ["rock", "paper", "scissors"];
    return randomValue = gameValues[Math.floor(gameValues.length * Math.random())];
}

function makeSelection() {

    var buttons = d.getElementsByTagName("button");

    var buttonsCount = buttons.length;

    for (var i = 0; i <= 2; i += 1) {

        buttons[i].onclick = function (event) {

            console.info("player value is " + this.id);
            var botValue = playRandom();
            console.info("bot value is " + botValue);

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

    d.getElementById('results-content').innerHTML = "The results are in and the winner is:- " 
    + "<strong>" + overall + "</strong>" 
    + "<br> total player wins " + player1_win.toString() 
    + "<br> total bot wins " + player2_win.toString() + "<br>total draws " 
    + draw.toString() 
    + "<br><br><input type=\"button\" id=\"playAgain\" value=\"Play Again\" onClick=\"window.location.reload()\">";
}



function displayMatchResult(matchResult) {

    d.getElementById('results-content').innerHTML = matchResult;

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
        displayOverallResultsUI("no winners");
    } else if (player2_win > player1_win) {
        console.log("overall winner is the bot ");
        displayOverallResultsUI("bot");
    }
    console.log("=============================");
}


function playGame(selection1, selection2) {

    if (number_of_games === 10) {
        displayResults();
        return;
    }

    if (selection1 === selection2) {
        ++number_of_games;
        ++draw;
        displayCount();
        displayMatchResult("player draw because " + selection1 + " = " + selection2);
    }

    if (selection1 === "rock") {
        if (selection2 === "paper") {
            displayMatchResult("bot wins because " + selection2 + " > " + selection1);
            ++number_of_games;
            ++player1_win;
            displayCount();
        } else {
            if (selection2 === "scissors") {
                displayMatchResult("player1 wins because " + selection1 + " > " + selection2);
                ++number_of_games;
                ++player2_win;
                displayCount();
            }
        }
    }

    if (selection1 === "paper") {
        if (selection2 === "rock") {
            displayMatchResult("player 1 wins because " + selection1 + " > " + selection2);
            ++number_of_games;
            ++player1_win;
            displayCount();
        } else {
            if (selection2 === "scissors") {
                displayMatchResult("bot wins because " + selection2 + " > " + selection1);
                ++number_of_games;
                ++player2_win;
                displayCount();
            }
        }
    }
    if (selection1 === "scissors") {
        if (selection2 === "rock") {
            displayMatchResult("bot wins because " + selection2 + " > " + selection1);
            ++number_of_games;
            ++player2_win;
            displayCount();
        } else {
            if (selection2 === "paper") {
                displayMatchResult("player 1 wins because " + selection1 + " > " + selection2);
                ++number_of_games;
                ++player1_win;
                displayCount();
            }
        }
    }

}

makeSelection();