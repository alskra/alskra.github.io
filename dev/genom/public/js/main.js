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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJtZW51LmpzIiwibWFpbi1zbGlkZXIuanMiLCJtb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJHNjcmVlblNtID0gNzY4LFxuICAgICRzY3JlZW5NZCA9IDEwNDQ7XG5cblxuIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcudG9nZ2xlLW1lbnUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1tZW51X29wZW5lZCcpO1xuICAgICAgICAkKCcubWVudScpLnRvZ2dsZUNsYXNzKCdtZW51X29wZW5lZCcpLnNsaWRlVG9nZ2xlKDIwMCk7XG4gICAgfSk7XG5cbiAgICB2YXIgZHVyYXRpb24gPSBNb2Rlcm5penIubXEoJyhtaW4td2lkdGg6ICcgKyAkc2NyZWVuTWQgKyAncHgpJykgPyAwIDogMjAwO1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLm1lbnVfX2l0ZW1fc3VibWVudT4ubWVudV9fYnRuJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcubWVudV9faXRlbV9zdWJtZW51Jykubm90KFxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubWVudV9faXRlbV9zdWJtZW51JykudG9nZ2xlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJykuY2hpbGRyZW4oJy5tZW51X19zdWJtZW51Jykuc2xpZGVUb2dnbGUoZHVyYXRpb24pLmVuZCgpXG4gICAgICAgICkucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJykuY2hpbGRyZW4oJy5tZW51X19zdWJtZW51Jykuc2xpZGVVcChkdXJhdGlvbik7XG4gICAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZW51X19idG4nKS5sZW5ndGggfHwgJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lbnVfX3N1Ym1lbnUnKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgJCgnLm1lbnVfX2l0ZW1fc3VibWVudScpLnJlbW92ZUNsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpLmNoaWxkcmVuKCcubWVudV9fc3VibWVudScpLnNsaWRlVXAoZHVyYXRpb24pO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm1haW4tc2xpZGVyJykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IGljb24gaWNvbi1hbmdsZS1sZWZ0XCI+PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IGljb24gaWNvbi1hbmdsZS1yaWdodFwiPjwvYnV0dG9uPicsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICRzY3JlZW5TbSAtIDEsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pLm9uKCdsYXp5TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgaW1hZ2UsIGltYWdlU291cmNlKSB7XG4gICAgICAgICQoaW1hZ2UpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nIGxvYWRpbmdfYmVmb3JlJyk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5tYWluU2xpZGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubWFpbi1zbGlkZXJfX2NhcHRpb24nKS50cmlnZ2VyKCdkZXN0cm95Jyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLm1haW4tc2xpZGVyX19jYXB0aW9uJykuZG90ZG90ZG90KCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH0pLnRyaWdnZXJIYW5kbGVyKCdyZXNpemUubWFpblNsaWRlcicpO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJC5hcmN0aWNtb2RhbCgnc2V0RGVmYXVsdCcsIHtcbiAgICAgICAgY2xvc2VPbk92ZXJsYXlDbGljazogdHJ1ZSxcbiAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzJjMmMyYycsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFmdGVyTG9hZGluZ09uU2hvdzogZnVuY3Rpb24oZGF0YSwgZWwpIHtcblxuICAgICAgICB9LFxuICAgICAgICBhZnRlckNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtvdmVyZmxvdzogJycsIG1hcmdpblJpZ2h0OiAnJ30pO1xuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsLWFqYXhcIl0nLCBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJykgfHwgJCh0aGlzKS5kYXRhKCdocmVmJyk7XG4gICAgICAgICQuYXJjdGljbW9kYWwoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn0pOyJdfQ==
