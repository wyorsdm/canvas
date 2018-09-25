let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    WIDTH = document.documentElement.clientWidth,
    HEIGHT = document.documentElement.clientHeight,
    particleLength = 100,
    particleList = [],
    useCache = true;

canvas.width = WIDTH;
canvas.height = HEIGHT;

// 构造函数
function Particle(index, x, y) {
    let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2; // 透明度

    this.index = index; // 唯一的参数，坐标和半径颜色都与 index 有关
    this.x = x; // x 坐标
    this.y = y; // y 坐标坐标
    this.useCache = useCache;
    this.r = Math.random() * 2 + 1;  // 半径
    this.color = `rgba(255, 255, 255, ${alpha})`; // 颜色

    this.cacheCanvas = document.createElement('canvas');
    this.cacheCtx = this.cacheCanvas.getContext('2d');
    this.cacheCanvas.width = this.r * 6;
    this.cacheCanvas.height = this.r * 6;

    if (useCache) {
        this.cache();
    }
}

// 绘制一个圆
Particle.prototype.cache = function() {
    this.cacheCtx.save();
    this.cacheCtx.fillStyle = this.color;
    this.cacheCtx.shadowStyle = '#fff';
    this.cacheCtx.shadowBlur = this.r * 2;
    this.cacheCtx.beginPath();
    this.cacheCtx.arc(this.r * 3, this.r * 3, this.r, 0, Math.PI * 2);
    this.cacheCtx.closePath();
    this.cacheCtx.fill();
    this.cacheCtx.restore();
}

// 绘制
Particle.prototype.draw = function() {
    if (!useCache) {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.r * 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    } else {
        ctx.drawImage(this.cacheCanvas, this.x - this.r, this.y - this.r);
    }
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
