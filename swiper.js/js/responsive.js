$(function(){


    var swiper = new Swiper('.multiple', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 7,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1025: {
      slidesPerView: 10,
      spaceBetween: 40
    }
  }

    });

    $('#prev').click(function(){
        swiper.slidePrev();
    });
    
    $('#next').click(function(){
        swiper.slideNext();
    });
    

});//document ready jquery 