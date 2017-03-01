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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9fY29tbW9uLmJsb2Nrcy9wYWdlL3BhZ2UuanMiLCJzcmMvX2NvbW1vbi5ibG9ja3MvbWVudS9tZW51LmpzIiwic3JjL19jb21tb24uYmxvY2tzL2NvbnRlbnQvY29udGVudC5qcyIsInNyYy9fY29tbW9uLmJsb2Nrcy9mb290ZXIvZm9vdGVyLmpzIiwic3JjL19jb21tb24uYmxvY2tzL2ZpbHRlcnMvZmlsdGVycy5qcyIsInNyYy9fY29tbW9uLmJsb2Nrcy9wcy1zY3JvbGwvcHMtc2Nyb2xsLmpzIiwic3JjL19jb21tb24uYmxvY2tzL2dhbGxlcnktc2xpZGVyL2dhbGxlcnktc2xpZGVyLmpzIiwic3JjL19jb21tb24uYmxvY2tzL3NsaWNrLXNsaWRlci9zbGljay1zbGlkZXIuanMiLCJzcmMvX2NvbW1vbi5ibG9ja3MvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuanMiLCJzcmMvX2NvbW1vbi5ibG9ja3MvanMtdG9vbHRpcC9qcy10b29sdGlwLmpzIiwic3JjL19jb21tb24uYmxvY2tzL2ZpZWxkL2ZpZWxkLmpzIiwic3JjL19jb21tb24uYmxvY2tzL2Jsb2ctYmVzdC9ibG9nLWJlc3QuanMiLCJzcmMvX2NvbW1vbi5ibG9ja3MvY29udGFjdHMtbWFwL2NvbnRhY3RzLW1hcC5qcyIsInNyYy9fY29tbW9uLmJsb2Nrcy9zbGlkaW5nLWJveC9zbGlkaW5nLWJveC5qcyIsInNyYy9fY29tbW9uLmJsb2Nrcy9wYXJ0bmVycy1saXN0L3BhcnRuZXJzLWxpc3QuanMiLCJzcmMvX2NvbW1vbi5ibG9ja3Mvc2VsZWN0L3NlbGVjdC5qcyIsInNyYy9fY29tbW9uLmJsb2Nrcy92YWNhbmN5LWl0ZW0vdmFjYW5jeS1pdGVtLmpzIiwic3JjL19jb21tb24uYmxvY2tzL21vZGFsL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkc2NyZWVuU20gPSA3NjgsXG4gICAgJHNjcmVlbk1kID0gMTMwMCxcbiAgICAkcXVlcnlTbSA9IE1vZGVybml6ci5tcSgnKG1pbi13aWR0aDogJysgJHNjcmVlblNtICsncHgpJyksXG4gICAgJHF1ZXJ5TWQgPSBNb2Rlcm5penIubXEoJyhtaW4td2lkdGg6ICcrICRzY3JlZW5NZCArJ3B4KScpO1xuXG5cbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzbGlkZW91dDtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5tZW51VG9nZ2xlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xuICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5tZW51X19idG4nKS5sZW5ndGggJiYgdGFyZ2V0LmNsb3Nlc3QoJy5tZW51X19pdGVtJykuaGFzQ2xhc3MoJ21lbnVfX2l0ZW1fc3VibWVudScpKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoJy5tZW51X19zdWJtZW51Jykubm90KHRhcmdldC5jbG9zZXN0KCcubWVudV9fYnRuJykubmV4dCgnLm1lbnVfX3N1Ym1lbnUnKS5zbGlkZVRvZ2dsZSgxNTApLmNsb3Nlc3QoJy5tZW51X19pdGVtJykudG9nZ2xlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJykuZW5kKCkpXG4gICAgICAgICAgICAgICAgLnNsaWRlVXAoMTUwKS5jbG9zZXN0KCcubWVudV9faXRlbScpLnJlbW92ZUNsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0YXJnZXQuY2xvc2VzdCgnLm1lbnUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUnKS5zbGlkZVVwKDE1MCkuY2xvc2VzdCgnLm1lbnVfX2l0ZW0nKS5yZW1vdmVDbGFzcygnbWVudV9faXRlbV9vcGVuZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuaW5pdE1lbnUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChNb2Rlcm5penIubXEoJyhtYXgtd2lkdGg6ICcgKyAoJHNjcmVlbk1kLTEpICsgJ3B4KScpICYmICFzbGlkZW91dCAmJiAkKCcubWVudScpLmxlbmd0aCl7XG4gICAgICAgICAgICAkKCcubWVudScpLmluc2VydEJlZm9yZSgnLndyYXBwZXInKTtcblxuICAgICAgICAgICAgc2xpZGVvdXQgPSBuZXcgU2xpZGVvdXQoe1xuICAgICAgICAgICAgICAgICdwYW5lbCc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyksXG4gICAgICAgICAgICAgICAgJ21lbnUnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogMjU2LFxuICAgICAgICAgICAgICAgICd0b2xlcmFuY2UnOiA3MFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnRvZ2dsZS1tZW51JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2xpZGVvdXQudG9nZ2xlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVvdXQub24oJ2JlZm9yZW9wZW4nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcudG9nZ2xlLW1lbnUnKS5hZGRDbGFzcygndG9nZ2xlLW1lbnVfb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcicpLmNzcyh7J3Bvc2l0aW9uJzogJ2Fic29sdXRlJywgJ3RvcCc6ICQod2luZG93KS5zY3JvbGxUb3AoKX0pO1xuICAgICAgICAgICAgICAgICQoJy5maWx0ZXJzX2ZpeGVkIC5maWx0ZXJzX19pbm5lcicpLmNzcyh7J3Bvc2l0aW9uJzogJ2Fic29sdXRlJywgJ3RvcCc6ICQod2luZG93KS5zY3JvbGxUb3AoKSArIDU0fSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVvdXQub24oJ2JlZm9yZWNsb3NlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLnRvZ2dsZS1tZW51JykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZS1tZW51X29wZW5lZCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlb3V0Lm9uKCd0cmFuc2xhdGUnLCBmdW5jdGlvbih0cmFuc2xhdGVkKSB7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcicpLmNzcyh7J3Bvc2l0aW9uJzogJ2Fic29sdXRlJywgJ3RvcCc6ICQod2luZG93KS5zY3JvbGxUb3AoKX0pO1xuICAgICAgICAgICAgICAgICQoJy5maWx0ZXJzX2ZpeGVkIC5maWx0ZXJzX19pbm5lcicpLmNzcyh7J3Bvc2l0aW9uJzogJ2Fic29sdXRlJywgJ3RvcCc6ICQod2luZG93KS5zY3JvbGxUb3AoKSArIDU0fSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVvdXQub24oJ2Nsb3NlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcicpLmNzcyh7J3Bvc2l0aW9uJzogJycsICd0b3AnOiAnJ30pO1xuICAgICAgICAgICAgICAgICQoJy5maWx0ZXJzX2ZpeGVkIC5maWx0ZXJzX19pbm5lcicpLmNzcyh7J3Bvc2l0aW9uJzogJycsICd0b3AnOiAnJ30pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTW9kZXJuaXpyLm1xKCcobWluLXdpZHRoOiAnICsgKCRzY3JlZW5NZCkgKyAncHgpJykgJiYgJCgnLm1lbnUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgJCgnLm1lbnUnKS5wcmVwZW5kVG8oJy5oZWFkZXJfX2lubmVyJyk7XG5cbiAgICAgICAgICAgIGlmIChzbGlkZW91dCl7XG4gICAgICAgICAgICAgICAgc2xpZGVvdXQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHNsaWRlb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICQoJy5zbGlkZW91dC1tZW51LCAuc2xpZGVvdXQtcGFuZWwnKS5yZW1vdmVDbGFzcygnc2xpZGVvdXQtbWVudSBzbGlkZW91dC1wYW5lbCBzbGlkZW91dC1tZW51LWxlZnQgc2xpZGVvdXQtbWVudS1yaWdodCBzbGlkZW91dC1wYW5lbC1sZWZ0IHNsaWRlb3V0LXBhbmVsLXJpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLm9mZignY2xpY2snLCAnLnRvZ2dsZS1tZW51Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KS50cmlnZ2VyKCdyZXNpemUuaW5pdE1lbnUnKTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQod2luZG93KS5vbigncmVzaXplLmluaXRDb2xTY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChNb2Rlcm5penIubXEoJyhtYXgtd2lkdGg6ICcgKyAoJHNjcmVlbk1kLTEpICsgJ3B4KScpKXtcbiAgICAgICAgICAgICQoJy5jb250ZW50X19jb2x1bW4tc2Nyb2xsJykucmVtb3ZlQ2xhc3MoJ3BzLXNjcm9sbCcpLnBlcmZlY3RTY3JvbGxiYXIoJ2Rlc3Ryb3knKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChNb2Rlcm5penIubXEoJyhtaW4td2lkdGg6ICcgKyAoJHNjcmVlbk1kKSArICdweCknKSl7XG4gICAgICAgICAgICAkKCcuY29udGVudF9fY29sdW1uLXNjcm9sbCcpLmFkZENsYXNzKCdwcy1zY3JvbGwnKTtcbiAgICAgICAgfVxuICAgIH0pLnRyaWdnZXIoJ3Jlc2l6ZS5pbml0Q29sU2Nyb2xsJyk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5yZXBsYWNlRm9vdGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoTW9kZXJuaXpyLm1xKCcobWF4LXdpZHRoOiAnICsgKCRzY3JlZW5NZC0xKSArICdweCknKSl7XG4gICAgICAgICAgICAkKCcuZm9vdGVyJykuYXBwZW5kVG8oJy53cmFwcGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTW9kZXJuaXpyLm1xKCcobWluLXdpZHRoOiAnICsgKCRzY3JlZW5NZCkgKyAncHgpJykpe1xuICAgICAgICAgICAgJCgnLmZvb3RlcicpLnByZXBlbmRUbygnLmNvbnRlbnRfX2NvbHVtbi1mb290ZXInKTtcbiAgICAgICAgfVxuICAgIH0pLnRyaWdnZXIoJ3Jlc2l6ZS5yZXBsYWNlRm9vdGVyJyk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5hdHRhY2hGaWx0ZXJzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICQoJy5maWx0ZXJzW2RhdGEtc2VjdGlvbl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgdmFyIHNlY3QgPSAkKCcjJyArICQodGhpcykuZGF0YSgnc2VjdGlvbicpKTtcbiAgICAgICAgICAgdmFyIHRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArIDU0IC0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgIHZhciBib3R0b20gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyA1NCAtIChzZWN0Lm9mZnNldCgpLnRvcCArIHNlY3QuaGVpZ2h0KCkgLSAxMDApO1xuICAgICAgICAgICBpZiAodG9wID49IDAgJiYgYm90dG9tIDwgMCl7XG4gICAgICAgICAgICAgICAkKHRoaXMpLm91dGVySGVpZ2h0KCQodGhpcykub3V0ZXJIZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdmaWx0ZXJzX2ZpeGVkJykuZmluZCgnLmZpbHRlcnNfX2lubmVyJykub3V0ZXJXaWR0aCgkKHRoaXMpLm91dGVyV2lkdGgoKSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAkKHRoaXMpLm91dGVySGVpZ2h0KCcnKTtcbiAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2ZpbHRlcnNfZml4ZWQnKS5maW5kKCcuZmlsdGVyc19faW5uZXInKS5vdXRlcldpZHRoKCcnKTtcbiAgICAgICAgICAgfVxuICAgICAgIH0pO1xuICAgIH0pO1xuICAgICQod2luZG93KS5vbigncmVzaXplLmNvcnJlY3RseUZpbHRlcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignc2Nyb2xsLmF0dGFjaEZpbHRlcnMnKTtcbiAgICB9KVxufSk7IiwiZnVuY3Rpb24gaW5pdFBlcmZlY3RTY3JvbGxiYXIoKSB7XG4gICAgJCgnLnBzLXNjcm9sbDpub3QoLnBzLWNvbnRhaW5lciknKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wZXJmZWN0U2Nyb2xsYmFyKCQodGhpcykuZGF0YSgncHMtc2Nyb2xsJykpO1xuICAgIH0pO1xuICAgICQoJy5wcy1zY3JvbGwucHMtY29udGFpbmVyJykucGVyZmVjdFNjcm9sbGJhcigndXBkYXRlJyk7XG59XG5mdW5jdGlvbiByZUluaXRQZXJmZWN0U2Nyb2xsYmFyKCkge1xuICAgIGluaXRQZXJmZWN0U2Nyb2xsYmFyKCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlSW5pdFBlcmZlY3RTY3JvbGxiYXIoKTtcbiAgICB9LCAxMDApO1xufVxuJChmdW5jdGlvbiAoKSB7XG4gICAgcmVJbml0UGVyZmVjdFNjcm9sbGJhcigpO1xuICAgICQoJy5wcy1zY3JvbGwnKS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5nYWxsZXJ5LXNsaWRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5nYWxsZXJ5LXNsaWRlcl9fdmlldycpLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6ICQodGhpcykuZmluZCgnLmdhbGxlcnktc2xpZGVyX190aHVtYi1pbm5lcicpLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLm9uKCdsYXp5TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgaW1hZ2UsIGltYWdlU291cmNlKSB7XG4gICAgICAgICAgICAkKGltYWdlKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnbG9hZGluZyBsb2FkaW5nX2JlZm9yZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5nYWxsZXJ5LXNsaWRlcl9fdGh1bWItaW5uZXInKS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgaWNvbiBpY29uLWFuZ2xlLXJpZ2h0XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBpY29uIGljb24tYW5nbGUtcmlnaHRcIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6ICQodGhpcykuZmluZCgnLmdhbGxlcnktc2xpZGVyX192aWV3JyksXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLm9uKCdsYXp5TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgaW1hZ2UsIGltYWdlU291cmNlKSB7XG4gICAgICAgICAgICAkKGltYWdlKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnbG9hZGluZyBsb2FkaW5nX2JlZm9yZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zbGljay1zbGlkZXInKS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KVxufSk7IiwiZnVuY3Rpb24gcmVhZEZpbGUgKGlucHV0KSB7XG4gICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICQoaW5wdXQpLmNsb3Nlc3QoJy51cGxvYWQtZmlsZScpLmZpbmQoJy51cGxvYWQtZmlsZV9fYnRuX3ByZXZpZXcnKS5jc3Moe2JhY2tncm91bmRJbWFnZTogJ3VybCgnICsgZS50YXJnZXQucmVzdWx0ICsgJyknLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ30pO1xuICAgICAgICAgICAgJChpbnB1dCkuY2xvc2VzdCgnLnVwbG9hZC1maWxlJykuYWRkQ2xhc3MoJ3VwbG9hZC1maWxlX2hhcy12YWx1ZScpLmZpbmQoJy51cGxvYWQtZmlsZV9fc3JjJykudGV4dChpbnB1dC5maWxlc1swXS5uYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICAkKGlucHV0KS5jbG9zZXN0KCcudXBsb2FkLWZpbGUnKS5maW5kKCcudXBsb2FkLWZpbGVfX2J0bl9wcmV2aWV3JykuY3NzKHtiYWNrZ3JvdW5kSW1hZ2U6ICcnLCBiYWNrZ3JvdW5kU2l6ZTogJyd9KTtcbiAgICAgICAgJChpbnB1dCkuY2xvc2VzdCgnLnVwbG9hZC1maWxlJykucmVtb3ZlQ2xhc3MoJ3VwbG9hZC1maWxlX2hhcy12YWx1ZScpLmZpbmQoJy51cGxvYWQtZmlsZV9fc3JjJykudGV4dCgnJyk7XG4gICAgfVxufVxuJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLnVwbG9hZC1maWxlIC51cGxvYWQtZmlsZV9fZmllbGQnLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmVhZEZpbGUodGhpcyk7XG4gICAgfSk7XG59KTsiLCJmdW5jdGlvbiByZUluaXRUb29sdGlwKCkge1xuICAgICQoJy5qcy10b29sdGlwJykudG9vbHRpcCh7Y29udGFpbmVyOiAnYm9keSd9KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVJbml0VG9vbHRpcCgpO1xuICAgIH0sIDEwMCk7XG59XG4kKGZ1bmN0aW9uICgpIHtcbiAgICByZUluaXRUb29sdGlwKCk7XG59KTsiLCIiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICQod2luZG93KS5vbigncmVzaXplLnJlcGxhY2VCbG9nQmVzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICBpZiAoTW9kZXJuaXpyLm1xKCcobWF4LXdpZHRoOiAnICsgKCRzY3JlZW5NZC0xKSArICdweCknKSl7XG4gICAgICAgICAgICQoJy5ibG9nLWJlc3QnKS5hcHBlbmRUbygnLmNvbnRlbnRfX2NvbHVtbl9jZW50ZXInKTtcbiAgICAgICB9XG4gICAgICAgZWxzZSBpZiAoTW9kZXJuaXpyLm1xKCcobWluLXdpZHRoOiAnICsgKCRzY3JlZW5NZCkgKyAncHgpJykpe1xuICAgICAgICAgICAkKCcuYmxvZy1iZXN0JykuYXBwZW5kVG8oJy5jb250ZW50X19jb2x1bW4taGVhZGVyJyk7XG4gICAgICAgfVxuICAgfSkudHJpZ2dlcigncmVzaXplLnJlcGxhY2VCbG9nQmVzdCcpO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmNvbnRhY3RzLW1hcCcpLm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2xpZGluZy1ib3hfX3NsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JyxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAkc2NyZWVuU20gLSAxLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZhZGU6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KS5vbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLnNsaWRpbmctYm94JykuZmluZCgnLnNsaWRpbmctYm94X19jdHJsLWxpbmUnKS5jc3MoJ2xlZnQnLCBuZXh0U2xpZGUqMjUgKyAnJScpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc2xpZGluZy1ib3hfX2N0cmwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciAkc2xpZGluZ0JveCA9ICQodGhpcykuY2xvc2VzdCgnLnNsaWRpbmctYm94Jyk7XG4gICAgICAgICRzbGlkaW5nQm94LmZpbmQoJy5zbGlkaW5nLWJveF9fc2xpZGVyJykuc2xpY2soJ3NsaWNrR29UbycsICRzbGlkaW5nQm94LmZpbmQoJy5zbGlkaW5nLWJveF9fY3RybCcpLmluZGV4KHRoaXMpKTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubWFza0ltYWdlICE9PSB1bmRlZmluZWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLndlYmtpdE1hc2tJbWFnZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgJCgnLnBhcnRuZXJzLWxpc3RfX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3BhcnRuZXJzLWxpc3RfX2l0ZW1fbWFzay1pbWFnZScpLmNzcygnbWFzay1pbWFnZScsICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJykpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgJCgnLnBhcnRuZXJzLWxpc3RfX3NsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBpY29uIGljb24tYW5nbGUtcmlnaHRcIj48L2J1dHRvbj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgaWNvbiBpY29uLWFuZ2xlLXJpZ2h0XCI+PC9idXR0b24+JyxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAkc2NyZWVuU20gLSAxLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KTtcbn0pOyIsIiQuaWtTZWxlY3QuZXh0ZW5kRGVmYXVsdHMoe2F1dG9XaWR0aDogZmFsc2UsIGRkRnVsbFdpZHRoOiBmYWxzZSwgZHluYW1pY1dpZHRoOiBmYWxzZSwgZXh0cmFjdExpbms6IGZhbHNlLCBkZE1heEhlaWdodDogMjAwLCBvblNob3c6IGZ1bmN0aW9uIChlKXtcbiAgICBlLiRlbC5zaWJsaW5ncygnLmlrX3NlbGVjdF9saW5rJykuYWRkQ2xhc3MoJ2lrX3NlbGVjdF9saW5rX29wZW5lZCcpO1xufSwgb25IaWRlOiBmdW5jdGlvbiAoZSl7XG4gICAgZS4kZWwuc2libGluZ3MoJy5pa19zZWxlY3RfbGluaycpLnJlbW92ZUNsYXNzKCdpa19zZWxlY3RfbGlua19vcGVuZWQnKTtcbiAgICBlLiRlbC5pa1NlbGVjdCgncmVkcmF3Jyk7XG59LCBvbkluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgZS4kZWwuc2libGluZ3MoJy5pa19zZWxlY3RfZHJvcGRvd24nKS5maW5kKCcuaWtfc2VsZWN0X2xpc3RfaW5uZXInKS5hZGRDbGFzcygncHMtc2Nyb2xsJyk7XG59fSk7XG5mdW5jdGlvbiBpbml0U2VsZWN0KCkge1xuICAgICQoJ3NlbGVjdC5zZWxlY3Q6bm90KC5zZWxlY3RfaGFzKScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5pa1NlbGVjdCh7Y3VzdG9tQ2xhc3M6ICQodGhpcykuYXR0cignY2xhc3MnKX0pLmFkZENsYXNzKCdzZWxlY3RfaGFzJyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiByZUluaXRTZWxlY3QoKSB7XG4gICAgaW5pdFNlbGVjdCgpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZUluaXRTZWxlY3QoKTtcbiAgICB9LCAxMDApO1xufVxuJChmdW5jdGlvbiAoKSB7XG4gICAgcmVJbml0U2VsZWN0KCk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnZhY2FuY3ktaXRlbV9fdGl0bGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgJCh0aGlzKS5jbG9zZXN0KCcudmFjYW5jeS1pdGVtJykudG9nZ2xlQ2xhc3MoJ3ZhY2FuY3ktaXRlbV9vcGVuZWQnKS5maW5kKCcudmFjYW5jeS1pdGVtX19jb2xsYXBzaWJsZScpLnNsaWRlVG9nZ2xlKDE1MCk7XG4gICB9KVxufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJC5hcmN0aWNtb2RhbCgnc2V0RGVmYXVsdCcsIHtcbiAgICAgICAgY2xvc2VPbk92ZXJsYXlDbGljazogZmFsc2UsXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyOTU3ODYnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWZ0ZXJMb2FkaW5nT25TaG93OiBmdW5jdGlvbihkYXRhLCBlbCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe292ZXJmbG93OiAnJywgbWFyZ2luUmlnaHQ6ICcnfSk7XG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwibW9kYWwtYWpheFwiXScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSB8fCAkKHRoaXMpLmRhdGEoJ2hyZWYnKTtcbiAgICAgICAgJC5hcmN0aWNtb2RhbCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufSk7Il19
