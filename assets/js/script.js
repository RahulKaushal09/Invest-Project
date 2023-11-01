$('.contact-us-button').click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    console.log($("#contact-us-fillups").scrollTop());
    return false;
});
$('.contact-us-button-nav').click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, 1500);
    console.log($("#contact-us-fillups").scrollTop());
    return false;
});
$(document).ready(function () {
    new WOW({ mobile: false }).init();
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('.navbar').removeClass('transparent').addClass('brown');
        } else {
            $('.navbar').removeClass('brown').addClass('transparent');
        }
    });
});