$(document).ready(function() {
	console.log('ok');
    // popup newsletter
    //$('.overlay-newsletter, .newsletter').hide();
    $('.overlay-newsletter, .newsletter a').click(function() {
        $('.newsletter, .overlay-newsletter').addClass('hide-popup');
    });

    $('.active-cart').click(function() {
        $('header-cart').addClass('header-active');

    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    // var popup = setInterval(function() {
    //     $('.newsletter, .overlay-newsletter').addClass('hide-popup');
    // }, 5000);
});