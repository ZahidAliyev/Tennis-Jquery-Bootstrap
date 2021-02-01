const ball = {
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  radius: 10,
  color: "red",
  speed: 5,
  xDirection: Math.random() < 0.5 ? 1 : -1,
  yDirection: Math.random() < 0.5 ? 1 : -1,
  velocityX: 8,
  velocityY: 8,

  Move: function() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    if (this.y - this.radius < 0 || this.y + this.radius > canvasHeight) {
      ball.velocityY = -ball.velocityY;
    }

  }
};
