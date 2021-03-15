import {setOnePlayerToFalse, setLocalTwoPlayersFalse} from './inputs';
import { comp } from "./users";
import { player, secondPlayer } from "./users";
import { ball } from "./ball";

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
function resetOnePlayerModeLvl() {
  comp.setScore(0);
  player.setScore(0);
  lvlChange();
}
export function onePlayerWinCondition() {
  if (player.score === winningScore || comp.score === winningScore) {
    // ============ IF PLAYER WON 1 LVL
    if (player.score === winningScore) {
      if (lvl_1) {
        lvl_1 = false;
        lvl_2 = true;
        resetOnePlayerModeLvl();
      } else if (lvl_2) {
        // ============= IF PLAYER WON 2 LVL
        lvl_2 = false;

        lvl_3 = true;
        
        resetOnePlayerModeLvl();
      } else if (lvl_3) {
        // ============= IF PLAYER WON 2 LVL


        lvl_1 = true;
        resetOnePlayerModeLvl();
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
    resetOnePlayerModeLvl();
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

    player.setScore(0);
    secondPlayer.setScore(0);
    setLocalTwoPlayersFalse();
    gameOver = true;
  }

}

export function resetMatchState() {
  console.log("resetState");
  computerWon = false;
  lvl_2 = false;
  lvl_3 = false;
  leftPlayerWon = false;
  rightPlayerWon = false;
  playerWon = false;
  arguments[0].setScore(0);
  arguments[1].setScore(0);
  arguments[2].setScore(0);
  comp.setComputerLevel(0.05);
  ball.setSpeed(5);
}