$(document).ready(function() {
    // popup newsletter
    $('.overlay-newsletter, .newsletter').hide();
    $('.overlay-newsletter, .newsletter a').click(function() {
        $('.newsletter, .overlay-newsletter').addClass('hide-popup');
    });

    // var popup = setInterval(function() {
    //     $('.newsletter, .overlay-newsletter').addClass('hide-popup');
    // }, 5000);
});