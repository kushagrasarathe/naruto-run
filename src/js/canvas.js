import platform from "../images/platform.png";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

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

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }

  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}

const image = new Image();
image.src = platform;

const player = new Palyer();
const platforms = [
  new Platform({
    x: -1,
    y: 475,
    image,
  }),
  new Platform({
    x: image.width - 3,
    y: 475,
    image,
  }),
];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velociity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velociity.x = -5;
  } else {
    player.velociity.x *= 0.9;

    if (keys.right.pressed) {
      scrollOffset += 5;

      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });
    }
    if (scrollOffset > 2000) {
      console.log("You winn");
    }
  }

  //   player platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velociity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velociity.y = 0;
    }
  });
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
});
