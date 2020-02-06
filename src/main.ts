function E(n: number): boolean[] {
  let sieve = new Array(n + 1).fill(true);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (sieve[i] == true) {
      for (let j = i ** 2; j <= n; j += i ** 2) {
        sieve[i] = false;
      }
    }
  }
  return sieve;
}

const WIDTH_PX = window.innerWidth;
const HEIGHT_PX = 600;

let canvas = document.createElement("canvas");
function renderGrid() {
  let ctx = canvas.getContext("2d");

  let numbersCount = 10_000;
  let rowCount = 30;
  let sieve = E(numbersCount);
  let rectWidth = WIDTH_PX / rowCount;
  let rectHeight = rectWidth / 2.5;

  canvas.width = WIDTH_PX;
  canvas.height = Math.floor(sieve.length / rowCount + 1) * rectHeight + 10;

  let grid = [];
  for (let i = 0; i <= numbersCount; i += rowCount) {
    grid.push(sieve.slice(i, i + rowCount));
  }
  for (let y = 0; y <= grid.length; y++) {
    for (let x = 0; x + y * rowCount - rowCount <= numbersCount; x++) {
      let offsetX = rectWidth * x;
      let offsetY = rectHeight * y;
      // ctx?.rect(offsetX + 5, offsetY + 5, rectWidth - 10, rectHeight - 10);
      let n = x + y * rowCount - rowCount;
      ctx?.fillText(n, offsetX, offsetY);
      ctx?.fill();
    }
  }
}

renderGrid();
document.body.appendChild(canvas);
