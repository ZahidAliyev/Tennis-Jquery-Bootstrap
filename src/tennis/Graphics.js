import {menu, pause, onePlayer, localTwoPlayers, options, } from './inputs';

function drawRectangle(topX, topY, width, height, color) {
  context.beginPath();
  context.fillStyle = color;
  context.fillRect(topX, topY, width, height);
  context.fill();
  context.closePath();
}
function drawCircle(x, y, radius, color) {
  context.beginPath();

  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}
function drawText(text, x, y, color) {
  context.fillStyle = color;
  
  context.fillText(text, x, y);
}
function drawAll() {
  //1 player gameplay
  if(onePlayer) {
    context.font = "60px fantasy";
    drawRectangle(0, 0, canvas.width, canvas.height, "black");
    drawRectangle(player.x, player.y, player.width, player.height, player.color);
    drawRectangle(comp.x, comp.y, comp.width, comp.height, comp.color);
    
    drawText(player.score, canvas.width / 4, canvas.height / 6, "white");
    drawText(comp.score, (3 * canvas.width) / 4, canvas.height / 6, "white");
    context.font = "30px fantasy";
    if (lvl_1) {
      drawText("Lvl 1", (2 * canvas.width) / 4, canvas.height / 6, "white");

    } else if (lvl_2) {
      drawText("Lvl_2", (2 * canvas.width) / 4, canvas.height / 6, "white");
    } else if (lvl_3) {
      drawText("Lvl_3", (2 * canvas.width) / 4, canvas.height / 6, "white");
    }

    drawCircle(ball.x, ball.y, ball.radius, ball.color);

    if(pause) {
      context.font = "40px fantasy";
      drawText("Pause", (canvas.width / 10) * 4, (canvas.height / 12) * 6, "white");
      drawText("Back to Menu", (canvas.width / 10) * 4, (canvas.height / 12) * 7, "white");

    }
  }

  //2 player gameplay
  if(localTwoPlayers) {
    console.log("2 player Draw");
    context.font = "60px fantasy";
    drawRectangle(0, 0, canvas.width, canvas.height, "black");
    drawRectangle(player.x, player.y, player.width, player.height, player.color);
    drawRectangle(secondPlayer.x, secondPlayer.y, secondPlayer.width, secondPlayer.height, secondPlayer.color);
    
    drawText(player.score, canvas.width / 4, canvas.height / 6, "white");
    drawText(secondPlayer.score, (3 * canvas.width) / 4, canvas.height / 6, "white");
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
    if(pause) {
      context.font = "40px fantasy";

      drawText("Pause", (canvas.width / 10) * 4, (canvas.height / 12) * 6, "white");
      drawText("Back to Menu", (canvas.width / 10) * 4, (canvas.height / 12) * 7, "white");

    }
  }
  //multiplayer

  // options
  if(options) {
    context.font = "30px fantasy";
    drawRectangle(0, 0, canvas.width, canvas.height, "black");
    drawText("Music " + onOrOff, (canvas.width / 10) * 4, (canvas.height / 12)* 4, "white");
    drawText("Sound " + soundsOnOrOffText, (canvas.width / 10) * 4, (canvas.height / 12) * 5, "white");
    drawText("Back to menu", (canvas.width / 10) * 4, (canvas.height / 12) * 6, "white");
    drawText("1 player control : Mouse", (canvas.width / 10) * 4, (canvas.height / 12) * 7, "white");
    drawText("2 player control : W(up) | S(down) ", (canvas.width / 10) * 4, (canvas.height / 12) * 8, "white");
    drawText("8(up) | 2(down)", (canvas.width / 10) * 6.6, (canvas.height / 12) * 9, "white");
    drawText("P for pause", (canvas.width / 10) * 4, (canvas.height / 12) * 10, "white");


  }
  //Menu
  if(menu) {
    context.font = "30px fantasy";
    drawRectangle(0, 0, canvas.width, canvas.height, "black");
    drawText("One player", (canvas.width / 10) * 4, (canvas.height / 12)* 4, "white");
    drawText("Two players local", (canvas.width / 10) * 4, (canvas.height / 12) * 5, "white");
    drawText("Multiplayer", (canvas.width / 10) * 4, (canvas.height / 12) * 6, "white");
    drawText("Options", (canvas.width / 10) * 4, (canvas.height / 12) * 7, "white");
  }
  
  // Game over
  if(gameOver) {
    context.font = "30px fantasy";
    drawRectangle(0, 0, canvas.width, canvas.height, "black");
    drawText("Go to menu", (canvas.width / 10) * 4, (canvas.height / 12) * 6, "white");
    if(computerWon) {
      drawText("Computer Won", (canvas.width / 10) * 4, (canvas.height / 12) * 5, "white");
    };
    if(playerWon) {
      drawText("Player Won", (canvas.width / 10) * 4, (canvas.height / 12) * 5, "white");
    }
    if(leftPlayerWon) {
      drawText("Left Player Won", (canvas.width / 10) * 4, (canvas.height / 12) * 5, "white");

    }
    if(rightPlayerWon) {
      drawText("Right Player Won", (canvas.width / 10) * 4, (canvas.height / 12) * 5, "white");

    }
  }
}
