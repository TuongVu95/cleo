const fnHome = () => {
    if($('.slide').length){
    var swiper = new Swiper(".slide", {
        slidesPerView: 4,
        spaceBetween: 32,
        slidesPerGroup: 4,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
}
fnHome();


const introduce = (params) => {
    if($('.js-banner').length){
        var swiper = new Swiper(".js-banner", {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
    }
}
introduce();

const service = (params) => {
    if($('.slide-banner').length){
        var swiper = new Swiper(".slide-banner", {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
    }
}
service();

const product = (params) => {
    if($('.js-product-slide').length){
        var swiper = new Swiper(".js-product-slide", {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
              nextEl: ".product-slide .swiper-button-next",
              prevEl: ".product-slide .swiper-button-prev",
            },
          });
    }
}
product();