let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    WIDTH = document.documentElement.clientWidth,
    HEIGHT = document.documentElement.clientHeight,
    params = {
        num: 100,
        color: false,   // 颜色，如果是 false 则是随机渐变颜色
        r: 0.9, // 圆每次增加的半径
        o: 0.09, // 判断圆消失的条件，数值越大，消失越快
        a: 1 // 透明度
    },
    color,
    color2,
    roundList = []; // 存放圆的数组

canvas.width = WIDTH;
canvas.height = HEIGHT;

window.onmousemove = function(event) {
    roundList.push({
        mouseX: event.clientX,
        mouseY: event.clientY,
        r: params.r, // 设置半径每次增大的数值
        o: 1 // 判断圆消失的条件，数值越大，消失越快
    });
}

if (params.color) {
    color2 = params.color;
} else {
    color = Math.random() * 360;
}

function animate() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    if (!params.color) {
        color += 1;
        color2 = `hsl(${color}, 100%, 80%)`;
        // color2 = '#fff';
    }

    roundList
        .filter(round => round.o > 0)
        .forEach(round => {
            console.log(color2);
            ctx.fillStyle = color2;
            ctx.beginPath();
            ctx.arc(round.mouseX, round.mouseY, round.r, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
            round.r += params.r;
            round.o -= params.o;
        });
    requestAnimationFrame(animate);
}

animate();