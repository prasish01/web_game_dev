/**@type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 5;
const enemyArray = [];
let gameFrame = 0;

class Enemy {
  constructor(src) {
    this.image = new Image();
    this.image.src = src;
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height - 50);
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = 0;
    this.angleSpeed = Math.random() * 2 + 0.5;
    this.curve = Math.random() * 200 + 50;
  }
  update() {
    this.x =
      (canvas.width / 2.4) * Math.sin((this.angle * Math.PI) / 90) +
      canvas.width / 2 -
      this.width / 2;

    this.y =
      (canvas.height / 2.2) * Math.cos((this.angle * Math.PI) / 360) +
      canvas.height / 2 -
      this.height / 2;
    // this.x -= this.speed;
    // this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) this.x = canvas.width;
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
for (i = 0; i < numberOfEnemies; i++) {
  enemyArray.push(new Enemy("./assets/enemy3.png"));
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemyArray.forEach((enemy) => {
    enemy.draw();
    enemy.update();
  });
  gameFrame++;

  requestAnimationFrame(animate);
}
animate();
