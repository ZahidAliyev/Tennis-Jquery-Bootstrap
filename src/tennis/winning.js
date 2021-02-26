function lvlChange() {
  if (lvl_1) {
    comp.computerLevel = 0.05;
  } else if (lvl_2) {
    comp.computerLevel = 0.25;
  } else if (lvl_3) {
    comp.computerLevel = 0.5;
  }
}

function onePlayerWinCondition() {
  if (player.score === winningScore || comp.score === winningScore) {
    // ============ IF PLAYER WON 1 LVL
    if (player.score === winningScore) {
      if (lvl_1) {
        console.log("update -> this.computerLevel", comp.computerLevel);
        lvl_1 = false;
        lvl_2 = true;
        resetOnePlayerMode();
      } else if (lvl_2) {
        // ============= IF PLAYER WON 2 LVL
        console.log("update -> this.computerLevel", comp.computerLevel);
        lvl_2 = false;

        lvl_3 = true;
        
        resetOnePlayerMode();
      } else if (lvl_3) {
        // ============= IF PLAYER WON 2 LVL

        console.log("update -> this.computerLevel", comp.computerLevel);

        lvl_1 = true;
        resetOnePlayerMode();
        playerWon = true;
        computerWon = false;
        onePlayer = false;
        gameOver = true;
      }
    } else {
      lvl_1 = true;
      computerWon = true;
      playerWon = false;
      onePlayer = false;
      gameOver = true;
    }
    resetOnePlayerMode();
  }
}

function twoPlayersWinCondition() {
  if (player.score === winningScore || secondPlayer.score === winningScore) {
    // ============ IF PLAYER WON 1 LVL
    if (player.score === winningScore) {
      leftPlayerWon = true;
      rightPlayerWon = false;
    } else {
      rightPlayerWon = true;
      leftPlayerWon = false;
    }

    player.score = 0;
    secondPlayer.score = 0;
    localTwoPlayers = false;
    gameOver = true;
  }

}
