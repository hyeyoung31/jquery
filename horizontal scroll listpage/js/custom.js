$(function(){
    const numAc =  $("article").size();
    const  widSec = 200*numAc;
    const widTotal = widSec+600; 

    $("section").width(widTotal);
    $("body").height(widSec);	

    $(window).on("scroll",function(){
        const scroll = $(this).scrollTop();		
        $("section").stop().animate({"left":-scroll},600);
    });

    $("article h2").on("click",function(e){
        e.preventDefault();
        const index = $(this).parent().index();
        const src = $(this).children("a").attr("href");	
        const posAc = 200*index;

        $("article").removeClass("on");		
        $(this).parent().addClass("on");
        $("article p img").attr({"src":""});
        $(this).siblings("p").children("img").attr({"src":src});	
        $("html,body").scrollTop(posAc);
    });    

    $("span").on("click",function(){
        $("article").removeClass("on");
      });
    
      $("#navi li").on("click",function(){
        const i = $(this).index();
        const posNavi =1000*i;	
        $("#navi li, article").removeClass();
        $(this).addClass("on");	
        $("html,body").scrollTop(posNavi);	
       });  

});















