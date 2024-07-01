var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

document.addEventListener("DOMContentLoaded", (event) => {
  const imageFolder = "assets/images/";
  const imageCount = 6; // Número de imágenes en la carpeta
  const offers = [];

  for (let i = 1; i <= imageCount; i++) {
    offers.push({
      src: `${imageFolder}offer-${i}.png`,
      alt: `offer-${i}`,
    });
  }

  const swiperWrapper = document.querySelector(".swiper-wrapper");

  offers.forEach((offer) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    const img = document.createElement("img");
    img.src = offer.src;
    img.alt = offer.alt;

    swiperSlide.appendChild(img);
    swiperWrapper.appendChild(swiperSlide);
  });

  var swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
