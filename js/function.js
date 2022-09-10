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