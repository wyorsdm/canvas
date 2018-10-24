window.onload = function () {
  const WIDTH = document.documentElement.clientWidth;
  const HEIGHT = document.documentElement.clientHeight;
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let circle = {
    x: (WIDTH / 2) + 5,
    y: (HEIGHT / 2) + 22,
    radius: 90,
    speed: 2,
    rotation: 0,
    angleStart: 270,
    angleEnd: 90,
    hue: 220,
    thickness: 18,
    blur: 25
  };
  let particles = [];
  let particleMax = 100;
};

function rand(a, b) {
  return ~~((Math.random() * (b - a + 1)) + a);
}

/**
 * 转换度数为度
 * @param {*} degrees 需要转换的度数
 */
function convertDegrees(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * 根据运动速度更新圆的角度，如果超过 360 度则变为 0
 */
function updateCircle() {
  if (circle.rotation < 360) {
    circle.rotation += circle.speed;
  } else {
    circle.rotation = 0;
  }
}

function renderCircled(ctx, circle) {
  ctx.save();
  ctx.translate(circle.x, circle.y);
  ctx.rotate(convertDegrees(circle.rotation));
  ctx.beginPath();
  ctx.arc(0, 0, circle, radius, convertDegrees(circle.angleStart), convertDegrees(circle.angleEnd), true);
  ctx.lineWidth = circle.thickness;
  ctx.strokeStyle = gradient1;
  ctx.stroke();
  ctx.restore();
}

function renderCircleBorder(ctx, circle) {
  ctx.save();
  ctx.translate(circle.x, circle.y);
  ctx.rotate(convertDegrees(circle.rotation));
  ctx.beginPath();
  ctx.arc(0, 0, circle.radius + (circle.thickness / 2), convertDegrees(circle.angleStart), convertDegrees(circle.angleEnd), true);
  ctx.lineWidth = 2;
  ctx.strokeStyle = gradient2;
  ctx.stroke();
  ctx.restore();
}

function  renderCircleFlare() {
  ctx.save();
  ctx.translate(circle.x, circle.y);
  ctx.rotate(convertDegrees(circle.rotation + 185));
  ctx.scale(1, 1);
  ctx.beginPath();
  ctx.arc(0, circle.radius, 30, 0, Math.PI * 2, false);
  ctx.closePath();
  let gradient = ctx.createRadiaGradient(0, circle.radius, 0, 0, circle.radius, 30);
  gradient.addColorStop(0, 'hsla(330, 50%, 50%, .35)');
  gradient.addColorStop(1, 'hsla(330, 50%, 50%, 0)');
  ctx.fill();
  ctx.restore();
}

function renderCircleFlare2(ctx, circle) {
  ctx.save();
  ctx.translate(circle.x, circle.y);
  ctx.rotate(convertDegrees(circle.rotation + 165));
  ctx.scale(1, 1);
  ctx.beginPath();
  ctx.arc(0, circle.radius, 25, 0, Math.PI * 2, false);
  ctx.closePath();
  let gradient = ctx.createRadiaGradient(0, circle.radius, 0, 0, circle.radius, 25);
  gradient.addColorStop(0, 'hsla(30, 100%, 50%, .2)');
  gradient.addColorStop(1, 'hsla(30, 100%, 50%, 0)');
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.restore();
}

// function createParticles() {
//   if (particles.length < particleMax) {
//     particles.push({
//       x: (circle.x + circle.radius * Math.cos())
//     })
//   }
// }