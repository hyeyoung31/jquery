$(function(){
  $(".youtube").colorbox({iframe:true, innerWidth:"85%", innerHeight:"70%"});
  
  $(".indicator li a").on('click',function(e){
    e.preventDefault();
    const num=$(this).parent().index();
    $(".indicator li").removeClass("on");
    $(".indicator li").eq(num).addClass("on");
    $("#slider01 a>li>img").stop().fadeOut();
    $("#slider01 a>li>img").eq(num).fadeIn();
  });

  $("#slider01").each(function(){
    let num = 0;
    setInterval(function(){
        num++;
        if(num>=3)num=0;
        $("#slider01 a img").stop().fadeOut();
        $("#slider01 a img").eq(num).fadeIn();
        $(".indicator li").removeClass("on");
  $(".indicator li").eq(num).addClass("on");
    },5000);

});

});