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