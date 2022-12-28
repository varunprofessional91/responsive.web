"use strict"

// slideshow function start
let slides = document.querySelectorAll('#fourthSubSectionImagesSlideShow .fourthSubSectionImageSlidesList');
let currentSlide = 0;

setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].className = 'fourthSubSectionImageSlidesList';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'fourthSubSectionImageSlidesList fourthSubSectionFirstSlideShowImage';
}
//slideshow function end