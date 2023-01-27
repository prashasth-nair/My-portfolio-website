var intro = document.getElementsByClassName("intro_span");
// Get the current scroll position
var currentScrollPos = window.pageYOffset;
window.addEventListener("scroll", ()=>{
  // Get the new scroll position
  var newScrollPos = window.pageYOffset;
  
  // Calculate the difference between the new and current scroll position
  var scrollDiff = newScrollPos - currentScrollPos;
  
  // Get the current opacity of the div
  var currentOpacity = intro.style.opacity;
  
  
  // Increase the opacity of the div by 0.01 for every 10 pixels scrolled
  intro.style.opacity = currentOpacity + (scrollDiff / 10) * 0.01;
  
  // Update the current scroll position
  currentScrollPos = newScrollPos;
  });