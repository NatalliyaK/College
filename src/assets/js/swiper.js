new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      375: {
        slidesPerView: 1,
      },
    },
});