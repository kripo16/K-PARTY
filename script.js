let slideIndex = 0;
const intervalTime = 1500; // Slide interval in milliseconds
let slideInterval;

function startSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

function nextSlide() {
    const carouselInner = document.querySelector('.carousel-inner');
    const screenshots = document.querySelectorAll('.screenshot');
    const totalScreenshots = screenshots.length;

    slideIndex++;
    if (slideIndex >= totalScreenshots) {
        slideIndex = 0;
    }

    const moveAmount = -slideIndex * screenshots[0].offsetWidth;
    carouselInner.style.transform = `translateX(${moveAmount}px)`;
}

function moveCarousel(n) {
    clearInterval(slideInterval);
    const carouselInner = document.querySelector('.carousel-inner');
    const screenshots = document.querySelectorAll('.screenshot');
    const totalScreenshots = screenshots.length;

    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = totalScreenshots - 1;
    }
    if (slideIndex >= totalScreenshots) {
        slideIndex = 0;
    }

    const moveAmount = -slideIndex * screenshots[0].offsetWidth;
    carouselInner.style.transform = `translateX(${moveAmount}px)`;

    // Restart slide interval
    startSlide();
}

// Start carousel
startSlide();
