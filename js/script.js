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

// Add click event listener to each item
items.forEach(function (item) {
  var absoluteLayer = item.querySelector('.why_abs_item-text');

  item.addEventListener('click', function () {
    if (absoluteLayer.classList.contains('show')) {
      absoluteLayer.classList.remove('show');
    } else {
      absoluteLayer.classList.add('show');
    }
  });
});

class BeforeAfter {
  constructor(enteryObject) {
    const beforeAfterContainer = document.querySelector(enteryObject.id);
    const before = beforeAfterContainer.querySelector('.bal-before');
    const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
    const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
    const handle = beforeAfterContainer.querySelector('.bal-handle');
    var widthChange = 0;
    console.log(beforeAfterContainer.offsetWidth);
    beforeAfterContainer
      .querySelector('.bal-before-inset')
      .setAttribute('style', 'width: ' + beforeAfterContainer.offsetWidth + 'px;');
    window.onresize = function () {
      beforeAfterContainer
        .querySelector('.bal-before-inset')
        .setAttribute('style', 'width: ' + beforeAfterContainer.offsetWidth + 'px;');
    };
    before.setAttribute('style', 'width: 50%;');
    handle.setAttribute('style', 'left: 50%;');

    //touch screen event listener
    beforeAfterContainer.addEventListener('touchstart', (e) => {
      beforeAfterContainer.addEventListener('touchmove', (e2) => {
        let containerWidth = beforeAfterContainer.offsetWidth;
        let currentPoint = e2.changedTouches[0].clientX;

        let startOfDiv = beforeAfterContainer.offsetLeft;

        let modifiedCurrentPoint = currentPoint - startOfDiv;

        if (
          modifiedCurrentPoint > 10 &&
          modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10
        ) {
          let newWidth = (modifiedCurrentPoint * 100) / containerWidth;

          before.setAttribute('style', 'width:' + newWidth + '%;');
          afterText.setAttribute('style', 'z-index: 1;');
          handle.setAttribute('style', 'left:' + newWidth + '%;');
        }
      });
    });

    //mouse move event listener
    beforeAfterContainer.addEventListener('mousemove', (e) => {
      let containerWidth = beforeAfterContainer.offsetWidth;
      widthChange = e.offsetX;
      let newWidth = (widthChange * 100) / containerWidth;

      if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
        before.setAttribute('style', 'width:' + newWidth + '%;');
        afterText.setAttribute('style', 'z-index:' + '1;');
        handle.setAttribute('style', 'left:' + newWidth + '%;');
      }
    });
  }
}

class BeforeAfterm {
  constructor(enteryObject) {
    const beforeAfterContainer = document.querySelector(enteryObject.id);
    const before = beforeAfterContainer.querySelector('.bal-before');
    const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
    const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
    const handle = beforeAfterContainer.querySelector('.bal-handle');
    var widthChange = 0;
    console.log(beforeAfterContainer.offsetWidth);
    beforeAfterContainer
      .querySelector('.bal-before-inset')
      .setAttribute('style', 'width: ' + beforeAfterContainer.offsetWidth + 'px;');
    window.onresize = function () {
      beforeAfterContainer
        .querySelector('.bal-before-inset')
        .setAttribute('style', 'width: ' + beforeAfterContainer.offsetWidth + 'px;');
    };
    before.setAttribute('style', 'width: 50%;');
    handle.setAttribute('style', 'left: 50%;');

    //touch screen event listener
    beforeAfterContainer.addEventListener('touchstart', (e) => {
      beforeAfterContainer.addEventListener('touchmove', (e2) => {
        let containerWidth = beforeAfterContainer.offsetWidth;
        let currentPoint = e2.changedTouches[0].clientX;

        let startOfDiv = beforeAfterContainer.offsetLeft;

        let modifiedCurrentPoint = currentPoint - startOfDiv;

        if (
          modifiedCurrentPoint > 10 &&
          modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10
        ) {
          let newWidth = (modifiedCurrentPoint * 100) / containerWidth;

          before.setAttribute('style', 'width:' + newWidth + '%;');
          afterText.setAttribute('style', 'z-index: 1;');
          handle.setAttribute('style', 'left:' + newWidth + '%;');
        }
      });
    });

    //mouse move event listener
    beforeAfterContainer.addEventListener('mousemove', (e) => {
      let containerWidth = beforeAfterContainer.offsetWidth;
      widthChange = e.offsetX;
      let newWidth = (widthChange * 100) / containerWidth;

      if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
        before.setAttribute('style', 'width:' + newWidth + '%;');
        afterText.setAttribute('style', 'z-index:' + '1;');
        handle.setAttribute('style', 'left:' + newWidth + '%;');
      }
    });
  }
}
let questionWrapper = document.querySelectorAll('.question_info_wrapper');
let questionText = document.querySelectorAll('.question_text_wrapper');

questionWrapper.forEach((item) =>
  item.addEventListener('click', () => {
    if (item.classList.contains('show_full_content') == false) {
      item.children[0].children[0].classList.add('rotate-back');
      item.children[0].children[1].classList.add('rotate-back');

      setTimeout(() => {
        item.classList.add('show_full_content');
        item.children[0].children[0].classList.add('make-long');
        setTimeout(() => {
          item.children[1].classList.add('fadeup_text');
        }, 300);
      }, 500);
    } else {
      item.classList.remove('show_full_content');
      item.children[0].children[0].classList.remove('make-long');
      setTimeout(() => {
        item.children[1].classList.remove('fadeup_text');
        item.children[0].children[0].classList.remove('rotate-back');
        item.children[0].children[1].classList.remove('rotate-back');
      }, 300);
    }
  }),
);
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');
  const showMoreButton = document.getElementById('show-moreit');
  const closeButton = document.getElementById('closeit');

  // Show the first 5 items initially
  for (let i = 0; i < 5; i++) {
    faqItems[i].classList.add('visible');
  }

  showMoreButton.addEventListener('click', function () {
    faqItems.forEach((item) => item.classList.add('visible'));
    showMoreButton.style.display = 'none';
    closeButton.style.display = 'inline-block';
  });

  closeButton.addEventListener('click', function () {
    faqItems.forEach((item) => item.classList.remove('visible'));
    for (let i = 0; i < 5; i++) {
      faqItems[i].classList.add('visible');
    }
    showMoreButton.style.display = 'inline-block';
    closeButton.style.display = 'none';
  });
});
