import {setOnePlayerToFalse, setLocalTwoPlayersFalse} from './inputs';
import { comp } from "./users";
import { player, secondPlayer } from "./users";
import { resetOnePlayerMode } from "./update";

const winningScore = 3;

export let leftPlayerWon = false;
export let rightPlayerWon = false;
export let computerWon = false;
export let playerWon = false;
export let gameOver = false;


export let lvl_1 = true;
export let lvl_2 = false;
export let lvl_3 = false;

export const setGameOver = () => gameOver = false;

export function lvlChange() {
  if (lvl_1) {
    comp.setComputerLevel( 0.05);
  } else if (lvl_2) {
    comp.setComputerLevel(0.25);
  } else if (lvl_3) {
    comp.setComputerLevel(0.5);
  }
}

export function onePlayerWinCondition() {
  if (player.score === winningScore || comp.score === winningScore) {
    // ============ IF PLAYER WON 1 LVL
    if (player.score === winningScore) {
      if (lvl_1) {
        lvl_1 = false;
        lvl_2 = true;
        resetOnePlayerMode();
      } else if (lvl_2) {
        // ============= IF PLAYER WON 2 LVL
        lvl_2 = false;

        lvl_3 = true;
        
        resetOnePlayerMode();
      } else if (lvl_3) {
        // ============= IF PLAYER WON 2 LVL


        lvl_1 = true;
        resetOnePlayerMode();
        playerWon = true;
        computerWon = false;
        setOnePlayerToFalse();
        gameOver = true;
      }
    } else {
      lvl_1 = true;
      computerWon = true;
      playerWon = false;
      setOnePlayerToFalse();
      gameOver = true;
    }
    resetOnePlayerMode();
  }
}

export function twoPlayersWinCondition() {
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
    secondPlayer.setScore(0);
    setLocalTwoPlayersFalse();
    gameOver = true;
  }

}

export function resetAll() {
  computerWon = false;
  lvl_2 = false;
  lvl_3 = false;
  leftPlayerWon = false;
  rightPlayerWon = false;
  playerWon = false;
}