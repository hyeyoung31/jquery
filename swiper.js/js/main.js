$(function(){
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	    // autoplay: {
		// 	delay:3000,
		// }
		// ,
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  type: 'bullets',
		  clickable:true
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	  });
	// 매서드 프로퍼티
	// swiper.slideNext(speed, runCallbacks)  runCallbacks는 다른일 시키고 싶으면 여기에
	$('#prev').click(function(){
      swiper.slidePrev();
	});
	$('#next').click(function(){
      swiper.slideNext();
	});

	// swiper.slideTo(index, speed, runCallbacks)
    
	$('.pager span').click(function(){
      swiper.slideTo($(this).index());
	});
});//document ready jquery 