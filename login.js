(function ($) {
    $(function () {
        $('.login_tab-list').click(function() {
            $(".active_login").removeClass('active_login');
            $(this).addClass('active_login');
        });
        $('.fa-search').click(function() {
            alert("Không có gì để tìm hết !");
        });
    });
})(jQuery);
function Open(e, tab) {
    for(var i = 0 ; i <$('.jslogin').length; i++) {
        $('.jslogin')[i].style.display = 'none';
    }
    $('.jslogin')[tab - 1].style.display = 'block';
}
