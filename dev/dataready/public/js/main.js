var $screenSm = 1024,
    $screenMd = 1600;



function onepage_scrollInit() {
    $('.wrapper').onepage_scroll({
        sectionContainer: ".section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 800,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {
            location.hash = $('.section').eq(index - 1).data('id');
        },  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {

        },   // This option accepts a callback function. The function will be called after the page moves.
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });
}

$(function () {
    $(window).on('resize.onepage_scrollInit', function () {
        if (Modernizr.mq('(max-width: ' + ($screenMd - 1) + 'px)')){
            $('.section_services_3, .section_services_4').show().addClass('section');
        }
        else{
            $('.section_services_3, .section_services_4').hide().removeClass('section');
        }
        onepage_scrollInit();
        $('.wrapper').moveTo($('[data-id="' + location.hash.split('#')[1] + '"]').data('index'));
    }).trigger('resize.onepage_scrollInit');
});
$(function () {
    $(window).on('resize.replaceMenu', function () {
        if (Modernizr.mq('(max-width: ' + ($screenMd - 1) + 'px)')){
            $('.menu').appendTo('body');
        }
        else{
            $('.menu').appendTo('.menu-wrap');
        }
    }).trigger('resize.replaceMenu');

    $('body').on('click', '.toggle-menu', function (e) {
        e.preventDefault();
        $('.menu').toggleClass('menu_opened').fadeToggle(150);
    }).on('click', '.menu__btn', function (e) {
        $('.wrapper').moveTo($('[data-id="' + $(this).attr('href').split('#')[1] + '"]').data('index'));
        $('.menu').removeClass('menu_opened').fadeOut(800);
    });
});
$(function () {
    $('.main-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: false,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        responsive: [

        ]
    });
    $('.main-slider').on('touchmove', function (e) { console.log(34);
       $('.wrapper').trigger(e);
    });
});
$(function () {
    $('.slick-slider').on('touchmove', function (e) {
        e.stopPropagation();
    })
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJ3cmFwcGVyLmpzIiwibWVudS5qcyIsIm1haW4tc2xpZGVyLmpzIiwic2xpY2stc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJHNjcmVlblNtID0gMTAyNCxcbiAgICAkc2NyZWVuTWQgPSAxNjAwO1xuXG5cbiIsImZ1bmN0aW9uIG9uZXBhZ2Vfc2Nyb2xsSW5pdCgpIHtcbiAgICAkKCcud3JhcHBlcicpLm9uZXBhZ2Vfc2Nyb2xsKHtcbiAgICAgICAgc2VjdGlvbkNvbnRhaW5lcjogXCIuc2VjdGlvblwiLCAgICAgLy8gc2VjdGlvbkNvbnRhaW5lciBhY2NlcHRzIGFueSBraW5kIG9mIHNlbGVjdG9yIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gdXNlIHNlY3Rpb25cbiAgICAgICAgZWFzaW5nOiBcImVhc2VcIiwgICAgICAgICAgICAgICAgICAvLyBFYXNpbmcgb3B0aW9ucyBhY2NlcHRzIHRoZSBDU1MzIGVhc2luZyBhbmltYXRpb24gc3VjaCBcImVhc2VcIiwgXCJsaW5lYXJcIiwgXCJlYXNlLWluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiZWFzZS1vdXRcIiwgXCJlYXNlLWluLW91dFwiLCBvciBldmVuIGN1YmljIGJlemllciB2YWx1ZSBzdWNoIGFzIFwiY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC40MjAsIDEuMzEwKVwiXG4gICAgICAgIGFuaW1hdGlvblRpbWU6IDgwMCwgICAgICAgICAgICAgLy8gQW5pbWF0aW9uVGltZSBsZXQgeW91IGRlZmluZSBob3cgbG9uZyBlYWNoIHNlY3Rpb24gdGFrZXMgdG8gYW5pbWF0ZVxuICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLCAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIGVpdGhlciBzaG93IG9yIGhpZGUgdGhlIHBhZ2luYXRpb24uIFRvZ2dsZSB0cnVlIGZvciBzaG93LCBmYWxzZSBmb3IgaGlkZS5cbiAgICAgICAgdXBkYXRlVVJMOiBmYWxzZSwgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHRoaXMgdHJ1ZSBpZiB5b3Ugd2FudCB0aGUgVVJMIHRvIGJlIHVwZGF0ZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSB1c2VyIHNjcm9sbCB0byBlYWNoIHBhZ2UuXG4gICAgICAgIGJlZm9yZU1vdmU6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gJCgnLnNlY3Rpb24nKS5lcShpbmRleCAtIDEpLmRhdGEoJ2lkJyk7XG4gICAgICAgIH0sICAvLyBUaGlzIG9wdGlvbiBhY2NlcHRzIGEgY2FsbGJhY2sgZnVuY3Rpb24uIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHBhZ2UgbW92ZXMuXG4gICAgICAgIGFmdGVyTW92ZTogZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB9LCAgIC8vIFRoaXMgb3B0aW9uIGFjY2VwdHMgYSBjYWxsYmFjayBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRoZSBwYWdlIG1vdmVzLlxuICAgICAgICBsb29wOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIGhhdmUgdGhlIHBhZ2UgbG9vcCBiYWNrIHRvIHRoZSB0b3AvYm90dG9tIHdoZW4gdGhlIHVzZXIgbmF2aWdhdGVzIGF0IHVwL2Rvd24gb24gdGhlIGZpcnN0L2xhc3QgcGFnZS5cbiAgICAgICAga2V5Ym9hcmQ6IHRydWUsICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBhY3RpdmF0ZSB0aGUga2V5Ym9hcmQgY29udHJvbHNcbiAgICAgICAgcmVzcG9uc2l2ZUZhbGxiYWNrOiBmYWxzZSwgICAgICAgIC8vIFlvdSBjYW4gZmFsbGJhY2sgdG8gbm9ybWFsIHBhZ2Ugc2Nyb2xsIGJ5IGRlZmluaW5nIHRoZSB3aWR0aCBvZiB0aGUgYnJvd3NlciBpbiB3aGljaFxuICAgICAgICAvLyB5b3Ugd2FudCB0aGUgcmVzcG9uc2l2ZSBmYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQuIEZvciBleGFtcGxlLCBzZXQgdGhpcyB0byA2MDAgYW5kIHdoZW5ldmVyXG4gICAgICAgIC8vIHRoZSBicm93c2VyJ3Mgd2lkdGggaXMgbGVzcyB0aGFuIDYwMCwgdGhlIGZhbGxiYWNrIHdpbGwga2ljayBpbi5cbiAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIgICAgICAgICAgICAvLyBZb3UgY2FuIG5vdyBkZWZpbmUgdGhlIGRpcmVjdGlvbiBvZiB0aGUgT25lIFBhZ2UgU2Nyb2xsIGFuaW1hdGlvbi4gT3B0aW9ucyBhdmFpbGFibGUgYXJlIFwidmVydGljYWxcIiBhbmQgXCJob3Jpem9udGFsXCIuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwidmVydGljYWxcIi5cbiAgICB9KTtcbn1cblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUub25lcGFnZV9zY3JvbGxJbml0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoTW9kZXJuaXpyLm1xKCcobWF4LXdpZHRoOiAnICsgKCRzY3JlZW5NZCAtIDEpICsgJ3B4KScpKXtcbiAgICAgICAgICAgICQoJy5zZWN0aW9uX3NlcnZpY2VzXzMsIC5zZWN0aW9uX3NlcnZpY2VzXzQnKS5zaG93KCkuYWRkQ2xhc3MoJ3NlY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgJCgnLnNlY3Rpb25fc2VydmljZXNfMywgLnNlY3Rpb25fc2VydmljZXNfNCcpLmhpZGUoKS5yZW1vdmVDbGFzcygnc2VjdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIG9uZXBhZ2Vfc2Nyb2xsSW5pdCgpO1xuICAgICAgICAkKCcud3JhcHBlcicpLm1vdmVUbygkKCdbZGF0YS1pZD1cIicgKyBsb2NhdGlvbi5oYXNoLnNwbGl0KCcjJylbMV0gKyAnXCJdJykuZGF0YSgnaW5kZXgnKSk7XG4gICAgfSkudHJpZ2dlcigncmVzaXplLm9uZXBhZ2Vfc2Nyb2xsSW5pdCcpO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUucmVwbGFjZU1lbnUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChNb2Rlcm5penIubXEoJyhtYXgtd2lkdGg6ICcgKyAoJHNjcmVlbk1kIC0gMSkgKyAncHgpJykpe1xuICAgICAgICAgICAgJCgnLm1lbnUnKS5hcHBlbmRUbygnYm9keScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAkKCcubWVudScpLmFwcGVuZFRvKCcubWVudS13cmFwJyk7XG4gICAgICAgIH1cbiAgICB9KS50cmlnZ2VyKCdyZXNpemUucmVwbGFjZU1lbnUnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnRvZ2dsZS1tZW51JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcubWVudScpLnRvZ2dsZUNsYXNzKCdtZW51X29wZW5lZCcpLmZhZGVUb2dnbGUoMTUwKTtcbiAgICB9KS5vbignY2xpY2snLCAnLm1lbnVfX2J0bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQoJy53cmFwcGVyJykubW92ZVRvKCQoJ1tkYXRhLWlkPVwiJyArICQodGhpcykuYXR0cignaHJlZicpLnNwbGl0KCcjJylbMV0gKyAnXCJdJykuZGF0YSgnaW5kZXgnKSk7XG4gICAgICAgICQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ21lbnVfb3BlbmVkJykuZmFkZU91dCg4MDApO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm1haW4tc2xpZGVyJykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JyxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICByZXNwb25zaXZlOiBbXG5cbiAgICAgICAgXVxuICAgIH0pO1xuICAgICQoJy5tYWluLXNsaWRlcicpLm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZSkgeyBjb25zb2xlLmxvZygzNCk7XG4gICAgICAgJCgnLndyYXBwZXInKS50cmlnZ2VyKGUpO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnNsaWNrLXNsaWRlcicpLm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG59KTsiXX0=
