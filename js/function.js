var $window = $(window), $width = $window.width();
var $desk = $width > 992;
const fnHome = () => {
    if($('.slide').length){
      if($desk){
        var swiper = new Swiper(".slide", {
          slidesPerView: 3,
          spaceBetween: 16,
          slidesPerGroup: 3,
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


    const navMobile = $('.nav-mb');
  const navClose = $('.js-nav-close'), mask = $('.js-mask');
  const menuMb = $('.js-menu-mb');

  menuMb.click(function(){
    navMobile.addClass('open');
    $('html,body').addClass('disable-scroll');
  });

  navClose.click(function(){
    navMobile.removeClass('open');
    $('html,body').removeClass('disable-scroll');
  });
}
fnHome();


const introduce = (params) => {
  const $video = $('.js-video');
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

const branch = (params) => {
    if($('.slide-partner').length){
        var swiper = new Swiper(".slide-partner", {
            slidesPerView: 2.5,
            spaceBetween: 32,
          });
    }
}
branch();