import { musicTurnOn } from "./inputs";

export const hit = new Audio("../src/tennis/sounds/hit.mp3");
const tennisMusic = new Audio("../src/tennis/sounds/tennisMusic.mp3");
export const playHit = () => hit.play();
export let onOrOff = "Off";

tennisMusic.volume = 0.1;

export let soundsOn = true;
export let soundsOnOrOffText = "Off";

export function musicTurnOnOff() {
  if (musicTurnOn) {
    tennisMusic.play();
    onOrOff = "Off";
  } else {
    tennisMusic.pause();
    onOrOff = "On";
  }
}
export function soundsTurnOnOff() {
    if (soundsOn) {
        hit.volume = 0.2;
        soundsOnOrOffText = "Off";
    } else {
        hit.volume = 0;
      soundsOnOrOffText = "On";
    }
  }
