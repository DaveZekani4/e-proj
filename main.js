const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4, // Display 4 slides at a time
    spaceBetween: 10, // Spacing between the slides
    freeMode: true, // Enable freemode, allowing free scrolling
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // Adjust the number of slides on smaller screens
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  