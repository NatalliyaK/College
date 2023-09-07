new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,


    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,

        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,

        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,

        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new Swiper('.slider-photo', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})