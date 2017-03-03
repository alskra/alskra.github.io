var $screenSm = 768,
    $screenMd = 1300,
    $querySm = Modernizr.mq('(min-width: '+ $screenSm +'px)'),
    $queryMd = Modernizr.mq('(min-width: '+ $screenMd +'px)');



$(function () {
    var slideout;

    $(document).on('click.menuToggle', function (e) {
        var target = $(e.target);
        if (target.closest('.menu__btn').length && target.closest('.menu__item').hasClass('menu__item_submenu')){
            e.preventDefault();
            $('.menu__submenu').not(target.closest('.menu__btn').next('.menu__submenu').slideToggle(150).closest('.menu__item').toggleClass('menu__item_opened').end())
                .slideUp(150).closest('.menu__item').removeClass('menu__item_opened');
        }
        else if (!target.closest('.menu').length){
            $('.menu__submenu').slideUp(150).closest('.menu__item').removeClass('menu__item_opened');
        }
    });

    $(window).on('resize.initMenu', function () {
        if (Modernizr.mq('(max-width: ' + ($screenMd-1) + 'px)') && !slideout && $('.menu').length){
            $('.menu').insertBefore('.wrapper');

            slideout = new Slideout({
                'panel': document.querySelector('.wrapper'),
                'menu': document.querySelector('.menu'),
                'padding': 256,
                'tolerance': 70
            });

            $('body').on('click', '.toggle-menu', function (e) {
                e.preventDefault();
                slideout.toggle();
            });

            slideout.on('beforeopen', function() {
                $('.toggle-menu').addClass('toggle-menu_opened');
                $('.header').css({'position': 'absolute', 'top': $(window).scrollTop()});
                $('.filters_fixed .filters__inner').css({'position': 'absolute', 'top': $(window).scrollTop() + 54});
            });

            slideout.on('beforeclose', function() {
                $('.toggle-menu').removeClass('toggle-menu_opened');
            });

            slideout.on('translate', function(translated) {
                $('.header').css({'position': 'absolute', 'top': $(window).scrollTop()});
                $('.filters_fixed .filters__inner').css({'position': 'absolute', 'top': $(window).scrollTop() + 54});
            });

            slideout.on('close', function() {
                $('.header').css({'position': '', 'top': ''});
                $('.filters_fixed .filters__inner').css({'position': '', 'top': ''});
            });
        }
        else if (Modernizr.mq('(min-width: ' + ($screenMd) + 'px)') && $('.menu').length){
            $('.menu').prependTo('.header__inner');

            if (slideout){
                slideout.destroy();
                slideout = undefined;
                $('.slideout-menu, .slideout-panel').removeClass('slideout-menu slideout-panel slideout-menu-left slideout-menu-right slideout-panel-left slideout-panel-right');
                $('body').off('click', '.toggle-menu');
            }
        }
    }).trigger('resize.initMenu');
});
$(function () {
    $(window).on('resize.initColScroll', function () {
        if (Modernizr.mq('(max-width: ' + ($screenMd-1) + 'px)')){
            $('.content__column-scroll').removeClass('ps-scroll').perfectScrollbar('destroy');
        }
        else if (Modernizr.mq('(min-width: ' + ($screenMd) + 'px)')){
            $('.content__column-scroll').addClass('ps-scroll');
        }
    }).trigger('resize.initColScroll');
});
$(function () {
    $(window).on('resize.replaceFooter', function () {
        if (Modernizr.mq('(max-width: ' + ($screenMd-1) + 'px)')){
            $('.footer').appendTo('.wrapper');
        }
        else if (Modernizr.mq('(min-width: ' + ($screenMd) + 'px)')){
            $('.footer').prependTo('.content__column-footer');
        }
    }).trigger('resize.replaceFooter');
});
$(function () {
    $(window).on('scroll.attachFilters', function () {
       $('.filters[data-section]').each(function () {
           var sect = $('#' + $(this).data('section'));
           var top = $(window).scrollTop() + 54 - $(this).offset().top;
           var bottom = $(window).scrollTop() + 54 - (sect.offset().top + sect.height() - 100);
           if (top >= 0 && bottom < 0){
               $(this).outerHeight($(this).outerHeight());
               $(this).addClass('filters_fixed').find('.filters__inner').outerWidth($(this).outerWidth());
           }
           else {
               $(this).outerHeight('');
               $(this).removeClass('filters_fixed').find('.filters__inner').outerWidth('');
           }
       });
    });
    $(window).on('resize.correctlyFilters', function () {
        $(this).trigger('scroll.attachFilters');
    })
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
        e.stopPropagation();
    });
});
$(function () {
    $('.gallery-slider').each(function () {
        $(this).find('.gallery-slider__view').slick({
            dots: false,
            arrows: false,
            infinite: false,
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
            asNavFor: $(this).find('.gallery-slider__thumb-inner'),
            responsive: [

            ]
        }).on('lazyLoaded', function (event, slick, image, imageSource) {
            $(image).parent().removeClass('loading loading_before');
        });

        $(this).find('.gallery-slider__thumb-inner').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            fade: false,
            cssEase: 'ease',
            slidesToShow: 3,
            slidesToScroll: 1,
            mobileFirst: true,
            prevArrow: '<button type="button" class="slick-prev icon icon-angle-right"></button>',
            nextArrow: '<button type="button" class="slick-next icon icon-angle-right"></button>',
            autoplay: false,
            autoplaySpeed: 5000,
            zIndex: 1,
            lazyLoad: 'ondemand',
            asNavFor: $(this).find('.gallery-slider__view'),
            focusOnSelect: true,
            responsive: [

            ]
        }).on('lazyLoaded', function (event, slick, image, imageSource) {
            $(image).parent().removeClass('loading loading_before');
        });
    });
});
$(function () {
    $('.slick-slider').on('touchmove', function (e) {
        e.stopPropagation();
    })
});
function readFile (input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(input).closest('.upload-file').find('.upload-file__btn_preview').css({backgroundImage: 'url(' + e.target.result + ')', backgroundSize: 'cover'});
            $(input).closest('.upload-file').addClass('upload-file_has-value').find('.upload-file__src').text(input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);
    }
    else{
        $(input).closest('.upload-file').find('.upload-file__btn_preview').css({backgroundImage: '', backgroundSize: ''});
        $(input).closest('.upload-file').removeClass('upload-file_has-value').find('.upload-file__src').text('');
    }
}
$(function () {
    $('body').on('change', '.upload-file .upload-file__field', function (){
        readFile(this);
    });
});
function reInitTooltip() {
    $('.js-tooltip').tooltip({container: 'body'});
    setTimeout(function () {
        reInitTooltip();
    }, 100);
}
$(function () {
    reInitTooltip();
});

$(function () {
   $(window).on('resize.replaceBlogBest', function () {
       if (Modernizr.mq('(max-width: ' + ($screenMd-1) + 'px)')){
           $('.blog-best').appendTo('.content__column_center');
       }
       else if (Modernizr.mq('(min-width: ' + ($screenMd) + 'px)')){
           $('.blog-best').appendTo('.content__column-header');
       }
   }).trigger('resize.replaceBlogBest');
});
$(function () {
    $('.contacts-map').on('touchmove', function (e) {
        e.stopPropagation();
    })
});
$(function () {
    $('.sliding-box__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: $screenSm - 1,
                settings: {
                    fade: true
                }
            }
        ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(this).closest('.sliding-box').find('.sliding-box__ctrl-line').css('left', nextSlide*25 + '%');
    });

    $('body').on('click', '.sliding-box__ctrl', function (e) {
        e.preventDefault();
        var $slidingBox = $(this).closest('.sliding-box');
        $slidingBox.find('.sliding-box__slider').slick('slickGoTo', $slidingBox.find('.sliding-box__ctrl').index(this));
    });
});
$(function () {
    if (document.documentElement.style.maskImage !== undefined || document.documentElement.style.webkitMaskImage !== undefined){
        $('.partners-list__item').each(function () {
            $(this).addClass('partners-list__item_mask-image').css('mask-image', $(this).css('background-image'));
        });
    }
    $('.partners-list__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev icon icon-angle-right"></button>',
        nextArrow: '<button type="button" class="slick-next icon icon-angle-right"></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: $screenSm - 1,
                settings: {
                    dots: false,
                    slidesToShow: 3
                }
            }
        ]
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
   $('body').on('click', '.vacancy-item__title', function () {
       $(this).closest('.vacancy-item').toggleClass('vacancy-item_opened').find('.vacancy-item__collapsible').slideToggle(150);
   })
});
$(function () {
    $.arcticmodal('setDefault', {
        closeOnOverlayClick: false,
        overlay: {
            css: {
                backgroundColor: '#295786',
                opacity: 1
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