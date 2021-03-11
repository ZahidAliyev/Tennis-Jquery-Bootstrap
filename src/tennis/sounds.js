import { musicTurnOn } from "./inputs";

const hit = new Audio("./tennis/sounds/hit.mp3");
const tennisMusic = new Audio("./tennis/sounds/tennisMusic.mp3");

var onOrOff = "Off";

tennisMusic.volume = 0.1;

var soundsOn = true;
var soundsOnOrOffText = "Off";

function musicTurnOnOff() {
  if (musicTurnOn) {
    tennisMusic.play();
    onOrOff = "Off";
  } else {
    tennisMusic.pause();
    onOrOff = "On";
  }
}
function soundsTurnOnOff() {
    if (soundsOn) {
        hit.volume = 0.2;
        soundsOnOrOffText = "Off";
    } else {
        hit.volume = 0;
      soundsOnOrOffText = "On";
    }
  }
