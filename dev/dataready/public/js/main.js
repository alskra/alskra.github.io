var $screenSm = 1024,
    $screenMd = 1300;



$(function () {
    if ($('.wrapper').length){
        var historyFlag = false;
        function updatePage(hash) {
            historyFlag = true;
            var sect = $('[data-id="' + hash.split('#')[1] + '"]');
            if (hash == ''){
                history.replaceState(null, document.title, '#main');
                $('.wrapper').moveTo(1);
            }
            else if (sect.length){
                if (Modernizr.mq('(min-width: ' + ($screenMd) + 'px)') && !sect.hasClass('section')){
                    sect = $('.section_services_2');
                    history.replaceState(null, document.title, '#services-page-2');
                }
                $('.wrapper').moveTo(sect.data('index'));
            }
            historyFlag = false;
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
                beforeMove: function(index) {console.log(index);
                    if (!historyFlag){
                        historyFlag = true;
                        history.pushState(null, document.title, '#' + $('.section').eq(index - 1).data('id'));
                    }
                    $('body').attr('data-page', $('.section').eq(index - 1).data('id'));
                },  // This option accepts a callback function. The function will be called before the page moves.
                afterMove: function(index) {
                    historyFlag = false;
                },   // This option accepts a callback function. The function will be called after the page moves.
                loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
                keyboard: true,                  // You can activate the keyboard controls
                responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                // the browser's width is less than 600, the fallback will kick in.
                direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
            });
            updatePage(window.location.hash);
        }).on('popstate', function (e) {
            if (!historyFlag){
                updatePage(window.location.hash);
            }
        }).triggerHandler('resize.onepage_scrollInit');

        $('body').on('click', '.onepage-pagination a', function (e) {
            e.preventDefault();
        });

        $('body').on('click', '.menu__btn', function (e) {
            e.preventDefault();
            $('.wrapper').moveTo($('[data-id="' + $(this).attr('href').split('#')[1] + '"]').data('index'));
            $('.menu').removeClass('menu_opened').fadeOut(500);
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

    $(window).on('resize.mainSlider', function () {
        $('.main-slider__col_1').each(function () {
            $(this).trigger('destroy').dotdotdot();
        });
    }).triggerHandler('resize.mainSlider');
});
$(function () {
    $('.slick-slider').on('touchmove', function (e) {
        //e.stopPropagation();
    })
});
function correctDec2() {
    var item = $('.decoration_type_2');
    var col = $('.service-item__col_2').eq(0);
    var d = col.offset().top
        - item.closest('.content-section').offset().top
        + (Modernizr.mq('(min-width: ' + $screenSm + 'px)') ? 17 : 11) + 7;
    item.css('margin-top', -99999 + Math.abs(d));
    setTimeout(function () {
        correctDec2();
    }, 100);
}
function correctDec5() {
    var item = $('.decoration_type_5');
    var col = $('.service-item__col_2').eq(3);
    var d = col.offset().top
        - item.closest('.content-section').offset().top
        + (Modernizr.mq('(min-width: ' + $screenSm + 'px)') ? 17 : 11) + 7;
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
function serviceItem() {
    $('.service-item__img').each(function () {
        $(this).css('max-height', $(this).closest('.service-item__col_1').height());
    });
    $('.service-item__col_2').each(function () {
        $(this).trigger('destroy').dotdotdot();
    });
    setTimeout(function () {
        serviceItem();
    }, 100);
}
$(function () {
    $(window).on('resize.serviceItem', function () {
        $('.service-item__img').each(function () {
            $(this).css('max-height', '').css('max-height', $(this).closest('.service-item__col_1').height());
        });
        $('.service-item__col_2').each(function () {
            $(this).trigger('destroy').dotdotdot();
        });
    }).triggerHandler('resize.serviceItem');

    setTimeout(function () {
        $(window).triggerHandler('resize.serviceItem');
    }, 500);
});
$(function () {
    $('.gallery-slider-2__item').each(function (i) {
        $(this).data('id', i);
    });
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

    $(window).on('resize.gallerySlider2', function () {
        $('.gallery-slider-2__caption').each(function () {
            $(this).trigger('destroy').dotdotdot();
        });
    }).triggerHandler('resize.gallerySlider2');
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
    $('.ps-scroll').on('ps-y-reach-start', function (e) {
        $(this).addClass('ps-y-reach-start').removeClass('ps-y-reach-end');
    }).on('swipedown', function (e) {
        e.stopPropagation();
        if ($(this).hasClass('ps-y-reach-start') || !$(this).hasClass('ps-active-y')){
            $('.wrapper').moveUp();
        }
    }).on('ps-scroll-down', function (e) {
        $(this).removeClass('ps-y-reach-start');
    });
    $('.ps-scroll').on('ps-y-reach-end', function (e) {
        $(this).addClass('ps-y-reach-end').removeClass('ps-y-reach-start');
    }).on('swipeup', function (e) {
        e.stopPropagation();
        if ($(this).hasClass('ps-y-reach-end') || !$(this).hasClass('ps-active-y')){
            $('.wrapper').moveDown();
        }
    }).on('ps-scroll-up', function (e) {
        $(this).removeClass('ps-y-reach-end');
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
    $('body').on('click', '[data-toggle="gallery"]', function(){
        var galleryItems = [];
        $('[data-gallery="' + $(this).data('gallery') + '"]').each(function () {
            if (!($(this).closest('.slick-slide').hasClass('slick-cloned'))){
                galleryItems.push($(this).data('href'));
            }
        });
        var initialSlide = $(this).data('id');
        $.arcticmodal({
            type: 'ajax',
            url: 'popups/gallery.html',
            ajax: {
                type: 'GET',
                cache: false,
                dataType: 'html',
                success: function(data, el, responce) {
                    var modal = $(responce);
                    galleryItems.forEach(function (href) {
                        $('<div class="gallery__item slick-slide"><img data-lazy="' + href + '" alt class="img-object-fit scale-down" onload="objectFit(this)"></div>').appendTo(modal.find('.gallery'));
                    });
                    data.body.append(modal);
                }
            },
            afterLoadingOnShow: function(data, el) {
                $('.arcticmodal-loading').remove();
                $('.gallery').slick({
                    dots: false,
                    arrows: false,
                    infinite: false,
                    speed: 300,
                    fade: false,
                    cssEase: 'ease',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: initialSlide,
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
            }
        });
        return false;
    });
});
$(function () {
    $('.contacts-map').on('touchmove', function (e) {
        //e.stopPropagation();
    })
});