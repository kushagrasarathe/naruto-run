const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;

class Palyer {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 30;
    this.height = 30;
    this.color = "gold";
    this.velociity = {
      x: 0,
      y: 1,
    };
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.position.x += this.velociity.x;
    this.position.y += this.velociity.y;
    if (this.velociity.y + this.height + this.position.y <= canvas.height) {
      this.velociity.y += gravity;
    } else {
      this.velociity.y = 0;
    }
  }
}

const player = new Palyer();
player.update();

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.right.pressed) {
    player.velociity.x = 5;
  } else if (keys.left.pressed) {
    player.velociity.x = -5;
  } else {
    player.velociity.x = 0;
  }
}

animate();

window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      break;

    case 38:
      player.velociity.y -= 20;
      break;

    case 39:
      keys.right.pressed = true;
      break;

    case 40:
      break;
  }
  console.log(keys.right.pressed);
});

window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      break;

    case 38:
        player.velociity.y += 20;
      break;

    case 39:
      keys.right.pressed = false;
      break;

    case 40:
      break;
  }
  console.log(keys.left.pressed);
});
