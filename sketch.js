let seaweeds = [];

function setup() {
  let Canvas = createCanvas(windowWidth, windowHeight);
  Canvas.parent('animation-container'); // 將畫布置入指定的 HTML 元素中
  // 初始化海草
  for (let j = 0; j < 40; j++) {
    seaweeds.push({
      x: random(windowWidth),
      y: windowHeight,
      height: random(200, 600), // 增加海草的高度範圍
      width: random(30, 60),
      color: [random(255), random(255), random(255), random(100, 300)], // 增加透明度
      frequency: random(0.02, 0.1) // 隨機搖晃頻率
    });
  }
}

function draw() {
  clear(); // 清除畫布，保持透明

  // 設定混合模式
  blendMode(BLEND);

  // 繪製多條海草
  for (let seaweed of seaweeds) {
    stroke(seaweed.color);
    strokeWeight(30); // 縮小線條寬度

    let x = seaweed.x;
    let y = seaweed.y;

    // 繪製多段線條
    for (let i = 0; i < seaweed.height / 10; i++) {
      let nextX = x;
      if (i > 2) { // 讓前兩段保持不動或僅有微小擺動
        nextX = x + sin(frameCount * seaweed.frequency + i * 0.5) * (seaweed.width / 10); // 調整擺動幅度
      } else {
        nextX = x + sin(frameCount * seaweed.frequency + i * 0.5) * (seaweed.width / 20); // 微小擺動
      }
      let nextY = y - 10;
      line(x, y, nextX, nextY);
      x = nextX;
      y = nextY;
    }
  }
}