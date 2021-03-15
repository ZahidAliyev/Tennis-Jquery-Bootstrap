import { ball } from "./ball";
import { comp, player, secondPlayer } from "./users";
import { canvasWidth } from "./canvas";
import { hit, playHit } from "./sounds";

function goal(leftUser, rightUser, ball) {
  if (ball.x - ball.radius < 0) {
    rightUser.addScore(1);
    resetBall();
  } else if (ball.x + ball.radius > canvasWidth) {
    leftUser.addScore(1);
    resetBall();
  }
}


function collision(b, u) {
  u.top = u.y;
  u.bottom = u.y + u.height;
  u.left = u.x;
  u.right = u.x + u.width;

  b.top = b.y - b.radius;
  b.bottom = b.y + b.radius;
  b.left = b.x - b.radius;
  b.right = b.x + b.radius;

  return (
    b.right > u.left && b.top < u.bottom && b.left < u.right && b.bottom > u.top
  );
}

export function resetBall() {
  ball.resetBallXPosition();
  ball.resetBallYPosition();
  ball.changeBallXDirection();
  ball.setSpeed(5);
}
export function onePlayerModeActions() {
  ball.Move();
  comp.move();
  //--------Does ball collide with Player or Computer ?
  let user = ball.x < canvasWidth / 2 ? player : comp;
  //---------If ball collide with User
  if (collision(ball, user)) {
    playHit();
    console.log(hit);
    let collidePoint =
      (ball.y - (user.y + user.height / 2)) / (user.height / 2);
    let angleRad = (collidePoint * Math.PI) / 4;

    let direction = ball.x < canvasWidth / 2 ? 1 : -1;

    ball.angleChangeFromHit(angleRad, direction);

    ball.speedAddAfterHit(0.4);
  }
//--------------------------- GOAL
goal(player, comp, ball);

}

// -------------------------TWO PLAYERS--------------

export function twoPlayersModeActions() {
  
  ball.Move();
  player.keyMove();
  secondPlayer.keyMove();

  //--------Does ball collide with Player or Computer ?
  let user = ball.x < canvasWidth / 2 ? player : secondPlayer;
  //---------If ball collide with User
  if (collision(ball, user)) {
    playHit();
    let collidePoint =
      (ball.y - (user.y + user.height / 2)) / (user.height / 2);
    let angleRad = (collidePoint * Math.PI) / 4;

    let direction = ball.x < canvasWidth / 2 ? 1 : -1;

    ball. angleChangeFromHit(angleRad, direction);

    ball.speedAddAfterHit(0.4);
  }
//--------------------------- GOAL
goal(player, secondPlayer, ball);

}
