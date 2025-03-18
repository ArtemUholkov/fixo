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

  const placeholders = {
    en: {
      First_Name: 'Name',
      Email: 'Email*',
      Phone: '(XXX) XXX-XXXX',
      Project_Type: 'Kitchen, bathroom, other',
      Location: 'Location or ZIP Code',
      Budget: 'Budget',
      Project_Details: 'Project Details (Tell us about your remodeling needs)',
      Submit_Button: 'Get Started',
    },
    es: {
      First_Name: 'Nombre',
      Email: 'Correo Electrónico*',
      Phone: '(XXX) XXX-XXXX',
      Project_Type: 'Cocina, baño, otro',
      Location: 'Ubicación o Código Postal',
      Budget: 'Estimado',
      Project_Details: 'Detalles del Proyecto (Cuéntanos sobre tus necesidades de remodelación)',
      Submit_Button: 'Comenzar',
    },
  };

  function changeLanguage(lang) {
    body.classList.remove('lang-en', 'lang-es');
    body.classList.add(`lang-${lang}`);
    updatePlaceholders(lang);
    updateLanguageLink(lang);
  }

  function updatePlaceholders(lang) {
    document.getElementById('First_Name').placeholder = placeholders[lang].First_Name;
    document.getElementById('Email').placeholder = placeholders[lang].Email;
    document.getElementById('Phone').placeholder = placeholders[lang].Phone;
    document.getElementById('Project_Type').placeholder = placeholders[lang].Project_Type;
    document.getElementById('Location').placeholder = placeholders[lang].Location;
    document.getElementById('Budget').placeholder = placeholders[lang].Budget;
    document.getElementById('Project_Details').placeholder = placeholders[lang].Project_Details;

    // Update Submit Button Text
    document.querySelector('.formsubmit').value = placeholders[lang].Submit_Button;
  }

  // Update the language link URL with #en or #esp
  function updateLanguageLink(lang) {
    const currentUrl = window.location.href.split('#')[0]; // Get the base URL without the hash
    const hash = lang === 'es' ? 'esp' : lang; // Use 'esp' for Spanish instead of 'es'
    window.history.replaceState(null, '', `${currentUrl}#${hash}`);
  }

  // Set the language based on the URL fragment on page load
  function setLanguageFromURL() {
    const hash = window.location.hash.replace('#', ''); // Get the part after the hash
    if (hash === 'esp') {
      changeLanguage('es');
    } else if (hash === 'en') {
      changeLanguage('en');
    } else {
      changeLanguage('es'); // Default to Spanish if no valid language is found in the URL
    }
  }

  // Set the language based on the URL fragment when the page loads
  setLanguageFromURL();

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

const testiItems = document.querySelectorAll('.testi_item');
const arrowIcon = document.querySelector('.arrow-icon-scroll');

let itemWidth = getItemWidth(); // Dynamically detect width + gap
let maxScrollLeft = testiWrapper.scrollWidth - testiWrapper.clientWidth; // Max scroll position
let atEnd = false; // Flag to track if we hit the end

arrowIcon.addEventListener('click', () => {
  if (atEnd) {
    // If already at the end, reset to the start on next click
    testiWrapper.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
    atEnd = false; // Reset flag
    return;
  }

  // Calculate new scroll position
  let newScrollLeft = testiWrapper.scrollLeft + itemWidth;

  // If we are at the last possible scroll position, set the flag
  if (newScrollLeft >= maxScrollLeft) {
    testiWrapper.scrollTo({
      left: maxScrollLeft,
      behavior: 'smooth',
    });
    atEnd = true; // Mark that we are at the end
  } else {
    // Otherwise, continue scrolling
    testiWrapper.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  }
});

// Function to get item width dynamically based on screen size
function getItemWidth() {
  const computedStyle = window.getComputedStyle(testiWrapper);
  const gap = parseInt(computedStyle.getPropertyValue('gap'), 10) || 32; // Detect gap dynamically
  return testiItems[0].offsetWidth + gap;
}

// Update item width & max scroll dynamically on window resize
window.addEventListener('resize', () => {
  itemWidth = getItemWidth(); // Recalculate item width with correct gap
  maxScrollLeft = testiWrapper.scrollWidth - testiWrapper.clientWidth;
});
