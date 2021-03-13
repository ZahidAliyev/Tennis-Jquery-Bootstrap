import { movePaddle, menuClick, twoPlayerControlKeyDown, twoPlayerControlKeyUp, Pause} from "./inputs";
import { update } from "./update";
import { drawAll } from "./Graphics";
import { canvas } from "./canvas";
window.onload = function() {
  function loop() {
    game();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  canvas.addEventListener("mousemove", movePaddle);
  canvas.addEventListener("mousedown", menuClick);
  window.addEventListener("keydown", twoPlayerControlKeyDown);
  window.addEventListener("keyup", twoPlayerControlKeyUp);
  window.addEventListener("keydown", Pause);


};
function game() {
  update();
  drawAll();
}
