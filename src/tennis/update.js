import {pause, onePlayer, localTwoPlayers} from './inputs';
import { ball } from "./ball";
import {comp, player} from './users';
import { onePlayerModeActions, twoPlayersModeActions } from "./actions";
import { onePlayerWinCondition,twoPlayersWinCondition } from "./winning";
import { musicTurnOnOff, soundsTurnOnOff } from "./sounds";

ball.setBallDirectionToRandom();

export function resetInGame() {
  ball.ballresetBallXPosition();
  ball.resetBallYPosition();
  ball.changeBallXDirection();
  ball.makeBallRandomSpeed(6, 8);
}
export function resetOnePlayerMode() {
  comp.setScore(0);
  player.setScore(0);
  ball.setSpeed(7);
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
