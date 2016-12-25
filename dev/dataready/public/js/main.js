var $screenSm = 1024,
    $screenMd = 1300;



$(function () {
    if ($('.wrapper').length){
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
                    location.hash = $('.section').eq(index - 1).data('id');
                    $('body').attr('data-page', $('.section').eq(index - 1).data('id'));
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
            updatePage();
        }).on('popstate', function (e) {
            updatePage();
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
        correctDec2();
        correctDec5();
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
    correctImg();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJ3cmFwcGVyLmpzIiwibWVudS5qcyIsIm1haW4tc2xpZGVyLmpzIiwic2xpY2stc2xpZGVyLmpzIiwiZGVjb3JhdGlvbi5qcyIsInNlcnZpY2UtaXRlbS5qcyIsImdhbGxlcnktc2xpZGVyLTIuanMiLCJwcy1zY3JvbGwuanMiLCJzZWxlY3QuanMiLCJtb2RhbC5qcyIsImNvbnRhY3RzLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJHNjcmVlblNtID0gMTAyNCxcbiAgICAkc2NyZWVuTWQgPSAxMzAwO1xuXG5cbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKCcud3JhcHBlcicpLmxlbmd0aCl7XG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVBhZ2UoKSB7XG4gICAgICAgICAgICB2YXIgc2VjdCA9ICQoJ1tkYXRhLWlkPVwiJyArIGxvY2F0aW9uLmhhc2guc3BsaXQoJyMnKVsxXSArICdcIl0nKTtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5oYXNoID09ICcnKXtcbiAgICAgICAgICAgICAgICAkKCcud3JhcHBlcicpLm1vdmVUbygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNlY3QubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBpZiAoTW9kZXJuaXpyLm1xKCcobWluLXdpZHRoOiAnICsgKCRzY3JlZW5NZCkgKyAncHgpJykgJiYgIXNlY3QuaGFzQ2xhc3MoJ3NlY3Rpb24nKSl7XG4gICAgICAgICAgICAgICAgICAgIHNlY3QgPSAkKCcuc2VjdGlvbl9zZXJ2aWNlc18yJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoJy53cmFwcGVyJykubW92ZVRvKHNlY3QuZGF0YSgnaW5kZXgnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUub25lcGFnZV9zY3JvbGxJbml0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKE1vZGVybml6ci5tcSgnKG1pbi13aWR0aDogJyArICRzY3JlZW5NZCArICdweCknKSl7XG4gICAgICAgICAgICAgICAgJCgnLnNlY3Rpb25fc2VydmljZXNfMywgLnNlY3Rpb25fc2VydmljZXNfNCcpLnJlbW92ZUNsYXNzKCdzZWN0aW9uJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAkKCcuc2VjdGlvbl9zZXJ2aWNlc18zLCAuc2VjdGlvbl9zZXJ2aWNlc180JykuYWRkQ2xhc3MoJ3NlY3Rpb24nKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcuc2VjdGlvbiwgLnNlY3Rpb25fc2VydmljZXNfMywgLnNlY3Rpb25fc2VydmljZXNfNCcpLnJlbW92ZURhdGEoJ2luZGV4JykucmVtb3ZlQXR0cignZGF0YS1pbmRleCcpO1xuICAgICAgICAgICAgJCgnLndyYXBwZXInKS5vbmVwYWdlX3Njcm9sbCh7XG4gICAgICAgICAgICAgICAgc2VjdGlvbkNvbnRhaW5lcjogXCIuc2VjdGlvblwiLCAgICAgLy8gc2VjdGlvbkNvbnRhaW5lciBhY2NlcHRzIGFueSBraW5kIG9mIHNlbGVjdG9yIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gdXNlIHNlY3Rpb25cbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiZWFzZVwiLCAgICAgICAgICAgICAgICAgIC8vIEVhc2luZyBvcHRpb25zIGFjY2VwdHMgdGhlIENTUzMgZWFzaW5nIGFuaW1hdGlvbiBzdWNoIFwiZWFzZVwiLCBcImxpbmVhclwiLCBcImVhc2UtaW5cIiwvLyBcImVhc2Utb3V0XCIsIFwiZWFzZS1pbi1vdXRcIiwgb3IgZXZlbiBjdWJpYyBiZXppZXIgdmFsdWUgc3VjaCBhcyBcImN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuNDIwLCAxLjMxMClcIlxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblRpbWU6IDUwMCwgICAgICAgICAgICAgLy8gQW5pbWF0aW9uVGltZSBsZXQgeW91IGRlZmluZSBob3cgbG9uZyBlYWNoIHNlY3Rpb24gdGFrZXMgdG8gYW5pbWF0ZVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gZWl0aGVyIHNob3cgb3IgaGlkZSB0aGUgcGFnaW5hdGlvbi4gVG9nZ2xlIHRydWUgZm9yIHNob3csIGZhbHNlIGZvciBoaWRlLlxuICAgICAgICAgICAgICAgIHVwZGF0ZVVSTDogZmFsc2UsICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGlzIHRydWUgaWYgeW91IHdhbnQgdGhlIFVSTCB0byBiZSB1cGRhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdXNlciBzY3JvbGwgdG8gZWFjaCBwYWdlLlxuICAgICAgICAgICAgICAgIGJlZm9yZU1vdmU6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSAkKCcuc2VjdGlvbicpLmVxKGluZGV4IC0gMSkuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmF0dHIoJ2RhdGEtcGFnZScsICQoJy5zZWN0aW9uJykuZXEoaW5kZXggLSAxKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgICAgICAgICB9LCAgLy8gVGhpcyBvcHRpb24gYWNjZXB0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYmVmb3JlIHRoZSBwYWdlIG1vdmVzLlxuICAgICAgICAgICAgICAgIGFmdGVyTW92ZTogZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICAgICAgICAgIH0sICAgLy8gVGhpcyBvcHRpb24gYWNjZXB0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHBhZ2UgbW92ZXMuXG4gICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBoYXZlIHRoZSBwYWdlIGxvb3AgYmFjayB0byB0aGUgdG9wL2JvdHRvbSB3aGVuIHRoZSB1c2VyIG5hdmlnYXRlcyBhdCB1cC9kb3duIG9uIHRoZSBmaXJzdC9sYXN0IHBhZ2UuXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IHRydWUsICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBhY3RpdmF0ZSB0aGUga2V5Ym9hcmQgY29udHJvbHNcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlRmFsbGJhY2s6IGZhbHNlLCAgICAgICAgLy8gWW91IGNhbiBmYWxsYmFjayB0byBub3JtYWwgcGFnZSBzY3JvbGwgYnkgZGVmaW5pbmcgdGhlIHdpZHRoIG9mIHRoZSBicm93c2VyIGluIHdoaWNoXG4gICAgICAgICAgICAgICAgLy8geW91IHdhbnQgdGhlIHJlc3BvbnNpdmUgZmFsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkLiBGb3IgZXhhbXBsZSwgc2V0IHRoaXMgdG8gNjAwIGFuZCB3aGVuZXZlclxuICAgICAgICAgICAgICAgIC8vIHRoZSBicm93c2VyJ3Mgd2lkdGggaXMgbGVzcyB0aGFuIDYwMCwgdGhlIGZhbGxiYWNrIHdpbGwga2ljayBpbi5cbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIiAgICAgICAgICAgIC8vIFlvdSBjYW4gbm93IGRlZmluZSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBPbmUgUGFnZSBTY3JvbGwgYW5pbWF0aW9uLiBPcHRpb25zIGF2YWlsYWJsZSBhcmUgXCJ2ZXJ0aWNhbFwiIGFuZCBcImhvcml6b250YWxcIi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgXCJ2ZXJ0aWNhbFwiLlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1cGRhdGVQYWdlKCk7XG4gICAgICAgIH0pLm9uKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB1cGRhdGVQYWdlKCk7XG4gICAgICAgIH0pLnRyaWdnZXJIYW5kbGVyKCdyZXNpemUub25lcGFnZV9zY3JvbGxJbml0Jyk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcub25lcGFnZS1wYWdpbmF0aW9uIGEnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5saW5rX3RvLXRvcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCcud3JhcHBlcicpLm1vdmVUbygxKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUucmVwbGFjZU1lbnUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChNb2Rlcm5penIubXEoJyhtaW4td2lkdGg6ICcgKyAkc2NyZWVuTWQgKyAncHgpJykpe1xuICAgICAgICAgICAgJCgnLm1lbnUnKS5hcHBlbmRUbygnLm1lbnUtd3JhcCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAkKCcubWVudScpLmFwcGVuZFRvKCdib2R5Jyk7XG4gICAgICAgIH1cbiAgICB9KS50cmlnZ2VySGFuZGxlcigncmVzaXplLnJlcGxhY2VNZW51Jyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy50b2dnbGUtbWVudScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1lbnUnKS50b2dnbGVDbGFzcygnbWVudV9vcGVuZWQnKS5mYWRlVG9nZ2xlKDE1MCk7XG4gICAgfSkub24oJ2NsaWNrJywgJy5tZW51X19idG4nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkKCcud3JhcHBlcicpLm1vdmVUbygkKCdbZGF0YS1pZD1cIicgKyAkKHRoaXMpLmF0dHIoJ2hyZWYnKS5zcGxpdCgnIycpWzFdICsgJ1wiXScpLmRhdGEoJ2luZGV4JykpO1xuICAgICAgICAkKCcubWVudScpLnJlbW92ZUNsYXNzKCdtZW51X29wZW5lZCcpLmZhZGVPdXQoNTAwKTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5tYWluLXNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPicsXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPicsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuXG4gICAgICAgIF1cbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zbGljay1zbGlkZXInKS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9lLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG59KTsiLCJmdW5jdGlvbiBjb3JyZWN0RGVjMigpIHtcbiAgICB2YXIgaXRlbSA9ICQoJy5kZWNvcmF0aW9uX3R5cGVfMicpO1xuICAgIHZhciB0aXRsZSA9IGl0ZW0uY2xvc2VzdCgnLnNlcnZpY2UtaXRlbScpLmZpbmQoJy5zZXJ2aWNlLWl0ZW1fX3RpdGxlJyk7XG4gICAgdmFyIGQgPSB0aXRsZS5vZmZzZXQoKS50b3BcbiAgICAgICAgLSBpdGVtLmNsb3Nlc3QoJy5zZXJ2aWNlLWl0ZW0nKS5vZmZzZXQoKS50b3BcbiAgICAgICAgKyBwYXJzZUZsb2F0KHRpdGxlLmNzcygnbGluZS1oZWlnaHQnKSkvMiArIDc7XG4gICAgaXRlbS5jc3MoJ21hcmdpbi10b3AnLCAtOTk5OTkgKyBNYXRoLmFicyhkKSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvcnJlY3REZWMyKCk7XG4gICAgfSwgMTAwKTtcbn1cbmZ1bmN0aW9uIGNvcnJlY3REZWM1KCkge1xuICAgIHZhciBpdGVtID0gJCgnLmRlY29yYXRpb25fdHlwZV81Jyk7XG4gICAgdmFyIHRpdGxlID0gaXRlbS5jbG9zZXN0KCcuc2VydmljZS1pdGVtJykuZmluZCgnLnNlcnZpY2UtaXRlbV9fdGl0bGUnKTtcbiAgICB2YXIgZCA9IHRpdGxlLm9mZnNldCgpLnRvcFxuICAgICAgICAtIGl0ZW0uY2xvc2VzdCgnLnNlcnZpY2UtaXRlbScpLm9mZnNldCgpLnRvcFxuICAgICAgICArIHBhcnNlRmxvYXQodGl0bGUuY3NzKCdsaW5lLWhlaWdodCcpKS8yICsgNztcbiAgICBpdGVtLmNzcygnbWFyZ2luLXRvcCcsIC0xNCArIE1hdGguYWJzKGQpKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29ycmVjdERlYzUoKTtcbiAgICB9LCAxMDApO1xufVxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCgnLmRlY29yYXRpb24nKS5sZW5ndGgpe1xuICAgICAgICBjb3JyZWN0RGVjMigpO1xuICAgICAgICBjb3JyZWN0RGVjNSgpO1xuICAgIH1cbn0pOyIsImZ1bmN0aW9uIGNvcnJlY3RJbWcoKSB7XG4gICAgJCgnLnNlcnZpY2UtaXRlbV9faW1nJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY3NzKCdtYXgtaGVpZ2h0JywgJycpLmNzcygnbWF4LWhlaWdodCcsICQodGhpcykuY2xvc2VzdCgnLnNlcnZpY2UtaXRlbV9faW1nLXdyYXAnKS5oZWlnaHQoKSk7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvcnJlY3RJbWcoKTtcbiAgICB9LCAxMDApO1xufVxuJChmdW5jdGlvbiAoKSB7XG4gICAgY29ycmVjdEltZygpO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmdhbGxlcnktc2xpZGVyLTIgLnNsaWNrLXNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48L2J1dHRvbj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48L2J1dHRvbj4nLFxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0NzksXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAkc2NyZWVuU20gLSAxLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pO1xufSk7IiwiZnVuY3Rpb24gaW5pdFBlcmZlY3RTY3JvbGxiYXIoKSB7XG4gICAgJCgnLnBzLXNjcm9sbDpub3QoLnBzLWNvbnRhaW5lciknKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wZXJmZWN0U2Nyb2xsYmFyKCQodGhpcykuZGF0YSgncHMtc2Nyb2xsJykpO1xuICAgIH0pO1xuICAgICQoJy5wcy1zY3JvbGwucHMtY29udGFpbmVyJykucGVyZmVjdFNjcm9sbGJhcigndXBkYXRlJyk7XG59XG5mdW5jdGlvbiByZUluaXRQZXJmZWN0U2Nyb2xsYmFyKCkge1xuICAgIGluaXRQZXJmZWN0U2Nyb2xsYmFyKCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlSW5pdFBlcmZlY3RTY3JvbGxiYXIoKTtcbiAgICB9LCAxMDApO1xufVxuJChmdW5jdGlvbiAoKSB7XG4gICAgcmVJbml0UGVyZmVjdFNjcm9sbGJhcigpO1xuICAgICQoJy5wcy1zY3JvbGwnKS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9lLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xufSk7IiwiJC5pa1NlbGVjdC5leHRlbmREZWZhdWx0cyh7YXV0b1dpZHRoOiBmYWxzZSwgZGRGdWxsV2lkdGg6IGZhbHNlLCBkeW5hbWljV2lkdGg6IGZhbHNlLCBleHRyYWN0TGluazogZmFsc2UsIGRkTWF4SGVpZ2h0OiAyMDAsIG9uU2hvdzogZnVuY3Rpb24gKGUpe1xuICAgIGUuJGVsLnNpYmxpbmdzKCcuaWtfc2VsZWN0X2xpbmsnKS5hZGRDbGFzcygnaWtfc2VsZWN0X2xpbmtfb3BlbmVkJyk7XG59LCBvbkhpZGU6IGZ1bmN0aW9uIChlKXtcbiAgICBlLiRlbC5zaWJsaW5ncygnLmlrX3NlbGVjdF9saW5rJykucmVtb3ZlQ2xhc3MoJ2lrX3NlbGVjdF9saW5rX29wZW5lZCcpO1xuICAgIGUuJGVsLmlrU2VsZWN0KCdyZWRyYXcnKTtcbn0sIG9uSW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICBlLiRlbC5zaWJsaW5ncygnLmlrX3NlbGVjdF9kcm9wZG93bicpLmZpbmQoJy5pa19zZWxlY3RfbGlzdF9pbm5lcicpLmFkZENsYXNzKCdwcy1zY3JvbGwnKTtcbn19KTtcbmZ1bmN0aW9uIGluaXRTZWxlY3QoKSB7XG4gICAgJCgnc2VsZWN0LnNlbGVjdDpub3QoLnNlbGVjdF9oYXMpJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLmlrU2VsZWN0KHtjdXN0b21DbGFzczogJCh0aGlzKS5hdHRyKCdjbGFzcycpfSkuYWRkQ2xhc3MoJ3NlbGVjdF9oYXMnKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlSW5pdFNlbGVjdCgpIHtcbiAgICBpbml0U2VsZWN0KCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlSW5pdFNlbGVjdCgpO1xuICAgIH0sIDEwMCk7XG59XG4kKGZ1bmN0aW9uICgpIHtcbiAgICByZUluaXRTZWxlY3QoKTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQuYXJjdGljbW9kYWwoJ3NldERlZmF1bHQnLCB7XG4gICAgICAgIGNsb3NlT25PdmVybGF5Q2xpY2s6IGZhbHNlLFxuICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWQxYzJhJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk2XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFmdGVyTG9hZGluZ09uU2hvdzogZnVuY3Rpb24oZGF0YSwgZWwpIHtcblxuICAgICAgICB9LFxuICAgICAgICBhZnRlckNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtvdmVyZmxvdzogJycsIG1hcmdpblJpZ2h0OiAnJ30pO1xuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsLWFqYXhcIl0nLCBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJykgfHwgJCh0aGlzKS5kYXRhKCdocmVmJyk7XG4gICAgICAgICQuYXJjdGljbW9kYWwoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5jb250YWN0cy1tYXAnKS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9lLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG59KTsiXX0=
