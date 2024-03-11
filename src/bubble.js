let canvas = document.getElementById("water");
let ctx = canvas.getContext("2d");
let particles = [];
let particleCount = 100;

window.addEventListener("load", function () {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  for (var i = 0; i < particleCount; i++) particles.push(new particle());
});

window.addEventListener("resize", function () {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
});

class particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 300;
    this.speed = 0.25 + Math.random() * 0.5;
    this.radius = Math.random() * 20;
    this.opacity = (Math.random() * 100) / 1000;
  }
}

function loop() {
  requestAnimationFrame(loop);
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = "lighter";
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    ctx.beginPath();
    ctx.fillStyle = "rgba(1,114,173," + p.opacity + ")";
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
    ctx.fill();
    p.y -= p.speed;
    if (p.y <= -10) particles[i] = new particle();
  }
}

loop();
