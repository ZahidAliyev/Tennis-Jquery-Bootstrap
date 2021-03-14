import {pause, onePlayer, localTwoPlayers} from './inputs';
import { ball } from "./ball";
import {comp, player} from './users';
import { onePlayerModeActions, twoPlayersModeActions } from "./actions";
import { onePlayerWinCondition,twoPlayersWinCondition, lvlChange } from "./winning";
import { musicTurnOnOff, soundsTurnOnOff } from "./sounds";

ball.setBallDirectionToRandom();

export function resetInGame() {
  ball.resetBallXPosition();
  ball.resetBallYPosition();
  ball.changeBallXDirection();
  ball.makeBallRandomSpeed(4, 6);
}
export function resetOnePlayerMode() {
  comp.setScore(0);
  player.setScore(0);
  ball.setSpeed(4);
  lvlChange();
}



export function update() {
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
