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
    drawRectangle(0, 0, canvasWidth, canvasHeight, "black");
    drawRectangle(player.x, player.y, player.width, player.height, player.color);
    drawRectangle(comp.x, comp.y, comp.width, comp.height, comp.color);
    
    drawText(player.score, canvasWidth / 4, canvasHeight / 6, "white");
    drawText(comp.score, (3 * canvasWidth) / 4, canvasHeight / 6, "white");
    context.font = "30px fantasy";
    if (lvl_1) {
      drawText("Lvl 1", (2 * canvasWidth) / 4, canvasHeight / 6, "white");

    } else if (lvl_2) {
      drawText("Lvl_2", (2 * canvasWidth) / 4, canvasHeight / 6, "white");
    } else if (lvl_3) {
      drawText("Lvl_3", (2 * canvasWidth) / 4, canvasHeight / 6, "white");
    }

    drawCircle(ball.x, ball.y, ball.radius, ball.color);

    if(pause) {
      context.font = "40px fantasy";
      drawText("Pause", (canvasWidth / 10) * 4, (canvasHeight / 12) * 6, "white");
      drawText("Back to Menu", (canvasWidth / 10) * 4, (canvasHeight / 12) * 7, "white");

    }
  }

  //2 player gameplay
  if(localTwoPlayers) {
    console.log("2 player Draw");
    context.font = "60px fantasy";
    drawRectangle(0, 0, canvasWidth, canvasHeight, "black");
    drawRectangle(player.x, player.y, player.width, player.height, player.color);
    drawRectangle(secondPlayer.x, secondPlayer.y, secondPlayer.width, secondPlayer.height, secondPlayer.color);
    
    drawText(player.score, canvasWidth / 4, canvasHeight / 6, "white");
    drawText(secondPlayer.score, (3 * canvasWidth) / 4, canvasHeight / 6, "white");
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
    if(pause) {
      context.font = "40px fantasy";

      drawText("Pause", (canvasWidth / 10) * 4, (canvasHeight / 12) * 6, "white");
      drawText("Back to Menu", (canvasWidth / 10) * 4, (canvasHeight / 12) * 7, "white");

    }
  }
  //multiplayer

  // options
  if(options) {
    context.font = "30px fantasy";
    drawRectangle(0, 0, canvasWidth, canvasHeight, "black");
    drawText("Music " + onOrOff, (canvasWidth / 10) * 4, (canvasHeight / 12)* 4, "white");
    drawText("Sound " + soundsOnOrOffText, (canvasWidth / 10) * 4, (canvasHeight / 12) * 5, "white");
    drawText("Back to menu", (canvasWidth / 10) * 4, (canvasHeight / 12) * 6, "white");
    drawText("1 player control : Mouse", (canvasWidth / 10) * 4, (canvasHeight / 12) * 7, "white");
    drawText("2 player control : W(up) | S(down) ", (canvasWidth / 10) * 4, (canvasHeight / 12) * 8, "white");
    drawText("8(up) | 2(down)", (canvasWidth / 10) * 6.6, (canvasHeight / 12) * 9, "white");
    drawText("P for pause", (canvasWidth / 10) * 4, (canvasHeight / 12) * 10, "white");


  }
  //Menu
  if(menu) {
    context.font = "30px fantasy";
    drawRectangle(0, 0, canvasWidth, canvasHeight, "black");
    drawText("One player", (canvasWidth / 10) * 4, (canvasHeight / 12)* 4, "white");
    drawText("Two players local", (canvasWidth / 10) * 4, (canvasHeight / 12) * 5, "white");
    drawText("Multiplayer", (canvasWidth / 10) * 4, (canvasHeight / 12) * 6, "white");
    drawText("Options", (canvasWidth / 10) * 4, (canvasHeight / 12) * 7, "white");
  }
  
  // Game over
  if(gameOver) {
    context.font = "30px fantasy";
    drawRectangle(0, 0, canvasWidth, canvasHeight, "black");
    drawText("Go to menu", (canvasWidth / 10) * 4, (canvasHeight / 12) * 6, "white");
    if(computerWon) {
      drawText("Computer Won", (canvasWidth / 10) * 4, (canvasHeight / 12) * 5, "white");
    };
    if(playerWon) {
      drawText("Player Won", (canvasWidth / 10) * 4, (canvasHeight / 12) * 5, "white");
    }
    if(leftPlayerWon) {
      drawText("Left Player Won", (canvasWidth / 10) * 4, (canvasHeight / 12) * 5, "white");

    }
    if(rightPlayerWon) {
      drawText("Right Player Won", (canvasWidth / 10) * 4, (canvasHeight / 12) * 5, "white");

    }
  }
}
