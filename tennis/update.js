ball.velocityX *= ball.xDirection;
ball.velocityY *= ball.yDirection;

function resetInGame() {
  ball.x = canvasWidth / 2;
  ball.y = canvasHeight / 2;
  ball.velocityX = -ball.velocityX;
  ball.speed = getRandomIntInclusive(7, 9);
}
function resetOnePlayerMode() {
  comp.score = 0;
  player.score = 0;
  ball.speed = 8;
  lvlChange();
}

function resetAll() {
  computerWon = false;
  lvl_2 = false;
  lvl_3 = false;
  leftPlayerWon = false;
  rightPlayerWon = false;
  playerWon = false;
}

function update() {
  //-----------------------if one player True. 1 PLAYER MODE
  if (onePlayer) {
    if(pause) {

      return;
    }
    onePlayerModeActions();
    onePlayerWinCondition();
  }
  if (localTwoPlayers) {
    if(pause) {
      
      return;
    }
    twoPlayersModeActions();
    twoPlayersWinCondition();
  }
  musicTurnOnOff();
  soundsTurnOnOff();
}
