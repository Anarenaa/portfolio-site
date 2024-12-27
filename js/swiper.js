const sliders = document.querySelectorAll('.swiper');

sliders.forEach((el) => {
    let swiper = new Swiper(el, {
    loop: true,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    autoplay: {
      delay: 2000,
    },
    slideToClickedSlide: false,
    centeredSlides: false,
    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      },
      slideChange: function () {
        document.querySelectorAll('.swiper-slide').forEach((slide) => {
          slide.removeAttribute('title');
        });

        const elements = document.querySelectorAll('.swiper-slide-active');
        elements.forEach((element) => {
          element.setAttribute('title', "Клацніть два рази для перегляду фотографії");
        });
      }
    },
    
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        slideToClickedSlide: true,
        navigation: false,
      }
    }
  });
});