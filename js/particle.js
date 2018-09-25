class Particl {

  // 构造函数
  constructor(index, x, y) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.r = Math.random() * 2 + 1;
    let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = `rgba(255, 255, 255, ${alpha})`;
  }
}