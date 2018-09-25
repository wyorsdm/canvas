// export class Particl {

//   // 构造函数
//   constructor(ctx, index, x, y) {
//     this.ctx = ctx; // 2d 
//     this.index = index; // 唯一的参数，坐标和半径颜色都与 index 有关
//     this.x = x; // x 坐标
//     this.y = y; // y 坐标
//     this.r = Math.random() * 2 + 1;  // 半径
//     let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2; // 透明度
//     this.color = `rgba(255, 255, 255, ${alpha})`; // 颜色
//   }

//   // 绘制
//   draw() {
//     this.ctx.fillStyle = this.color; // 颜色
//     this.ctx.shadowBlur = this.r * 2; // 阴影
//     this.ctx.beginPath(); // 开始绘制
//     this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false); // 画圆，这里是相当于画圆点
//     this.ctx.closePath();
//     this.ctx.fill();
//   }
// }

let canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
WIDTH = document.documentElement.clientWidth,
HEIGHT = document.documentElement.clientHeight,
particleLength = 100,
particleList = [];

canvas.width = WIDTH;
canvas.height = HEIGHT;

// 构造函数
function Particle(index, x, y) {
  this.index = index; // 唯一的参数，坐标和半径颜色都与 index 有关
  this.x = x; // x 坐标
  this.y = y; // y 坐标
  this.r = Math.random() * 2 + 1;  // 半径
  let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2; // 透明度
  this.color = `rgba(255, 255, 255, ${alpha})`; // 颜色
}

// 绘制
Particle.prototype.draw = function() {
  ctx.fillStyle = this.color; // 颜色
  ctx.shadowBlur = this.r * 2; // 阴影
  ctx.beginPath(); // 开始绘制
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false); // 画圆，这里是相当于画圆点
  ctx.closePath();
  ctx.fill();
}

// 移动
Particle.prototype.move = function() {
  this.y -= 0.15;

  if (this.y <= -10) {
    this.y = HEIGHT + 10;
  }
  this.draw();
}

// 使用 requestAnimationFrame() 函数递归的调用 animate() 函数来实现动画的效果
function animate() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  particleList.forEach(particle => {
    particle.move();
  });
  requestAnimationFrame(animate);
}

// 初始化
function init() {
  for (let i = 0; i < particleLength; i++) {
    let particle = new Particle(i, Math.random() * WIDTH, Math.random() * HEIGHT);
    particleList.push(particle);
    particle.draw();
  }
  animate();
}

init();