$(function(){

	//페이지 로딩 시 제일 상단으로 스크롤 이동
	$("body,html").stop().animate({"scrollTop":0},1500,"swing");			

	var $bnnNum=0;

	$(".prev").click(function(){
		if($bnnNum<=0) return false;
		$bnnNum--;
			$book_w=$("#main_image").width();
			$("#main_image ul").animate({left:-$book_w*$bnnNum},500,function(){
					$("#book_roll img").attr("src","image/state_out.png");
					$("#book_roll img").eq($bnnNum).attr("src","image/state_over.png");	
			});
		
	});
	$(".next").click(function(){
		if($bnnNum>=3) return false;
		$bnnNum++;
			$book_w=$("#main_image").width();
			$("#main_image ul").animate({left:-$book_w*$bnnNum},500,function(){
				$("#book_roll img").attr("src","image/state_out.png");
				$("#book_roll img").eq($bnnNum).attr("src","image/state_over.png");	
			});				
	});


	
		$("#book_roll li a").click(function() {
					var strName = ( $(this).parent().attr("id") );
						slideTarget( strName.substr(3,1) );   
						return false;
				});					
				
					function  slideTarget(n){
						var pos = Number( n ) * - 100+'%';
						$("#main_image ul").animate({left:pos},500,
						function(){
							$("#book_roll img").attr("src","image/state_out.png");
								$("#book_roll img").eq(n).attr("src","image/state_over.png");	
						});
					};

				
					
	var btnNum=0;
	setInterval(function(){ 
	btnNum++;
		if(btnNum>=4) btnNum=0;
				$("#book_roll li a").eq(btnNum).trigger("click")
	},3000);



  $( ".cross" ).hide();

$( ".hamburger" ).click(function() {
	 $(".menu").animate({marginLeft:"200px"}, 300);
$( ".hamburger" ).hide();
$( ".cross" ).show();
});

/*�޴� ������*/
$(".menu >ul >li> a").click(function(){

		if($(this).next().is(":visible"))
		{
			$(this).next().stop().slideUp(500);
			$(this).children("img").attr("src","img/arrow-down.png");
		}else{

	$(".sub").stop().slideUp(500);
	$(".menu >ul >li> a").children("img").attr("src","img/arrow-down.png");
	$(this).next().stop().slideDown(500);
	$(this).children("img").attr("src","img/arrow-up.png");
		};	
   });





/*���*/

//$("#modal").addClass("active");
//});

$( ".cross" ).click(function() {
	 $(".menu").animate({marginLeft:"0px"}, 300);
$( ".cross" ).hide();
$( ".hamburger" ).show();
$("#modal").removeClass("active");
});





 
// $(".sub>li:last-child").click(function(){
    // $(".sub").hide();
// });

// bxSlider 플러그인
var mySlider=$("#slide_banner").bxSlider({
mode:"horizontal",   // 가로 수평으로 슬라이드 됩니다.
speed:500,              // 이동 속도를 설정합니다.
pager:false,            // 현재 위치 페이징 표시 여부 설정.
moveSlides:1,         // 슬라이드 이동시 갯수 설정.
slideWidth:180,        // 슬라이드 마다 너비 설정.
minSlides:1,           // 최소 노출 개수를 설정합니다.
maxSlides:1,          // 최대 노출 개수를 설정합니다.
slideMargin:10,      // 슬라이드간의 간격을 설정합니다.
auto:true,             // 자동으로 흐를지 설정합니다.
autoHover:true,    // 마우스 오버시 정시킬지 설정합니다.
controls:false       //  이전 다음 버튼 노출 여부 설정합니다.
 }); 

//이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
$("#prevBtn").on("click",function(){
    mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동됩니다.
    return false; //<a>에 링크를 차단합니다.
   });
//다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
   $("#nextBtn").on("click",function(){
    mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동됩니다.
    return false;
   });


    
   
   
/*#(해시)가 있는 위치 스크롤부분 -> jquery.scrollTo.min.js 플러그인*/
$('.menu ul a').click(function(e){		
	$.scrollTo(this.hash || 0, 1500); 
	//#(해시)가 있는 위치, 즉 클릭한 해시값을 갖는 섹션으로 스크롤함
	e.preventDefault();		
});			
/*해시 스크롤 종료*/	


/*header 의 로고를 클릭하면 smooth 하게 TOP으로 이동*/
$('header h2 a').click(function(){
	$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	  });
/*TOP으로 이동 종료*/




/*하단의 리스트*/	
	$("#bot > p").click(function(){

		if($(this).next().is(":visible"))
		{
			$(this).next().stop().slideUp(500);
			$(this).children("img").attr("src","img/arrow-down.png");
		}else{

	$(".list").stop().slideUp(500);
	$("#bot > p").children("img").attr("src","img/arrow-down.png");
	$(this).next().stop().slideDown(500);
	$(this).children("img").attr("src","img/arrow-up.png");
		};
	
});


});