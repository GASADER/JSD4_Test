(() => {
  function setup() {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //เข้าถึงรูปและปรับขนาด

    return {
      canvas,
      canvasContext: canvas.getContext("2d"),
      numberOfSnowBalls: 250,
    };
    //return objuct ให้canvasContextรับค่าในcanvas และสร้าง snowball
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //returnค่าเข้าrandom()แล้วปัดเศษด้วย.floor

  function createSnowBalls(canvas, numberOfSnowBalls) {
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        redius: random(2, 4),
        speedX: random(-5, 5),
        speedy: random(1, 3),
        //วิ่งซ้ายขวาลงล่าง
      };
    });
    //กระจายค่าลงในarray
  }

  function drawSnowBall(canvasContext, snowBall) {
    canvasContext.beginPath();
    //บอกให้เริ่มที่จุดเริ่มต้น
    canvasContext.arc(snowBall.x, snowBall.y, snowBall.redius, 0, Math.PI * 2);
    //บอกให้วาดเป็นวงกลม
    canvasContext.fillStyle = `rgba(255, 255, 255, ${snowBall.opacity})`;
    canvasContext.fill();
  }

  function moveSnowBall(canvas, snowBall) {
    snowBall.x += snowBall.speedX;
    snowBall.y += snowBall.speedy;

    if (snowBall.x > canvas.width) {
      snowBall.x = 0;
    } else if (snowBall.x < 0) {
      snowBall.x = canvas.width;
    }

    if (snowBall.y > canvas.height) {
      snowBall.y = 0;
    }
    //สร้างเงื่อนไขให้วนลูป
  }

  function run() {
    const { canvas, canvasContext, numberOfSnowBalls } = setup();
    //hoisting รับค่าreturnจาก setup()
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
    //hoisting รับค่าจาก snowBalls

    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      //clearตัวเดิมที่เขียนใหม่ทุกรอบ
      snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
      snowBalls.forEach((snowBall) => moveSnowBall(canvas, snowBall));
    }, 50);
    //ให้ขยับทุกๆ50ms
  }

  run();
  //เรียกใช้ฟังค์ชั่นrun
})();
//เรียกใช้ฟังค์ชั่นทั้งหมด
