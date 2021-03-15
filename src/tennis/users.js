import {leftPlayerUpPressed, leftPlayerDownPressed,rightPlayerUpPressed,rightPlayerDownPressed} from './inputs';
import { canvasWidth, canvasHeight, canvas } from "./canvas";
import {ball} from './ball';
export const player = {
  height: 100,
  x: 0,
  y: canvasHeight / 2 - 100 / 2,
  width: 10,
  color: "white",
  score: 0,
  setScore: function(num) {
    this.score = num;
  },
  addScore: function(num) {
    this.score += num;
  },
  mouseMove: function(e) {
    let rect = canvas.getBoundingClientRect();
    this.y = e.clientY - rect.top - this.height / 2;
  },

  keyMove: function() {
    // twoPlayersLocalMoveWithKeys(leftPlayerUpPressed, leftPlayerDownPressed, this.y);
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y + this.height > canvasHeight) {
      this.y = canvasHeight - this.height;
    } else {
      if (leftPlayerUpPressed) {
        this.y -= 15;
      }
      if (leftPlayerDownPressed) {
        this.y += 15;
      }
    }
  }
};

export const secondPlayer = {
  height: 100,
  x: canvasWidth - 10,
  y: canvasHeight / 2 - 100 / 2,
  width: 10,
  color: "white",
  score: 0,
  setScore: function(score) {
    this.score = score;
  },
  addScore: function(num) {
    this.score += num;
  },
  keyMove: function() {
    // twoPlayersLocalMoveWithKeys(rightPlayerUpPressed, rightPlayerDownPressed, this.y);
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y + this.height > canvasHeight) {
      this.y = canvasHeight - this.height;
    } else {
      if (rightPlayerUpPressed) {
        this.y -= 15;
      }
      if (rightPlayerDownPressed) {
        this.y += 15;
      }
    }
  }
};

export const comp = {
  height: 100,
  x: canvasWidth - 10,
  y: canvasHeight / 2 - 100 / 2,
  width: 10,
  color: "white",
  score: 0,
  computerLevel: 0.05,
  setComputerLevel: function(levelSpeedMultiplier) {
    this.computerLevel = levelSpeedMultiplier;
  },
  setScore: function(num) {
    this.score = num;
  },
  addScore: function(num) {
    this.score += num;
  },
  move: function() {
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y + this.height > canvasHeight) {
      this.y = canvasHeight - this.height;
    } else {
      this.y += (ball.y - (this.y + this.height / 2)) * this.computerLevel;
    }
  }
};
