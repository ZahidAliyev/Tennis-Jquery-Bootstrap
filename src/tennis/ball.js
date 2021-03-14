import { canvasHeight, canvasWidth } from "./canvas";
import { getRandomIntInclusive } from "./math";

export const ball = {
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  radius: 10,
  color: "red",
  speed: 5,
  xDirection: Math.random() < 0.5 ? 1 : -1,
  yDirection: Math.random() < 0.5 ? 1 : -1,
  velocityX: 5,
  velocityY: 5,
  setSpeed: function(num) {
    this.speed = num;
  },
  setBallDirectionToRandom: function() {
    this.velocityX *= this.xDirection;
    this.velocityY *= this.yDirection;
  },
  resetBallXPosition: function() {
    this.x = canvasWidth / 2;
  },
  resetBallYPosition: function() {
    this.y = canvasHeight / 2;
  },
  changeBallXDirection: function() {
    this.velocityX = -this.velocityX;
  },
  makeBallRandomSpeed: function(num1, num2) {
    this.speed = getRandomIntInclusive(num1, num2);
  },
  angleChangeFromHit: function(angleRad, direction) {
    this.velocityX = this.speed * Math.cos(angleRad) * direction;
    this.velocityY = this.speed * Math.sin(angleRad);
  },
  speedAddAfterHit: function(speed) {
    this.speed += speed;
  },
  Move: function() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    if (this.y - this.radius < 0 || this.y + this.radius > canvasHeight) {
      //ball.velocity = -ball.velocity
      this.velocityY = -this.velocityY;
    }

  }
};
