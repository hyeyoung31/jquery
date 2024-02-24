$(function () {
	var tabAnchor = $('.tabs-nav li'),
		tabPanel = $('.tabs-panel');
	
	//링크를 클릭하면 할일
	tabAnchor.click(function(e){
	 e.preventDefault();
 
	//방법1. 다 제거하고 선택요소에  active 
	// li 가 아닌 자식요소 a에 active를 붙여야함 
	//  tabAnchor.find('a').removeClass('active'); 
	//  $(this).find(a).addClass('active'); 

    //방법2. 선택요소에 active 붙이고, siblings(this에다가 이어서 적용)active제거
	$(this).find('a').addClass('active');
	$(this).siblings().find('a').removeClass('active');

	// display:none 해도 되지만 제이커리에는 show(), hide()가 있음
	tabPanel.hide();

    // 선택한 요소의 index번호 호출 : index()/ eq()와 함께 적음
	var $targetIdx = $(this).index();
	console.log($targetIdx);
    tabPanel.eq($targetIdx).show();

});

	//  열자마자 강제로 첫번째에 active.
	// .trigger 방아쇠를 당기다
	tabAnchor.eq(0).trigger('click');
});

