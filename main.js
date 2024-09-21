let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentSlide += direction;
    showSlides();
}

setInterval(() => {
    currentSlide++;
    showSlides();
}, 3000);