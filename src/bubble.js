var canvas = document.getElementById("water");
var ctx = canvas.getContext("2d");
var particles = [];
var particleCount = 100;

window.addEventListener("load", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (var i = 0; i < particleCount; i++) particles.push(new particle());
});

// onresize
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function particle() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 300;
  this.speed = 0.5 + Math.random() * 1;
  this.radius = Math.random() * 20;
  this.opacity = (Math.random() * 100) / 3000;
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
