(function ($) {
    $(function() {
        $('.jslist').click(function() {
            $('.active').removeClass('active');
            $(this).addClass('active'); 
        });
    });
})(jQuery);
function OpenTab(e, tab) {
    for(var i = 0 ; i <$('.jscontent').length; i++) {
        $('.jscontent')[i].style.display = "none";
    }
    $('.jscontent')[tab - 1].style.display = "block";
}

