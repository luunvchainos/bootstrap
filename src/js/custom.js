$(function () {
    $('.menu_trigger').click(function () {
        $('body').toggleClass('appeared');
    });
    $('.sidebar_close').click(function () {
        $('body').removeClass('appeared');
    });
});
