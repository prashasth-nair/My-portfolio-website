const square = document.querySelector(".square");
const container = document.querySelector(".container");

let xSpeed = 5;
let ySpeed = 5;

function moveSquare() {
  let x = square.offsetLeft + xSpeed;
  let y = square.offsetTop + ySpeed;
  let containerWidth = container.offsetWidth;
  let containerHeight = container.offsetHeight;
  let squareWidth = square.offsetWidth;
  let squareHeight = square.offsetHeight;

  if (x + squareWidth >= containerWidth || x <= 0) {
    xSpeed = -xSpeed;
  }
  if (y + squareHeight >= containerHeight || y <= 0) {
    ySpeed = -ySpeed;
  }

  square.style.left = x + "px";
  square.style.top = y + "px";

  requestAnimationFrame(moveSquare);
}

moveSquare();