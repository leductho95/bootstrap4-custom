$(document).ready(function() {
    // popup newsletter
    $('.overlay-newsletter, .newsletter').hide();

    // var popup = setInterval(function() {
    //     $('.overlay-newsletter, .newsletter').show();
    // }, 2500);

    $('.overlay-newsletter, .newsletter a').click(function() {
        $('.newsletter, .overlay-newsletter').addClass('hide-popup');
    });

    $('.active-cart').click(function() {
        $('.header-cart').toggleClass('show-cart');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        navText: ['<img src="images/arrow-left.png" alt="" />', '<img src="images/arrow-right.png" alt="" />'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        }
    });

    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
    });

    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
    })


    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })



});