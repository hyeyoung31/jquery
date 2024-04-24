$(function(){ 
   const duration = 300;  
     // buttons1  1행  nth-child(n+k):nth-child(-n+m)   ~에서 ~까지
	 //n에는 음이 아닌 정수(0, 1, 2, 3, ···)가 차례대로 대입
     $("#buttons1 button:nth-child(-n+4)")
     .on("mouseover",function(){
         $(this).stop().animate({
             backgroundColor:"#ae5e9b",
             color:"#fff"
         },duration);
         })
      .on('mouseout', function(){
          $(this).stop(true).animate({
              backgroundColor: '#fff',
              color: '#ebc000'
          }, duration);
      });

      $("#buttons1 button:nth-child(n+5):nth-child(-n+8)")
      .on('mouseover', function(){
              $(this).stop(true).animate({
                  borderWidth: '12px',
                  color: '#ae5e9b'
              }, duration, 'easeOutSine');
          })
          .on('mouseout', function(){
              $(this).stop(true).animate({
                  borderWidth: '0px',
                  color: '#ebc000'
              }, duration, 'easeOutSine');
          }); 
 
          $("#buttons1 button:nth-child(n+9)")	
          .on('mouseover', function(){
            $(this).find('> span')
               .stop(true).animate({width: '100%'}, duration, 'easeOutQuad');
           })
          .on('mouseout', function(){
            $(this).find('> span')
             .stop(true).animate({width: '0%'}, duration, 'easeOutQuad');
            });

// buttons2 부분	             
$("#buttons2 button").each(function(index){
    const pos=index*40-40;
    $(this).css("top",pos);
 }) 
 .on('mouseover', function(){
    const $btn = $(this).stop(true).animate({
        backgroundColor: '#faee00',
        color: '#000'
        }, duration);
    $btn.find('img:first-child').stop(true).animate({opacity: 0}, duration);
    $btn.find('img:nth-child(2)').stop(true).animate({opacity: 1}, duration);
    })
        .on('mouseout', function(){
    const $btn = $(this).stop(true).animate({
        backgroundColor: '#fff',
        color: '#01b169',
    }, duration);
       $btn.find('img:first-child').stop(true).animate({opacity: 1}, duration);
       $btn.find('img:nth-child(2)').stop(true).animate({opacity: 0}, duration);
});		
 
});