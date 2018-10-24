window.onload = function () {
  const WIDTH = document.documentElement.clientWidth;
  const HEIGHT = document.documentElement.clientHeight;
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let linesNum = 16;
  let linesRy = [];
  let requestId = null;

  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  ctx.fillStyle = '#000';
};

function line(flag) {
  this.flag = flag;
  this.a = {};
  this.b = {};
}

