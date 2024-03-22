$(function() {
  var $window = $(window);
  var $slideAd = $('#slideAd');
  var endZone = $('#footer').offset().top - $window.height() - 500;

  $window.on('scroll', function() {

    if (endZone < $window.scrollTop()) {
      $slideAd.animate({ 'right': '0px' }, 250);
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
    }

  });

  /*
    사용자가 페이지를 아래로 스크롤하여 페이지 하단 500px 위치까지 내려오면 광고 창이 슬라이드되며 보임
  */
  
  
});