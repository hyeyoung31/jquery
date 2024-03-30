$(function () {
    $('.page-header').each(function () {   
        const $window = $(window),
        header = $(this), 
        headerClone = header.contents().clone();
        headerCloneContainer = $('<div class="page-header-clone"></div>');
        threshold =header.offset().top + header.outerHeight();
        // outerHeight() : margin, padding, border 값을 포함한 높이값
        headerCloneContainer.append(headerClone);
        headerCloneContainer.appendTo('body');

        $window.on('scroll', function () {
            if ($window.scrollTop() > threshold) {
                headerCloneContainer.addClass('visible');			 
         }else {
            headerCloneContainer.removeClass('visible');
           }
        });
    });
});

