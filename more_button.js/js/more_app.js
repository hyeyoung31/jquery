$(function(){  		
    size_li = $('#box li').size();
    win=$(window).width();
    More();
    function More(){
        if(win>=1200){
          x=4;
          $('#box li:lt('+x+')').show();

                $('.more .btn').click(function(){
                    x= (x+4 <= size_li) ? x+4 : size_li;
                $('#box li:lt('+x+')').show();
                });

        }else if(win>640){
            x=3;
            $('#box li:lt('+x+')').show();
         
                $('.more .btn').click(function () {
                    x= (x+3 <= size_li) ? x+3 : size_li;
                    $('#box li:lt('+x+')').show();
                });
        }else{
            x=2;
            $('#box li:lt('+x+')').show();
         
                $('.more .btn').click(function () {
                    x= (x+2 <= size_li) ? x+2 : size_li;
                    $('#box li:lt('+x+')').show();
                });   
        } 

        $(window).on("resize",function(){
            location.reload(true)
         // location.reload();
           let win=$(window).width();
           More();
       });
    } // function 종료

});














