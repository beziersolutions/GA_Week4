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
    //todo change this to buttonsCount - 1
    for (var i = 0; i <= 2; i += 1) {

        buttons[i].onclick = function (event) {

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


function updateGameCount() {

    d.getElementById('game-count').innerHTML = "you have played " + number_of_games.toString() + " out of 10 games";
}


function displayOverallResultsUI(overall) {

    d.getElementById('results-content').innerHTML = "The results are in and the winner is:- " + "<strong>" + overall + "</strong>" + "<br> total player wins " + player1_win.toString() + "<br> total bot wins " + player2_win.toString() + "<br>total draws " + draw.toString() + "<br><br><input type=\"button\" id=\"playAgain\" value=\"Play Again\" onClick=\"window.location.reload()\">";
}



function displayMatchResult(matchResult) {

    d.getElementById('results-content').innerHTML = matchResult;

}


function displayCount() {

    updatePlayerScore(player1_win);
    updateBotScore(player2_win);
    updateGameCount();
}

function displayResults() {

    if (player1_win > player2_win) {

        displayOverallResultsUI("you");

    } else if (player1_win == player2_win) {

        displayOverallResultsUI("no winners");

    } else if (player2_win > player1_win) {

        displayOverallResultsUI("bot");
    }

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
            ++number_of_games;
            displayMatchResult("bot wins because " + selection2 + " > " + selection1);
            ++player1_win;
            displayCount();

        } else {
            if (selection2 === "scissors") {
                ++number_of_games;
                displayMatchResult("player1 wins because " + selection1 + " > " + selection2);
                ++player2_win;
                displayCount();
            }
        }
    }

    if (selection1 === "paper") {
        if (selection2 === "rock") {
            ++number_of_games;
            displayMatchResult("player 1 wins because " + selection1 + " > " + selection2);

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
            ++number_of_games;
            displayMatchResult("bot wins because " + selection2 + " > " + selection1);

            ++player2_win;
            displayCount();

        } else {
            if (selection2 === "paper") {
                ++number_of_games;
                displayMatchResult("player 1 wins because " + selection1 + " > " + selection2);
                ++player1_win;
                displayCount();

            }
        }
    }

}

makeSelection();