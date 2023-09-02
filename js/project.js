const elements = document.querySelectorAll('.project_img');
const project_details_elements = document.querySelectorAll('.project_details');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
});

elements.forEach((element) => {
  observer.observe(element);
});
project_details_elements.forEach((project_details_element) => {
  observer.observe(project_details_element);
});


const blob = document.getElementById("blob");
// Todo: Added mouse move background effect
document.body.onpointermove = event => {

  const {clientX, clientY} = event;

  blob.style.left = clientX+'px';
  blob.style.top = clientY+'px';
}