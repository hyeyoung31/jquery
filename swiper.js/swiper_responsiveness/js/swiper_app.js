$(function(){
    const  swiper=new Swiper('.menu>.swiper-container', { 
        slidesPerView: 5,
        loop: true,
        spaceBetween: 0,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        autoplay: 2000, 
        autoplayDisableOnInteraction: false,
        breakpoints: {  
            1049: {
                slidesPerView: 4,
                spaceBetween: 0,
                loop: true,
                autoplay: 2000,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                },
             900: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    loop: true,
                    autoplay: 2000,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                },
            640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    loop: true,
                    autoplay: 2000,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                },
           420: {   
                    slidesPerView: 1,       
                    spaceBetween: 0,     
                    loop: true,
                    autoplay: 2000,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                 } 
            }
      });	 
});