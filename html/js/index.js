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
document.querySelector(".menu-toggle").addEventListener("click",toggleMenu);

var menuVisible = false;
var menu = document.querySelector('.menu');
function toggleMenu() {
  
  if (!menuVisible) {
    menu.style.display = 'flex';
    menuVisible = true;
  } else {
    menu.style.display = 'none';
    menuVisible = false;
  }
}
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    menu.style.display = 'flex';
    menuVisible = true;
  } else {
    menu.style.display = 'none';
    menuVisible = false;
  }
});

moveSquare();