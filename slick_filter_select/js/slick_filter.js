$(function(){
    $('.slider').slick({
        autoplay: true,
        infinity: true,
        slidesToShow:3,
        slidesToScroll:1, 
        dots: true,
        responsive: [   
            {
                breakpoint:800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
    });

    $("select.test").on("change",function(){
      const ab=$(this).val();
      slideTarget( ab.substr(4,1) );   

      function slideTarget(n){
        if (n==0) {
            $(".slider").slick("slickUnfilter");
        }else if(n==1){
            $(".slider").slick("slickUnfilter");
          $(".slider").slick("slickFilter", $(".slider li").filter(".aaa"));   
        }else if(n==2){
            $(".slider").slick("slickUnfilter");
            $(".slider").slick("slickFilter", $(".slider li").filter(".bbb"));
        }else{
            $(".slider").slick("slickUnfilter");
            $(".slider").slick("slickFilter", $(".slider li").filter(".ccc"));    
        }
       }
    });
});