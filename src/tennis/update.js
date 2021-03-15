import {pause, onePlayer, localTwoPlayers} from './inputs';
import { ball } from "./ball";
import { onePlayerModeActions, twoPlayersModeActions } from "./actions";
import { onePlayerWinCondition,twoPlayersWinCondition } from "./winning";
import { musicTurnOnOff, soundsTurnOnOff } from "./sounds";

ball.setBallDirectionToRandom();

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
