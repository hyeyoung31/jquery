$(function () {
	var tabAnchor = $('.tabs-nav li a'),
		tabPanel = $('.tabs-panel');
	
	//링크를 클릭하면 할일
	tabAnchor.click(function(e){
	 e.preventDefault();

	 tabAnchor.removeClass('active'); //모두 빼고
	 $(this).addClass('active'); //그 요소만 추가
	 
	 //그 요소에만 active를 추가하고 나머지 요소에서 뺀다
    // this가 클릭당한 요소


	// 방법2 현재 먹지 않음. a가 li 에 싸여있어 형제 자매 없음x
	//  $(this).addClass('active').siblings().removeClass('active');

	// display:none 해도 되지만 제이커리에는 show(), hide()가 있음
	tabPanel.hide();

	// 제이커리 요소 선택방법
	// $('#work02').show();

	//제이커리 속성가져오기 attr
	var $target = $(this).attr('href');
	console.log($target);
	// 변수명에 따움표 쓰면 안됨
    $($target).show();
});

	
});

