// Get all the sliders
const multicolumnDesktopSwiper = document.querySelectorAll('.multicolumn-swiper-desktop');

multicolumnDesktopSwiper.forEach(swiperEl => {

  const desktopCount = swiperEl.getAttribute('data-desktop-column-count');
  const mobileCount = swiperEl.getAttribute('data-mobile-column-count');

  const swiper = new Swiper(swiperEl, {    
    slidesPerView: mobileCount,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 640px
      750: {
        slidesPerView: desktopCount,
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
    }
  });

});

// Get all the sliders
const multicolumnMobileSwiper = document.querySelectorAll('.multicolumn-swiper-mobile');

multicolumnMobileSwiper.forEach(swiperEl => {

  const mobileCount = swiperEl.getAttribute('data-mobile-column-count');

  const swiper = new Swiper(swiperEl, {
    slidesPerView: mobileCount,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

});