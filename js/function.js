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