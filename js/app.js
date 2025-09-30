document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger')
  const navBar = document.querySelector('.nav')

  if (burger && navBar) {
    burger.addEventListener('click', () => {
      navBar.classList.toggle('active')
    })
  }

  document.addEventListener('scroll', () => {
    const header = document.querySelector('.header')

    if (window.scrollY > 900) {
      header.classList.add('fixed')
    } else {
      header.classList.remove('fixed')
    }
  })

  const testimonialsSlider = document.querySelector('.testimonials__swiper')

  if (testimonialsSlider) {
    const testimonialsSwiper = new Swiper(testimonialsSlider, {
      pagination: {
        el: '.testimonials__pagination',
      },
    })
  }

  const ourSlider = document.querySelector('.our__swiper')

  if (ourSlider) {
    const ourSwiper = new Swiper(ourSlider, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.our__pagination',
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
      },

    })
  }




  const recentContainer = document.querySelector('.recent__gallery')

  if (recentContainer) {
    const mixer = mixitup(recentContainer, {
      load: {
        filter: '.design',
      },
      animation: {
        duration: 600,
        effects: 'fade scale(0.96)',
      }
    });
  }
})
