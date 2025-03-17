const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const popupSlide = document.querySelector('#popupSlide');
const sliderItem = document.querySelectorAll('.our_requirements_content_item');
const sliderPhoto = document.querySelector('.our_requirements_img');
const body = document.body;

burger.addEventListener('click', burgerHandler);
popup.addEventListener('click', (e) => {
  burgerHandler(e);
});

sliderItem.forEach((e) => {
  e.addEventListener('click', () => {
    setImage(e, sliderItem);
  });
});

function burgerHandler(e) {
  if (popup.classList.contains('open')) {
    popup.classList.add('close');
    body.classList.remove('noscroll');
    popupSlide.classList.add('slideout');

    setTimeout(() => {
      popup.classList.remove('close');
      popup.classList.remove('open');
      popupSlide.classList.remove('slideout');
      popupSlide.classList.remove('slidein');
    }, 300);
  } else {
    body.classList.add('noscroll');
    popup.classList.add('open');
    popupSlide.classList.add('slidein');
  }
  burger.classList.toggle('active');
}

var items = document.querySelectorAll('.why_item');

document.addEventListener('DOMContentLoaded', function () {
  const enSelectors = document.querySelectorAll('.selector.english');
  const esSelectors = document.querySelectorAll('.selector.espaniol');
  const body = document.body;

  function changeLanguage(lang) {
    body.classList.remove('lang-en', 'lang-es');
    body.classList.add(`lang-${lang}`);
  }

  // Set default language to English on load
  changeLanguage('en');

  enSelectors.forEach((selector) => {
    selector.addEventListener('click', () => changeLanguage('en'));
  });

  esSelectors.forEach((selector) => {
    selector.addEventListener('click', () => changeLanguage('es'));
  });
});

const testiWrapper = document.querySelector('.testi_wrapper');

// const testiWrapper = document.querySelector(".testi_wrapper");

let isDown = false;
let startX;
let scrollLeft;

testiWrapper.addEventListener('mousedown', (e) => {
  isDown = true;
  testiWrapper.classList.add('active');
  startX = e.pageX - testiWrapper.offsetLeft;
  scrollLeft = testiWrapper.scrollLeft;
  testiWrapper.style.userSelect = 'none'; // Prevent text selection
});

testiWrapper.addEventListener('mouseleave', () => {
  isDown = false;
  testiWrapper.classList.remove('active');
});

testiWrapper.addEventListener('mouseup', () => {
  isDown = false;
  testiWrapper.classList.remove('active');
  testiWrapper.style.userSelect = ''; // Re-enable text selection
});

testiWrapper.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - testiWrapper.offsetLeft;
  const walk = (x - startX) * 0.85; // Reduced speed multiplier for smoother scrolling
  testiWrapper.scrollLeft = scrollLeft - walk;
});
