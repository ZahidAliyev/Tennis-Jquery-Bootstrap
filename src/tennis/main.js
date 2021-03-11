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
