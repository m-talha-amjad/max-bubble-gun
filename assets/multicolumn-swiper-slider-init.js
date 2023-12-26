// Get all the sliders
{
const multicolumnDesktopSwiper = document.querySelectorAll('.multicolumn-swiper-desktop');

multicolumnDesktopSwiper.forEach(swiperEl => {

  const desktopCount = swiperEl.querySelector(".swiper-wrapper").getAttribute('data-desktop-column-count');
  const mobileCount = swiperEl.querySelector(".swiper-wrapper").getAttribute('data-mobile-column-count');

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
      clickable: true,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        var out = ''
        for (i = 1; i < total+1; i++) {
          if (i == current) {
            out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'"></span>';
          }
          else {
            out = out + '<span class="swiper-pagination-bullet" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'"></span>';
          }
        };
        return out;
      },
    }
  });
  swiper.el.parentElement.querySelector(".swiper-button-next-custom").addEventListener('click',
  () => swiper.slideNext());
  swiper.el.parentElement.querySelector(".swiper-button-prev-custom").addEventListener('click',
  () => swiper.slidePrev());

});

// Get all the sliders
const multicolumnMobileSwiper = document.querySelectorAll('.multicolumn-swiper-mobile');

multicolumnMobileSwiper.forEach(swiperEl => {
  if(window.innerWidth > 750) {

    const slides = swiperEl.querySelectorAll('swiper-slide');

    const desktopCount = swiperEl.querySelector(".swiper-wrapper").getAttribute('data-desktop-column-count');

    if(slides.length === Number(desktopCount)) {
      return; 
    }

  }
  const desktopCount = swiperEl.querySelector(".swiper-wrapper").getAttribute('data-desktop-column-count');
  const mobileCount = swiperEl.querySelector(".swiper-wrapper").getAttribute('data-mobile-column-count');
  const swiper = new Swiper(swiperEl, {
    slidesPerView: Number(mobileCount),
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
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    }
  });

});
}