$(".comments").slick({
	dots: true,
	autoplay: true
});

$(document).ready(function(){
    $('.btn-link').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000);
        }
        return false; 
    });
});