$(function(){
    $('.main').slick({  
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,   //한 화면에 보여줄 아이템수
        slidesToScroll: 1, // 한번에 슬라이드 시킬 아이템수 
        responsive: [
            {
                breakpoint: 1024,   //미만
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
             },
             {
                breakpoint: 600,   // 600 미만
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,     // 480 미만
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
    });
});