let currentImage = 0;
let totalImages = 0;

export function imageCarousel(id) {
  const carousel = document.getElementById(id);
  const images = carousel.querySelectorAll('.carouselImage');

  let counter = 0;
  images.forEach(image => {
    if (counter !== 0) {
      image.classList.add('hidden');
    }
    counter++;
  });

  totalImages = counter - 1;

  createNavigation(id);
  createDots(id);

  let autoAdvance = setInterval(() =>
    nextImage(id), 5000);

  carousel.addEventListener('mouseenter', () =>
  {
    clearInterval(autoAdvance);
  });

  carousel.addEventListener('mouseleave', () => {
    autoAdvance = setInterval(() =>
      nextImage(id), 5000);
  })
}

function createNavigation(id) {
  const carousel = document.getElementById(id);
  let previousDiv = document.createElement('div');
  previousDiv.classList.add('previous', 'navigation');
  previousDiv.innerHTML = '<';

  previousDiv.addEventListener('click', () => {
    previousImage(id);
  })

  carousel.prepend(previousDiv);

  let nextDiv = document.createElement('div');
  nextDiv.classList.add('next', 'navigation');
  nextDiv.innerHTML = '>';

  nextDiv.addEventListener('click', () => {
    nextImage(id);
  })

  carousel.appendChild(nextDiv);
}

function createDots(id) {
  const carousel = document.getElementById(id);

  let dotNavigation = document.createElement('div');
  dotNavigation.classList.add('dotNavigation');

  carousel.appendChild(dotNavigation);

  for (let i = 0; i <= totalImages; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      goToImage(id, i)
    });
    dotNavigation.appendChild(dot);
  }
  setNavigationDotColour(id, currentImage);
}

function nextImage(id) {
  if (currentImage !== totalImages) {
    goToImage(id, ++currentImage);
  }
  else {
    goToImage(id, 0);
  }
}

function previousImage(id) {
  if (currentImage !== 0) {
    goToImage(id, --currentImage);
  }
  else {
    goToImage(id, totalImages);

  }
}

function goToImage(id, index) {

  const carousel = document.getElementById(id);
  const images = carousel.querySelectorAll('.carouselImage');

  let counter = 0;
  images.forEach(image => {
    if (counter !== index) {
      image.classList.add('hidden');
    }
    else {
      image.classList.remove('hidden');
    }
    counter++;
  })

  currentImage = index;
  setNavigationDotColour(id, index);
}

function setNavigationDotColour(id, index) {
  const carousel = document.getElementById(id);
  const dots = carousel.querySelectorAll('.dot');

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}