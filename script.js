/*===============================================CHUYỂN TRANG======================================================*/
(function($) {
    $(function() {
        $('.slide').click(function() {
            $('.slide_active').removeClass('slide_active');
            $(this).addClass('slide_active');
        });
    });
})(jQuery);
function openTab(e, tab) {
    for(var i = 0; i < $(".section").length; i++) {
        $(".section")[i].style.display = 'none'
    }
    $(".section")[tab - 1].style.display = 'block';
}
function Slider(e, slide) {
    for(var i = 0; i < $(".chuyenslide").length; i++) {
        $(".chuyenslide")[i].style.display = 'none';
    }
    $(".chuyenslide")[slide - 1].style.display = 'block'
}
/*===============================================TRANG CHỦ======================================================*/

// Go to Home
// const backtotop = document.querySelector('.home');
// window.addEventListener("scroll", scroll);
// function scroll() {
//     if(window.pageYOffset > 300) {
//         backtotop.classList.add("active");
//     }
//     else {
//         backtotop.classList.remove("active");
//     }
// }

/*===============================================TRANG CHỦ======================================================*/
