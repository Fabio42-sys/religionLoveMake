const prev = document.getElementById('prev');
const forw = document.getElementById('forw');
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

function scrollToSlide(index) {
    const slideWidth = slides[0].offsetWidth + 10; // 10px do gap
    slider.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
    });
}

forw.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    scrollToSlide(slideIndex);
});

prev.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    scrollToSlide(slideIndex);
});
