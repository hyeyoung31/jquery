	let lastScrollTop = 0;
	let delta = 5;
	const fixBox = document.querySelector('.bottomNav');
	const fixBoxHeight = fixBox.offsetHeight;
    let didScroll;
	//스크롤 이벤트 감지
	window.onscroll = function(e) {
		didScroll = true;
	};
//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
	setInterval(function(){
		if(didScroll){
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled(){
		let nowScrollTop = window.scrollY;
		if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
			return;
		}
		if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
			//Scroll down
			fixBox.classList.remove('show');
		}else{
			if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
				//Scroll up
				fixBox.classList.add('show');
			}
		}
		lastScrollTop = nowScrollTop;
	}	


/*
clientHeight 는 요소의 내부 높이. 패딩 값은 포함되며, 스크롤바, 테두리, 마진은 제외.
offsetHeight 는 요소의 높이. 패딩, 스크롤 바, 테두리(Border)가 포함.마진은 제외.
scrollHeight  는 요소에 들어있는 컨텐츠의 전체 높이. 패딩과 테두리가 포함.
마진은 제외.
*/