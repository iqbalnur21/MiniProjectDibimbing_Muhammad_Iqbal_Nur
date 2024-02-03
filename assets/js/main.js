const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}
function changeSlide() {
  slider.append(document.querySelector('.item'));
}
document.addEventListener('click', activate, false);
setInterval(changeSlide, 5000);
