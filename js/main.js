const carouselSlide = document.querySelector('.carusel-slider');
const carouselImages = document.querySelectorAll('.carusel-slider img');
const elbody = document.querySelector('#body');
// button

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

// buttons contorls
let nat = 1
nextBtn.addEventListener('click',() => {
  if (counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = 'all 0.4s ease-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

  if (nat == 1) {
 
    elbody.style.backgroundImage = "url('images/surface-duo-1920x1080-23828.jpg')";
    elbody.style.transition = "all .9s ease";

    nat += 1
  } else if (nat == 2) {

    elbody.style.backgroundImage = "url('images/surface-duo-1920x1080-23833.jpg')";
    elbody.style.transition = "all .9s ease";

    nat += 1
  } else if (nat == 3) {
  
    elbody.style.backgroundImage = "url('images/asus-rog-phone-1920x1080-20597.jpg')";
    elbody.style.transition = "all .9s ease";


    nat += 1
  } else if (nat == 4) {

    elbody.style.backgroundImage = "url('images/surface-duo-1920x1080-23047.jpg')";
    elbody.style.transition = "all .9s ease";
  }
});

prevBtn.addEventListener('click',() => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
  if (nat == 5) {
 
    elbody.style.backgroundImage = "url('images/surface-duo-1920x1080-23047.jpg')";
    elbody.style.transition = "all .9s ease";

    nat -= 1
  } else if (nat == 4) {

    elbody.style.backgroundImage = "url('images/asus-rog-phone-1920x1080-20597.jpg')";
    elbody.style.transition = "all .9s ease";

    nat -= 1
  } else if (nat == 3) {
  
    elbody.style.backgroundImage = "url('images/surface-duo-1920x1080-23833.jpg')";
    elbody.style.transition = "all .9s ease";


    nat -= 1
  } else if (nat == 2) {

    elbody.style.backgroundImage = "url('images/surface-duo-1920x1080-23828.jpg')";
    elbody.style.transition = "all .9s ease";
    nat -= 1

  } else if (nat == 1) {

    elbody.style.backgroundImage = "url('images/surface-duo-1920x1080-23047.jpg')";
    elbody.style.transition = "all .9s ease";
    nat -= 1
  }
  else if (nat == 0) {

    elbody.style.backgroundImage = "url('images/surface-duo-1920x1080-23833.jpg')";
    elbody.style.transition = "all .9s ease";
    nat -= 1
  }
  
});




carouselSlide.addEventListener('transitionend', () => {
    if (carouselSlide[counter].id == 'lastClone') {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length -2;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
    if (carouselSlide[counter].id == 'fistClone') {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
});