$(function () {

    const subTabNav = $(".sub_tab_nav a"); // 서브 탭 앵커 태그
    const tabNav = $(".tab_nav a"); // 메인 탭 앵커 태그
    const tabNavLi = $('.tab_nav li'); // 메인 탭 리스트
    
    // 서브 탭 클릭 이벤트 핸들러
    subTabNav.on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
    

        
        
        // 해당 서브 탭 활성화
        $(target).addClass("active").siblings('.active').removeClass("active");
        $(this).closest('li').addClass("active").siblings().removeClass("active");
    });
    
    // 메인 탭 클릭 이벤트 핸들러
    tabNav.on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
    
        // 해당 메인 탭 활성화
    
        $(this).closest('li').addClass("active").siblings().removeClass("active");
        // $(this).parent().addClass("active").siblings().removeClass("active");
        $(target).addClass("active").siblings('.active').removeClass("active");
    
        // 서브 탭 유지 또는 첫 번째 서브 탭 활성화
        const subTabActive = $(target).find('.sub_tab_nav li.active');

        if (!subTabActive.length) {
            $(target).find('.sub_tab_nav li:first-child a').trigger('click');
        } else {
            subTabActive.find('a').trigger('click');
        }
    });
    
    // 페이지 로드 시 첫 번째 탭 활성화
    const mainTabActive = tabNavLi.filter('.active');
    if (!mainTabActive.length) {
        tabNavLi.first().find('a').trigger('click');
    } else {
        mainTabActive.find('a').trigger('click');
    }

});