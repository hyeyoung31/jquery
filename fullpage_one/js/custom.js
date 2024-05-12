$(document).ready(function(){
	//페이지 로딩 시 제일 상단으로 스크롤 이동
	$("body,html").stop().animate({"scrollTop":0},1500,"swing");	

	
	//변수 ht에 브라우저의 높이값을 저장
	const ht = $(window).height();	
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").height(ht);
	
	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		const ht = $(window).height();	
		$("section").height(ht);
	});	
	
    $("#menu li").on("click",function(){
        const ht=$(window).height();
        const i=$(this).index();
        const nowTop = i * ht;
      $("html, body").stop().animate({"scrollTop":nowTop},1400);         
    });

	$(window).on("scroll",function(){	
        const ht1=$(window).height();
        const scroll = $(window).scrollTop();
        for(let i=0; i<4;i++){
			if(scroll>=ht1*i && scroll< ht1*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");
			};					
		}
    });
    $("section").on("mousewheel",function(event,delta){    
	//마우스 휠을 올렸을때	
    if (delta > 0) {  
//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
         const prev = $(this).prev().offset().top;
         //문서 전체를 prev에 저장된 위치로 이동
        // $("html,body").stop().animate({"scrollTop":prev},1400,"easeOutBounce");
         $("html,body").stop().animate({"scrollTop":prev},1400);
         
    //마우스 휠을 내렸을때	 
      }else if (delta < 0) {  
 //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
         const next = $(this).next().offset().top;
         //문서 전체를 next에 저장된 위치로 이동
         //$("html,body").stop().animate({"scrollTop":next},1400,"easeOutBounce");         
   $("html,body").stop().animate({"scrollTop":next},1400);   			 
      }
    });


});















