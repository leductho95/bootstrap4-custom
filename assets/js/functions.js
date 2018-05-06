$(document).ready(function() {
    // popup newsletter

   	$('.overlay-newsletter').click(function() {
   		alert('click')
   		$(this).addClass('hide-popup');
   	});
    // var popup = setInterval(function(){
    // 	$('.overlay-newsletter, .newsletter').hide();
    // 	clearInterval(popup);
    // }, 3000);
});