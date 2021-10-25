//
//-------------------Start game
//Pressing play starts the game
//
//---DOM Elements-----------------
let scoreStatus = document.getElementById("score");
let playerStatus = document.getElementById("playerTurn");
//
//---Game Variables-------------
let roundTimer = 300;
let questionTimer = 10;
let playerOneScore = 0;
let playerTwoScore = 0;
//
//---Timers------------------------
questionButton.addEventListener("click", () => {
  roundTimer = setInterval(countDownRound, 1000);
  questionTimer = setInterval(countDownQuestion, 1000);
});

function countDownRound() {
  //---Decrease interval by one
  interval -= 1;

  if (roundTimer > 0) {
    status.textContent = roundTimer;
  } else {
    status.textContent = "Round over";
  }
}

function countDownQuestion() {
  //---Decrease interval by one
  interval -= 1;

  if (questionTimer > 0) {
    status.textContent = questionTimer;
  } else {
    status.textContent = "Turn over";
  }
}
//Notify player one of turn
//Enable question buttons to be selected
//Disable guess question and pass buttons
//
//------------------Player selects a question
//Once player one selects a question, question buttons disable
//start round 5 min timer
//Start question timer 10 sec
//Display question in larger box
//Enable guess question and pass buttons
//If timer runs out the next player is selected
//
//------------------Player Passes on question
//if the pass button is selected the player notification changes to player two
//The question timer resets 10 sec
//If no player answers the question the selected player goes back to player who selected the question
//
//------------------Player answers question correctly
//The player submits a correct answer
//The players score increases by correct amount
//Clear question button to blank button
//The current player doesn't change
//
//-------------------Player answers question incorrectly
//The player answers the question incorrect
//The players score subtracts accordingly
//The other player is selected and has a chance to answer the question
//If no one answers correctly the original player is selected to go
//
//---------------------End of round one
//When the round timer runs out or the board has been cleared tThe game automatically routes to double Jeopardy
//The game scores and logic remain the same
//
//---------------------Final Jeopardy
//The players are presented with a category
//A prompt to make a wager is presented
//The players take turns to make a wager up to there maximum point total
//After wagers have been placed the question is revealed
//A prompt for player two to look away will be presented
//Player one will have 20 sec to answer the question
//After time runs out player two will be selected and a prompt for player one to look away will be presented
//After the timer runs out the answer will reveal itself
//The amount wagered will be added or subtracted from each players score depending on how the question was answered
//The player will the highest score will be notified that they won the game
