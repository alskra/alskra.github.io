var $screenSm = 768,
    $screenMd = 1044;



$(function () {
    $('body').on('click', '.toggle-menu', function (e) {
        e.preventDefault();
        $(this).toggleClass('toggle-menu_opened');
        $('.menu').toggleClass('menu_opened').slideToggle(200);
    });

    var duration = Modernizr.mq('(min-width: ' + $screenMd + 'px)') ? 0 : 200;
    $('body').on('click', '.menu__item_submenu>.menu__btn', function (e) {
        e.preventDefault();
        $('.menu__item_submenu').not(
            $(this).closest('.menu__item_submenu').toggleClass('menu__item_opened').children('.menu__submenu').slideToggle(duration).end()
        ).removeClass('menu__item_opened').children('.menu__submenu').slideUp(duration);
    }).on('click', function (e) {
        if ($(e.target).closest('.menu__btn').length || $(e.target).closest('.menu__submenu').length) return;
        $('.menu__item_submenu').removeClass('menu__item_opened').children('.menu__submenu').slideUp(duration);
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
        prevArrow: '<button type="button" class="slick-prev icon icon-angle-left"></button>',
        nextArrow: '<button type="button" class="slick-next icon icon-angle-right"></button>',
        autoplay: false,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: $screenSm - 1,
                settings: {
                    dots: false,
                    arrows: true
                }
            }
        ]
    }).on('lazyLoaded', function (event, slick, image, imageSource) {
        $(image).closest('.slick-slide').removeClass('loading loading_before');
    });

    $(window).on('resize.mainSlider', function () {
        $('.main-slider__caption').trigger('destroy');
        setTimeout(function () {
            $('.main-slider__caption').dotdotdot();
        }, 3000);
    }).triggerHandler('resize.mainSlider');
});
$(function () {
    $.arcticmodal('setDefault', {
        closeOnOverlayClick: true,
        overlay: {
            css: {
                backgroundColor: '#2c2c2c',
                opacity: 0.9
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