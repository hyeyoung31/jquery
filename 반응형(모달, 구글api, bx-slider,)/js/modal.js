$(function(){
    function modalOn(){
        $(".modal_back").addClass("back_on");
      //  $("body").addClass("body_lock");   // body 스크롤안됨
    }
    function modalOff(){
        $(".modal_back").removeClass("back_on");
      //  $("body").removeClass("body_lock");   // body 스크롤안됨
    }
    $(".hamburger").click(function(){
        modalOn();
    });
    $(".cross").click(function(){
        modalOff();
    });
    
    
});