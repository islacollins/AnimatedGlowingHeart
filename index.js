// 创建一个爱心形状的canvas动画
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 设定爱心的大小和位置
const heartSize = 100;
const heartX = canvas.width / 2;
const heartY = canvas.height / 2 - 50;

// 创建渐变
const gradient = ctx.createRadialGradient(heartX, heartY, 0, heartX, heartY, heartSize);
gradient.addColorStop(0, 'rgba(255, 0, 0, 0.8)');
gradient.addColorStop(1, 'rgba(255, 255, 0, 0)');

// 动画循环
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制爱心
    ctx.beginPath();
    ctx.moveTo(heartX, heartY);
    ctx.bezierCurveTo(heartX + 75, heartY - 75, heartX + 125, heartY + 50, heartX, heartY + 150);
    ctx.bezierCurveTo(heartX - 125, heartY + 50, heartX - 75, heartY - 75, heartX, heartY);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();

    requestAnimationFrame(animate);
}

animate();
