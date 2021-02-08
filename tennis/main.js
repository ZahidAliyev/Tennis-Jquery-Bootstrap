
const winningScore = 3;

// Triggers
var menu = true;

var pause = false;

var onePlayer = false;

var localTwoPlayers = false;

var leftPlayerUpPressed = false;
var leftPlayerDownPressed = false;
var rightPlayerUpPressed = false;
var rightPlayerDownPressed = false;

var leftPlayerWon = false;
var rightPlayerWon = false;


var gameOver = false;
var computerWon = false;
var playerWon = false;
var options = false;
var musicTurnOn = false;

var lvl_1 = true;
var lvl_2 = false;
var lvl_3 = false;

//
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
