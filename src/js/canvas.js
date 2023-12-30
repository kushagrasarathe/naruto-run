import platform from "../images/platform.png";
import hills from "../images/hills.png";
import background from "../images/background.png";
import platformSmallTall from "../images/platformSmallTall.png";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;

class Palyer {
  constructor() {
    this.speed = 10;
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

class GenericObject {
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

function createImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}

let platformImage = createImage(platform);
let platformSmallTallImage = createImage(platformSmallTall);

let player = new Palyer();
let platforms = [];

let genericObjects = [];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

function init() {
  platformImage = createImage(platform);

  player = new Palyer();
  platforms = [
    new Platform({
      x:
        platformImage.width * 4 +
        300 -
        2 +
        platformImage.width -
        platformSmallTallImage.width,
      y: 325,
      image: platformSmallTallImage,
    }),
    new Platform({
      x: -1,
      y: 475,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width - 3,
      y: 475,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 2 + 100,
      y: 475,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3 + 300,
      y: 475,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 300 - 2,
      y: 475,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 5 + 750,
      y: 475,
      image: platformImage,
    }),
  ];

  genericObjects = [
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(background),
    }),
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(hills),
    }),
  ];

  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  platforms.forEach((platform) => {
    platform.draw();
  });

  player.update();

  if (player.position.y < 1) {
    player.position.y = 0;
    player.velociity.y = 0;
    // init()
  }

  if (keys.right.pressed && player.position.x < 400) {
    player.velociity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velociity.x = -player.speed;
  } else {
    player.velociity.x *= 0.9;

    // keep player on screen
    if (keys.right.pressed) {
      scrollOffset += player.speed;

      // move hills when going right slightly slower than background
      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= player.speed * 0.66;
      });

      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= player.speed;

      // move hills when going left slightly slower than background
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });

      genericObjects.forEach((genericObject) => {
        genericObject.position.x += player.speed * 0.66;
      });
    }

    // win condition
    if (scrollOffset > 2000) {
      console.log("You winn");
    }

    // lose condition
    if (player.position.y > canvas.height) {
      console.log("You lose");
      init();
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

init();
animate();

window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      break;

    case 38:
      player.velociity.y -= 15;
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
      player.velociity.y += 15;
      break;

    case 39:
      keys.right.pressed = false;
      break;

    case 40:
      break;
  }
});
