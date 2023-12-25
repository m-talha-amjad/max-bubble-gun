const swiper = new Swiper('.multicolumn-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    750: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});