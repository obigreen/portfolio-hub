const instructorsSlider = document.querySelector('.instructors__slider');
const reviewsSlider = document.querySelector('.reviews__slider');
// Учитываем системную настройку пользователя «уменьшить движение».
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const canUseSwiper = typeof Swiper !== 'undefined';
if (instructorsSlider && canUseSwiper) {
    new Swiper(instructorsSlider, {
        initialSlide: 1,
        slidesPerView: 1,
        spaceBetween: -10,
        speed: reduceMotion ? 0 : 650,
        grabCursor: true,
        slideToClickedSlide: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        navigation: {
            prevEl: '.instructors__arrow--prev',
            nextEl: '.instructors__arrow--next',
        },
        breakpoints: {
            0: {
                spaceBetween: 16,
            },
            768: {
                spaceBetween: -10,
            },
        },
    });
}

if (reviewsSlider && canUseSwiper) {
    new Swiper(reviewsSlider, {
        initialSlide: 1,
        slidesPerView: 1,
        spaceBetween: -80,
        speed: reduceMotion ? 0 : 650,
        grabCursor: true,
        slideToClickedSlide: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        navigation: {
            prevEl: '.reviews__arrow--prev',
            nextEl: '.reviews__arrow--next',
        },
        breakpoints: {
            0: {
                spaceBetween: 18,
            },
            500: {
                spaceBetween: -50,
            },
            900: {
                spaceBetween: -80,
            },
        },
    });
}
