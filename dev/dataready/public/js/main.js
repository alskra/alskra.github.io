var $screenSm = 1024,
    $screenMd = 1300;



$(function () {
    if ($('.wrapper').length){
        var move = false;
        function updatePage() {
            var sect = $('[data-id="' + location.hash.split('#')[1] + '"]');
            if (location.hash == ''){
                $('.wrapper').moveTo(1);
            }
            else if (sect.length){
                if (Modernizr.mq('(min-width: ' + ($screenMd) + 'px)') && !sect.hasClass('section')){
                    sect = $('.section_services_2');
                }
                $('.wrapper').moveTo(sect.data('index'));
            }
        }
        $(window).on('resize.onepage_scrollInit', function () {
            if (Modernizr.mq('(min-width: ' + $screenMd + 'px)')){
                $('.section_services_3, .section_services_4').removeClass('section').hide();
            }
            else{
                $('.section_services_3, .section_services_4').addClass('section').show();
            }
            $('.section, .section_services_3, .section_services_4').removeData('index').removeAttr('data-index');
            $('.wrapper').onepage_scroll({
                sectionContainer: ".section",     // sectionContainer accepts any kind of selector in case you don't want to use section
                easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",// "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
                animationTime: 500,             // AnimationTime let you define how long each section takes to animate
                pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
                updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
                beforeMove: function(index) {
                    move = true;
                    location.hash = $('.section').eq(index - 1).data('id');
                    $('body').attr('data-page', $('.section').eq(index - 1).data('id'));
                },  // This option accepts a callback function. The function will be called before the page moves.
                afterMove: function(index) {
                    move = false;
                },   // This option accepts a callback function. The function will be called after the page moves.
                loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
                keyboard: true,                  // You can activate the keyboard controls
                responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                // the browser's width is less than 600, the fallback will kick in.
                direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
            });
            updatePage();
        }).on('popstate', function (e) {
            if (!move){
                updatePage();
            }
        }).triggerHandler('resize.onepage_scrollInit');

        $('body').on('click', '.onepage-pagination a', function (e) {
            e.preventDefault();
        });

        $('body').on('click', '.link_to-top', function (e) {
            e.preventDefault();
            $('.wrapper').moveTo(1);
        });
    }
});
$(function () {
    $(window).on('resize.replaceMenu', function () {
        if (Modernizr.mq('(min-width: ' + $screenMd + 'px)')){
            $('.menu').appendTo('.menu-wrap');
        }
        else{
            $('.menu').appendTo('body');
        }
    }).triggerHandler('resize.replaceMenu');

    $('body').on('click', '.toggle-menu', function (e) {
        e.preventDefault();
        $('.menu').toggleClass('menu_opened').fadeToggle(150);
    }).on('click', '.menu__btn', function (e) {
        $('.wrapper').moveTo($('[data-id="' + $(this).attr('href').split('#')[1] + '"]').data('index'));
        $('.menu').removeClass('menu_opened').fadeOut(500);
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
});
$(function () {
    $('.slick-slider').on('touchmove', function (e) {
        //e.stopPropagation();
    })
});
function correctDec2() {
    var item = $('.decoration_type_2');
    var title = item.closest('.service-item').find('.service-item__title');
    var d = title.offset().top
        - item.closest('.service-item').offset().top
        + parseFloat(title.css('line-height'))/2 + 7;
    item.css('margin-top', -99999 + Math.abs(d));
    setTimeout(function () {
        correctDec2();
    }, 100);
}
function correctDec5() {
    var item = $('.decoration_type_5');
    var title = item.closest('.service-item').find('.service-item__title');
    var d = title.offset().top
        - item.closest('.service-item').offset().top
        + parseFloat(title.css('line-height'))/2 + 7;
    item.css('margin-top', -14 + Math.abs(d));
    setTimeout(function () {
        correctDec5();
    }, 100);
}

$(function () {
    if ($('.decoration').length){
        //correctDec2();
        //correctDec5();
    }
});
function correctImg() {
    $('.service-item__img').each(function () {
        $(this).css('max-height', '').css('max-height', $(this).closest('.service-item__img-wrap').height());
    });
    setTimeout(function () {
        correctImg();
    }, 100);
}
$(function () {
    //correctImg();
});
$(function () {
    $('.gallery-slider-2 .slick-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        fade: false,
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
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: $screenSm - 1,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
});
function initPerfectScrollbar() {
    $('.ps-scroll:not(.ps-container)').each(function () {
        $(this).perfectScrollbar($(this).data('ps-scroll'));
    });
    $('.ps-scroll.ps-container').perfectScrollbar('update');
}
function reInitPerfectScrollbar() {
    initPerfectScrollbar();
    setTimeout(function () {
        reInitPerfectScrollbar();
    }, 100);
}
$(function () {
    reInitPerfectScrollbar();
    $('.ps-scroll').on('touchmove', function (e) {
        //e.stopPropagation();
    });
});
$.ikSelect.extendDefaults({autoWidth: false, ddFullWidth: false, dynamicWidth: false, extractLink: false, ddMaxHeight: 200, onShow: function (e){
    e.$el.siblings('.ik_select_link').addClass('ik_select_link_opened');
}, onHide: function (e){
    e.$el.siblings('.ik_select_link').removeClass('ik_select_link_opened');
    e.$el.ikSelect('redraw');
}, onInit: function (e) {
    e.$el.siblings('.ik_select_dropdown').find('.ik_select_list_inner').addClass('ps-scroll');
}});
function initSelect() {
    $('select.select:not(.select_has)').each(function(){
        $(this).ikSelect({customClass: $(this).attr('class')}).addClass('select_has');
    });
}
function reInitSelect() {
    initSelect();
    setTimeout(function () {
        reInitSelect();
    }, 100);
}
$(function () {
    reInitSelect();
});
$(function () {
    $.arcticmodal('setDefault', {
        closeOnOverlayClick: false,
        overlay: {
            css: {
                backgroundColor: '#1d1c2a',
                opacity: 0.96
            }
        },
        afterLoadingOnShow: function(data, el) {

        },
        afterClose: function () {
            setTimeout(function () {
                $('body').css({overflow: '', marginRight: ''});
            }, 100)
        }
    });

    $('body').on('click', '[data-toggle="modal-ajax"]', function(){
        var url = $(this).attr('href') || $(this).data('href');
        $.arcticmodal({
            type: 'ajax',
            url: url
        });
        return false;
    });
});
$(function () {
    $('.contacts-map').on('touchmove', function (e) {
        //e.stopPropagation();
    })
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJ3cmFwcGVyLmpzIiwibWVudS5qcyIsIm1haW4tc2xpZGVyLmpzIiwic2xpY2stc2xpZGVyLmpzIiwiZGVjb3JhdGlvbi5qcyIsInNlcnZpY2UtaXRlbS5qcyIsImdhbGxlcnktc2xpZGVyLTIuanMiLCJwcy1zY3JvbGwuanMiLCJzZWxlY3QuanMiLCJtb2RhbC5qcyIsImNvbnRhY3RzLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkc2NyZWVuU20gPSAxMDI0LFxuICAgICRzY3JlZW5NZCA9IDEzMDA7XG5cblxuIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQoJy53cmFwcGVyJykubGVuZ3RoKXtcbiAgICAgICAgdmFyIG1vdmUgPSBmYWxzZTtcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUGFnZSgpIHtcbiAgICAgICAgICAgIHZhciBzZWN0ID0gJCgnW2RhdGEtaWQ9XCInICsgbG9jYXRpb24uaGFzaC5zcGxpdCgnIycpWzFdICsgJ1wiXScpO1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhhc2ggPT0gJycpe1xuICAgICAgICAgICAgICAgICQoJy53cmFwcGVyJykubW92ZVRvKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VjdC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmIChNb2Rlcm5penIubXEoJyhtaW4td2lkdGg6ICcgKyAoJHNjcmVlbk1kKSArICdweCknKSAmJiAhc2VjdC5oYXNDbGFzcygnc2VjdGlvbicpKXtcbiAgICAgICAgICAgICAgICAgICAgc2VjdCA9ICQoJy5zZWN0aW9uX3NlcnZpY2VzXzInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCgnLndyYXBwZXInKS5tb3ZlVG8oc2VjdC5kYXRhKCdpbmRleCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5vbmVwYWdlX3Njcm9sbEluaXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoTW9kZXJuaXpyLm1xKCcobWluLXdpZHRoOiAnICsgJHNjcmVlbk1kICsgJ3B4KScpKXtcbiAgICAgICAgICAgICAgICAkKCcuc2VjdGlvbl9zZXJ2aWNlc18zLCAuc2VjdGlvbl9zZXJ2aWNlc180JykucmVtb3ZlQ2xhc3MoJ3NlY3Rpb24nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICQoJy5zZWN0aW9uX3NlcnZpY2VzXzMsIC5zZWN0aW9uX3NlcnZpY2VzXzQnKS5hZGRDbGFzcygnc2VjdGlvbicpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJy5zZWN0aW9uLCAuc2VjdGlvbl9zZXJ2aWNlc18zLCAuc2VjdGlvbl9zZXJ2aWNlc180JykucmVtb3ZlRGF0YSgnaW5kZXgnKS5yZW1vdmVBdHRyKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgICAgICAkKCcud3JhcHBlcicpLm9uZXBhZ2Vfc2Nyb2xsKHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uQ29udGFpbmVyOiBcIi5zZWN0aW9uXCIsICAgICAvLyBzZWN0aW9uQ29udGFpbmVyIGFjY2VwdHMgYW55IGtpbmQgb2Ygc2VsZWN0b3IgaW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byB1c2Ugc2VjdGlvblxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlXCIsICAgICAgICAgICAgICAgICAgLy8gRWFzaW5nIG9wdGlvbnMgYWNjZXB0cyB0aGUgQ1NTMyBlYXNpbmcgYW5pbWF0aW9uIHN1Y2ggXCJlYXNlXCIsIFwibGluZWFyXCIsIFwiZWFzZS1pblwiLC8vIFwiZWFzZS1vdXRcIiwgXCJlYXNlLWluLW91dFwiLCBvciBldmVuIGN1YmljIGJlemllciB2YWx1ZSBzdWNoIGFzIFwiY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC40MjAsIDEuMzEwKVwiXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uVGltZTogNTAwLCAgICAgICAgICAgICAvLyBBbmltYXRpb25UaW1lIGxldCB5b3UgZGVmaW5lIGhvdyBsb25nIGVhY2ggc2VjdGlvbiB0YWtlcyB0byBhbmltYXRlXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSwgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBlaXRoZXIgc2hvdyBvciBoaWRlIHRoZSBwYWdpbmF0aW9uLiBUb2dnbGUgdHJ1ZSBmb3Igc2hvdywgZmFsc2UgZm9yIGhpZGUuXG4gICAgICAgICAgICAgICAgdXBkYXRlVVJMOiBmYWxzZSwgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHRoaXMgdHJ1ZSBpZiB5b3Ugd2FudCB0aGUgVVJMIHRvIGJlIHVwZGF0ZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSB1c2VyIHNjcm9sbCB0byBlYWNoIHBhZ2UuXG4gICAgICAgICAgICAgICAgYmVmb3JlTW92ZTogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSAkKCcuc2VjdGlvbicpLmVxKGluZGV4IC0gMSkuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmF0dHIoJ2RhdGEtcGFnZScsICQoJy5zZWN0aW9uJykuZXEoaW5kZXggLSAxKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgICAgICAgICB9LCAgLy8gVGhpcyBvcHRpb24gYWNjZXB0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYmVmb3JlIHRoZSBwYWdlIG1vdmVzLlxuICAgICAgICAgICAgICAgIGFmdGVyTW92ZTogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sICAgLy8gVGhpcyBvcHRpb24gYWNjZXB0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHBhZ2UgbW92ZXMuXG4gICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBoYXZlIHRoZSBwYWdlIGxvb3AgYmFjayB0byB0aGUgdG9wL2JvdHRvbSB3aGVuIHRoZSB1c2VyIG5hdmlnYXRlcyBhdCB1cC9kb3duIG9uIHRoZSBmaXJzdC9sYXN0IHBhZ2UuXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IHRydWUsICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBhY3RpdmF0ZSB0aGUga2V5Ym9hcmQgY29udHJvbHNcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlRmFsbGJhY2s6IGZhbHNlLCAgICAgICAgLy8gWW91IGNhbiBmYWxsYmFjayB0byBub3JtYWwgcGFnZSBzY3JvbGwgYnkgZGVmaW5pbmcgdGhlIHdpZHRoIG9mIHRoZSBicm93c2VyIGluIHdoaWNoXG4gICAgICAgICAgICAgICAgLy8geW91IHdhbnQgdGhlIHJlc3BvbnNpdmUgZmFsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkLiBGb3IgZXhhbXBsZSwgc2V0IHRoaXMgdG8gNjAwIGFuZCB3aGVuZXZlclxuICAgICAgICAgICAgICAgIC8vIHRoZSBicm93c2VyJ3Mgd2lkdGggaXMgbGVzcyB0aGFuIDYwMCwgdGhlIGZhbGxiYWNrIHdpbGwga2ljayBpbi5cbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIiAgICAgICAgICAgIC8vIFlvdSBjYW4gbm93IGRlZmluZSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBPbmUgUGFnZSBTY3JvbGwgYW5pbWF0aW9uLiBPcHRpb25zIGF2YWlsYWJsZSBhcmUgXCJ2ZXJ0aWNhbFwiIGFuZCBcImhvcml6b250YWxcIi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgXCJ2ZXJ0aWNhbFwiLlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1cGRhdGVQYWdlKCk7XG4gICAgICAgIH0pLm9uKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoIW1vdmUpe1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZS5vbmVwYWdlX3Njcm9sbEluaXQnKTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5vbmVwYWdlLXBhZ2luYXRpb24gYScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmxpbmtfdG8tdG9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoJy53cmFwcGVyJykubW92ZVRvKDEpO1xuICAgICAgICB9KTtcbiAgICB9XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5yZXBsYWNlTWVudScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKE1vZGVybml6ci5tcSgnKG1pbi13aWR0aDogJyArICRzY3JlZW5NZCArICdweCknKSl7XG4gICAgICAgICAgICAkKCcubWVudScpLmFwcGVuZFRvKCcubWVudS13cmFwJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICQoJy5tZW51JykuYXBwZW5kVG8oJ2JvZHknKTtcbiAgICAgICAgfVxuICAgIH0pLnRyaWdnZXJIYW5kbGVyKCdyZXNpemUucmVwbGFjZU1lbnUnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnRvZ2dsZS1tZW51JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcubWVudScpLnRvZ2dsZUNsYXNzKCdtZW51X29wZW5lZCcpLmZhZGVUb2dnbGUoMTUwKTtcbiAgICB9KS5vbignY2xpY2snLCAnLm1lbnVfX2J0bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQoJy53cmFwcGVyJykubW92ZVRvKCQoJ1tkYXRhLWlkPVwiJyArICQodGhpcykuYXR0cignaHJlZicpLnNwbGl0KCcjJylbMV0gKyAnXCJdJykuZGF0YSgnaW5kZXgnKSk7XG4gICAgICAgICQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ21lbnVfb3BlbmVkJykuZmFkZU91dCg1MDApO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm1haW4tc2xpZGVyJykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JyxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICByZXNwb25zaXZlOiBbXG5cbiAgICAgICAgXVxuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnNsaWNrLXNsaWRlcicpLm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2Uuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSlcbn0pOyIsImZ1bmN0aW9uIGNvcnJlY3REZWMyKCkge1xuICAgIHZhciBpdGVtID0gJCgnLmRlY29yYXRpb25fdHlwZV8yJyk7XG4gICAgdmFyIHRpdGxlID0gaXRlbS5jbG9zZXN0KCcuc2VydmljZS1pdGVtJykuZmluZCgnLnNlcnZpY2UtaXRlbV9fdGl0bGUnKTtcbiAgICB2YXIgZCA9IHRpdGxlLm9mZnNldCgpLnRvcFxuICAgICAgICAtIGl0ZW0uY2xvc2VzdCgnLnNlcnZpY2UtaXRlbScpLm9mZnNldCgpLnRvcFxuICAgICAgICArIHBhcnNlRmxvYXQodGl0bGUuY3NzKCdsaW5lLWhlaWdodCcpKS8yICsgNztcbiAgICBpdGVtLmNzcygnbWFyZ2luLXRvcCcsIC05OTk5OSArIE1hdGguYWJzKGQpKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29ycmVjdERlYzIoKTtcbiAgICB9LCAxMDApO1xufVxuZnVuY3Rpb24gY29ycmVjdERlYzUoKSB7XG4gICAgdmFyIGl0ZW0gPSAkKCcuZGVjb3JhdGlvbl90eXBlXzUnKTtcbiAgICB2YXIgdGl0bGUgPSBpdGVtLmNsb3Nlc3QoJy5zZXJ2aWNlLWl0ZW0nKS5maW5kKCcuc2VydmljZS1pdGVtX190aXRsZScpO1xuICAgIHZhciBkID0gdGl0bGUub2Zmc2V0KCkudG9wXG4gICAgICAgIC0gaXRlbS5jbG9zZXN0KCcuc2VydmljZS1pdGVtJykub2Zmc2V0KCkudG9wXG4gICAgICAgICsgcGFyc2VGbG9hdCh0aXRsZS5jc3MoJ2xpbmUtaGVpZ2h0JykpLzIgKyA3O1xuICAgIGl0ZW0uY3NzKCdtYXJnaW4tdG9wJywgLTE0ICsgTWF0aC5hYnMoZCkpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb3JyZWN0RGVjNSgpO1xuICAgIH0sIDEwMCk7XG59XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKCcuZGVjb3JhdGlvbicpLmxlbmd0aCl7XG4gICAgICAgIC8vY29ycmVjdERlYzIoKTtcbiAgICAgICAgLy9jb3JyZWN0RGVjNSgpO1xuICAgIH1cbn0pOyIsImZ1bmN0aW9uIGNvcnJlY3RJbWcoKSB7XG4gICAgJCgnLnNlcnZpY2UtaXRlbV9faW1nJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY3NzKCdtYXgtaGVpZ2h0JywgJycpLmNzcygnbWF4LWhlaWdodCcsICQodGhpcykuY2xvc2VzdCgnLnNlcnZpY2UtaXRlbV9faW1nLXdyYXAnKS5oZWlnaHQoKSk7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvcnJlY3RJbWcoKTtcbiAgICB9LCAxMDApO1xufVxuJChmdW5jdGlvbiAoKSB7XG4gICAgLy9jb3JyZWN0SW1nKCk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuZ2FsbGVyeS1zbGlkZXItMiAuc2xpY2stc2xpZGVyJykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPicsXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPicsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ3OSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICRzY3JlZW5TbSAtIDEsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSk7XG59KTsiLCJmdW5jdGlvbiBpbml0UGVyZmVjdFNjcm9sbGJhcigpIHtcbiAgICAkKCcucHMtc2Nyb2xsOm5vdCgucHMtY29udGFpbmVyKScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBlcmZlY3RTY3JvbGxiYXIoJCh0aGlzKS5kYXRhKCdwcy1zY3JvbGwnKSk7XG4gICAgfSk7XG4gICAgJCgnLnBzLXNjcm9sbC5wcy1jb250YWluZXInKS5wZXJmZWN0U2Nyb2xsYmFyKCd1cGRhdGUnKTtcbn1cbmZ1bmN0aW9uIHJlSW5pdFBlcmZlY3RTY3JvbGxiYXIoKSB7XG4gICAgaW5pdFBlcmZlY3RTY3JvbGxiYXIoKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVJbml0UGVyZmVjdFNjcm9sbGJhcigpO1xuICAgIH0sIDEwMCk7XG59XG4kKGZ1bmN0aW9uICgpIHtcbiAgICByZUluaXRQZXJmZWN0U2Nyb2xsYmFyKCk7XG4gICAgJCgnLnBzLXNjcm9sbCcpLm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2Uuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG59KTsiLCIkLmlrU2VsZWN0LmV4dGVuZERlZmF1bHRzKHthdXRvV2lkdGg6IGZhbHNlLCBkZEZ1bGxXaWR0aDogZmFsc2UsIGR5bmFtaWNXaWR0aDogZmFsc2UsIGV4dHJhY3RMaW5rOiBmYWxzZSwgZGRNYXhIZWlnaHQ6IDIwMCwgb25TaG93OiBmdW5jdGlvbiAoZSl7XG4gICAgZS4kZWwuc2libGluZ3MoJy5pa19zZWxlY3RfbGluaycpLmFkZENsYXNzKCdpa19zZWxlY3RfbGlua19vcGVuZWQnKTtcbn0sIG9uSGlkZTogZnVuY3Rpb24gKGUpe1xuICAgIGUuJGVsLnNpYmxpbmdzKCcuaWtfc2VsZWN0X2xpbmsnKS5yZW1vdmVDbGFzcygnaWtfc2VsZWN0X2xpbmtfb3BlbmVkJyk7XG4gICAgZS4kZWwuaWtTZWxlY3QoJ3JlZHJhdycpO1xufSwgb25Jbml0OiBmdW5jdGlvbiAoZSkge1xuICAgIGUuJGVsLnNpYmxpbmdzKCcuaWtfc2VsZWN0X2Ryb3Bkb3duJykuZmluZCgnLmlrX3NlbGVjdF9saXN0X2lubmVyJykuYWRkQ2xhc3MoJ3BzLXNjcm9sbCcpO1xufX0pO1xuZnVuY3Rpb24gaW5pdFNlbGVjdCgpIHtcbiAgICAkKCdzZWxlY3Quc2VsZWN0Om5vdCguc2VsZWN0X2hhcyknKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuaWtTZWxlY3Qoe2N1c3RvbUNsYXNzOiAkKHRoaXMpLmF0dHIoJ2NsYXNzJyl9KS5hZGRDbGFzcygnc2VsZWN0X2hhcycpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVJbml0U2VsZWN0KCkge1xuICAgIGluaXRTZWxlY3QoKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVJbml0U2VsZWN0KCk7XG4gICAgfSwgMTAwKTtcbn1cbiQoZnVuY3Rpb24gKCkge1xuICAgIHJlSW5pdFNlbGVjdCgpO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJC5hcmN0aWNtb2RhbCgnc2V0RGVmYXVsdCcsIHtcbiAgICAgICAgY2xvc2VPbk92ZXJsYXlDbGljazogZmFsc2UsXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxZDFjMmEnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWZ0ZXJMb2FkaW5nT25TaG93OiBmdW5jdGlvbihkYXRhLCBlbCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe292ZXJmbG93OiAnJywgbWFyZ2luUmlnaHQ6ICcnfSk7XG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwibW9kYWwtYWpheFwiXScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSB8fCAkKHRoaXMpLmRhdGEoJ2hyZWYnKTtcbiAgICAgICAgJC5hcmN0aWNtb2RhbCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmNvbnRhY3RzLW1hcCcpLm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL2Uuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSlcbn0pOyJdfQ==
