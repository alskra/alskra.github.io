var $screenSm = 768,
    $screenMd = 1200;



$(function () {
    $('body').on('click', '.toggle-menu', function (e) {
        e.preventDefault();
        $(this).toggleClass('toggle-menu_opened');
        $('.menu').toggleClass('menu_opened').slideToggle(200);
    }).on('click', function (e) {
        if ($(e.target).closest('.menu').length || $(e.target).closest('.toggle-menu').length) return;
        $('.toggle-menu').removeClass('toggle-menu_opened');
        $('.menu').removeClass('menu_opened').slideUp(200);
    });
});
$(function () {
    $('body').on('click', '.menu-foot__item_submenu>.menu-foot__btn', function (e) {
        var item = $(this).closest('.menu-foot__item_submenu');
        item.toggleClass('menu-foot__item_opened').find('.menu-foot__submenu').slideToggle(200);
        $('.menu-foot__item_submenu').not(item).removeClass('menu-foot__item_opened').find('.menu-foot__submenu').slideUp(200);
        return false;
    });
});
$(function () {
    $('body').on('click', '.to-top-btn', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    });
});
$(function () {
    $('body').on('click', '.menu-catalogue__item_submenu>.menu-catalogue__btn>.menu-catalogue__icon', function (e) {
        var item = $(this).closest('.menu-catalogue__item_submenu');
        item.toggleClass('menu-catalogue__item_opened').find('.menu-catalogue__submenu').slideToggle(200);
        return false;
    });

    $('body').on('click', '.toggle-menu-catalogue', function (e) {
        e.preventDefault();
        $(this).toggleClass('toggle-menu-catalogue_opened');
        $('.menu-catalogue').toggleClass('menu-catalogue_opened').slideToggle(200);
    }).on('click', function (e) {
        if ($(e.target).closest('.menu-catalogue').length || $(e.target).closest('.toggle-menu-catalogue').length) return;
        $('.toggle-menu-catalogue').removeClass('toggle-menu-catalogue_opened');
        $('.menu-catalogue').removeClass('menu-catalogue_opened').slideUp(200);
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
    $('body').on('click', '.faq-item__header', function () {
        $(this).closest('.faq-item').toggleClass('faq-item_opened').find('.faq-item__content').slideToggle(200);
    })
});
$(function () {
    $('.main-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev icon icon-angle-right-2"></button>',
        nextArrow: '<button type="button" class="slick-next icon icon-angle-right-2"></button>',
        autoplay: false,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: $screenSm - 1,
                settings: {
                    dots: true,
                    arrows: true
                }
            }
        ]
    }).on('lazyLoaded', function (event, slick, image, imageSource) {
        $(image).closest('.slick-slide').removeClass('loading loading_before');
    });
});
$(function () {
    $('.brands-list .slick-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'ease',
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev icon icon-angle-right-2"></button>',
        nextArrow: '<button type="button" class="slick-next icon icon-angle-right-2"></button>',
        autoplay: false,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: $screenSm - 1,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024 - 1,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: $screenMd - 1,
                settings: {
                    slidesToShow: 6
                }
            }
        ]
    });
});
// Gallery-slider
function initGallerySlider() {
    $('.gallery-slider').each(function () {
        $(this).find('.gallery-slider__view').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            fade: true,
            cssEase: 'ease',
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            prevArrow: '<button type="button" class="slick-prev icon icon-angle-right-2"></button>',
            nextArrow: '<button type="button" class="slick-next icon icon-angle-right-2"></button>',
            autoplay: false,
            autoplaySpeed: 5000,
            zIndex: 1,
            lazyLoad: 'ondemand',
            asNavFor: $(this).find('.gallery-slider__thumb-inner'),
            responsive: [

            ]
        }).on('lazyLoaded', function (event, slick, image, imageSource) {
            $(image).closest('.slick-slide').removeClass('loading loading_before');
        });

        var g = $(this);
        g.find('.gallery-slider__thumb-inner').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            fade: false,
            cssEase: 'ease',
            slidesToShow: 4,
            slidesToScroll: 1,
            mobileFirst: true,
            prevArrow: '<button type="button" class="slick-prev icon icon-angle-right"></button>',
            nextArrow: '<button type="button" class="slick-next icon icon-angle-right"></button>',
            autoplay: false,
            autoplaySpeed: 5000,
            zIndex: 1,
            lazyLoad: 'ondemand',
            asNavFor: g.find('.gallery-slider__view'),
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true,
            initialSlide: 0,
            responsive: [

            ]
        }).on('lazyLoaded', function (event, slick, image, imageSource) {
            $(image).closest('.slick-slide').removeClass('loading loading_before');
        });
        var htmlThumb = g.find('.gallery-slider__thumb-inner').html();
        $(window).on('resize.thumb', function () {
            setTimeout(function () {
                if (g.find('.gallery-slider__thumb-inner').hasClass('slick-initialized')){
                    //g.find('.gallery-slider__thumb-inner').slick('unslick').html(htmlThumb);
                }
                g.find('.gallery-slider__thumb-inner').data('slide-height', (g.height() + 20)/4 - 20).find('.slick-slide').outerHeight((g.height() + 20)/4 - 20);
                g.find('.gallery-slider__thumb-inner').find('.slick-list').outerHeight(g.height() + 20);
                g.find('.gallery-slider__thumb-inner').find('.slick-track')
                    .outerHeight(g.find('.gallery-slider__thumb-inner').find('.slick-slide').length*(g.height() + 20)/4);
                g.find('.gallery-slider__thumb-inner').slick('slickGoTo', g.find('.gallery-slider__view').slick('slickCurrentSlide'), true);
            }, 100);
        }).triggerHandler('resize.thumb');
    });
}

$(function () {
    initGallerySlider();

    $('body').on('click', '.color-item', function (e) {
        e.preventDefault();
        $('.gallery-slider__view, .gallery-slider__thumb-inner').slick('slickUnfilter')
        .slick('slickFilter', '[data-color="' + $(this).data('color') + '"]').slick('slickGoTo', 0, true);
        $(window).triggerHandler('resize.thumb');
    });

    $('body').on('change', 'select.select_size', function (e) {
        e.preventDefault();
        if ($(this).val() == 'all'){
            $('.gallery-slider__view, .gallery-slider__thumb-inner').slick('slickUnfilter');
            return;
        }
        $('.gallery-slider__view, .gallery-slider__thumb-inner').slick('slickUnfilter')
            .slick('slickFilter', '[data-size="' + $(this).val() + '"]').slick('slickGoTo', 0, true);
        $(window).triggerHandler('resize.thumb');
    });
});
$(function () {
    $('.tabs').each(function () {
        $(this).find('.tabs__btn:first').addClass('tabs__btn_opened').end().find('.tabs__item:first').addClass('tabs__item_opened').slideDown(200);
    });
    $('body').on('click', '[data-toggle="tab"]', function () {
        var tabs = $(this).closest('.tabs');
        var i = tabs.find('.tabs__btn').index(this);
        tabs.find('.tabs__btn').eq(i).addClass('tabs__btn_opened').end().not(':eq(' + i + ')').removeClass('tabs__btn_opened');
        tabs.find('.tabs__item').eq(i).slideDown(200).end().not(':eq(' + i + ')').slideUp(200);
    });
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
// Shops Map
function initShopMap(mapId, center, zoom, places) {
    var mapOptions = {
        center: new google.maps.LatLng(center[0], center[1]),
        zoom: zoom,
        zoomControl: true,
        scrollwheel: false,
        streetViewControl: false,
        overviewMapControl: false,
        panControl: false,
        mapTypeControl: false,
        draggable: true,
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
    };
    var map = new google.maps.Map(document.querySelector(mapId), mapOptions);
    /*var image = new google.maps.MarkerImage('img/marker.png',
        null,
        new google.maps.Point(0, 0),
        new google.maps.Point(20, 56)
    );
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(coords[0], coords[1]),
        title: 'MasterJeans',
        icon: image
    });*/
    places.forEach(function (place) {
        var labelText = '<a href="' + place.url + '" class="shops-map__item"><span class="shops-map__item-icon fa fa-shopping-bag"></span><span class="shops-map__item-label">' + place.title + '</span></a>';

        var myOptions = {
            content: labelText,
            boxStyle: {
                width: "auto",
                height: "auto"
            },
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-11, -7),
            position: new google.maps.LatLng(place.coords[0], place.coords[1]),
            closeBoxURL: "",
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: true//,
            //domready: tool(i)
        };

        var ibLabel = new InfoBox(myOptions);
        ibLabel.open(map);
    });
}
$(function () {
    if ($('.shops-map').length) {
        var dataShopsMap = $('.shops-map').data('map');
        initShopMap('.shops-map', dataShopsMap.center, dataShopsMap.zoom, dataShopsMap.places);
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJtZW51LmpzIiwibWVudS1mb290LmpzIiwidG8tdG9wLWJ0bi5qcyIsIm1lbnUtY2F0YWxvZ3VlLmpzIiwic2VsZWN0LmpzIiwiZmFxLWl0ZW0uanMiLCJtYWluLXNsaWRlci5qcyIsImJyYW5kcy1saXN0LmpzIiwiZ2FsbGVyeS1zbGlkZXIuanMiLCJ0YWJzLmpzIiwibW9kYWwuanMiLCJnYWxsZXJ5LmpzIiwic2hvcHMtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkc2NyZWVuU20gPSA3NjgsXG4gICAgJHNjcmVlbk1kID0gMTIwMDtcblxuXG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy50b2dnbGUtbWVudScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygndG9nZ2xlLW1lbnVfb3BlbmVkJyk7XG4gICAgICAgICQoJy5tZW51JykudG9nZ2xlQ2xhc3MoJ21lbnVfb3BlbmVkJykuc2xpZGVUb2dnbGUoMjAwKTtcbiAgICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lbnUnKS5sZW5ndGggfHwgJChlLnRhcmdldCkuY2xvc2VzdCgnLnRvZ2dsZS1tZW51JykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoJy50b2dnbGUtbWVudScpLnJlbW92ZUNsYXNzKCd0b2dnbGUtbWVudV9vcGVuZWQnKTtcbiAgICAgICAgJCgnLm1lbnUnKS5yZW1vdmVDbGFzcygnbWVudV9vcGVuZWQnKS5zbGlkZVVwKDIwMCk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5tZW51LWZvb3RfX2l0ZW1fc3VibWVudT4ubWVudS1mb290X19idG4nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLm1lbnUtZm9vdF9faXRlbV9zdWJtZW51Jyk7XG4gICAgICAgIGl0ZW0udG9nZ2xlQ2xhc3MoJ21lbnUtZm9vdF9faXRlbV9vcGVuZWQnKS5maW5kKCcubWVudS1mb290X19zdWJtZW51Jykuc2xpZGVUb2dnbGUoMjAwKTtcbiAgICAgICAgJCgnLm1lbnUtZm9vdF9faXRlbV9zdWJtZW51Jykubm90KGl0ZW0pLnJlbW92ZUNsYXNzKCdtZW51LWZvb3RfX2l0ZW1fb3BlbmVkJykuZmluZCgnLm1lbnUtZm9vdF9fc3VibWVudScpLnNsaWRlVXAoMjAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcudG8tdG9wLWJ0bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDUwMCk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5tZW51LWNhdGFsb2d1ZV9faXRlbV9zdWJtZW51Pi5tZW51LWNhdGFsb2d1ZV9fYnRuPi5tZW51LWNhdGFsb2d1ZV9faWNvbicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS5jbG9zZXN0KCcubWVudS1jYXRhbG9ndWVfX2l0ZW1fc3VibWVudScpO1xuICAgICAgICBpdGVtLnRvZ2dsZUNsYXNzKCdtZW51LWNhdGFsb2d1ZV9faXRlbV9vcGVuZWQnKS5maW5kKCcubWVudS1jYXRhbG9ndWVfX3N1Ym1lbnUnKS5zbGlkZVRvZ2dsZSgyMDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy50b2dnbGUtbWVudS1jYXRhbG9ndWUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1tZW51LWNhdGFsb2d1ZV9vcGVuZWQnKTtcbiAgICAgICAgJCgnLm1lbnUtY2F0YWxvZ3VlJykudG9nZ2xlQ2xhc3MoJ21lbnUtY2F0YWxvZ3VlX29wZW5lZCcpLnNsaWRlVG9nZ2xlKDIwMCk7XG4gICAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZW51LWNhdGFsb2d1ZScpLmxlbmd0aCB8fCAkKGUudGFyZ2V0KS5jbG9zZXN0KCcudG9nZ2xlLW1lbnUtY2F0YWxvZ3VlJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoJy50b2dnbGUtbWVudS1jYXRhbG9ndWUnKS5yZW1vdmVDbGFzcygndG9nZ2xlLW1lbnUtY2F0YWxvZ3VlX29wZW5lZCcpO1xuICAgICAgICAkKCcubWVudS1jYXRhbG9ndWUnKS5yZW1vdmVDbGFzcygnbWVudS1jYXRhbG9ndWVfb3BlbmVkJykuc2xpZGVVcCgyMDApO1xuICAgIH0pO1xufSk7IiwiJC5pa1NlbGVjdC5leHRlbmREZWZhdWx0cyh7YXV0b1dpZHRoOiBmYWxzZSwgZGRGdWxsV2lkdGg6IGZhbHNlLCBkeW5hbWljV2lkdGg6IGZhbHNlLCBleHRyYWN0TGluazogZmFsc2UsIGRkTWF4SGVpZ2h0OiAyMDAsIG9uU2hvdzogZnVuY3Rpb24gKGUpe1xuICAgIGUuJGVsLnNpYmxpbmdzKCcuaWtfc2VsZWN0X2xpbmsnKS5hZGRDbGFzcygnaWtfc2VsZWN0X2xpbmtfb3BlbmVkJyk7XG59LCBvbkhpZGU6IGZ1bmN0aW9uIChlKXtcbiAgICBlLiRlbC5zaWJsaW5ncygnLmlrX3NlbGVjdF9saW5rJykucmVtb3ZlQ2xhc3MoJ2lrX3NlbGVjdF9saW5rX29wZW5lZCcpO1xuICAgIGUuJGVsLmlrU2VsZWN0KCdyZWRyYXcnKTtcbn0sIG9uSW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICBlLiRlbC5zaWJsaW5ncygnLmlrX3NlbGVjdF9kcm9wZG93bicpLmZpbmQoJy5pa19zZWxlY3RfbGlzdF9pbm5lcicpLmFkZENsYXNzKCdwcy1zY3JvbGwnKTtcbn19KTtcbmZ1bmN0aW9uIGluaXRTZWxlY3QoKSB7XG4gICAgJCgnc2VsZWN0LnNlbGVjdDpub3QoLnNlbGVjdF9oYXMpJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLmlrU2VsZWN0KHtjdXN0b21DbGFzczogJCh0aGlzKS5hdHRyKCdjbGFzcycpfSkuYWRkQ2xhc3MoJ3NlbGVjdF9oYXMnKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlSW5pdFNlbGVjdCgpIHtcbiAgICBpbml0U2VsZWN0KCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlSW5pdFNlbGVjdCgpO1xuICAgIH0sIDEwMCk7XG59XG4kKGZ1bmN0aW9uICgpIHtcbiAgICByZUluaXRTZWxlY3QoKTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmZhcS1pdGVtX19oZWFkZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZhcS1pdGVtJykudG9nZ2xlQ2xhc3MoJ2ZhcS1pdGVtX29wZW5lZCcpLmZpbmQoJy5mYXEtaXRlbV9fY29udGVudCcpLnNsaWRlVG9nZ2xlKDIwMCk7XG4gICAgfSlcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5tYWluLXNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgaWNvbiBpY29uLWFuZ2xlLXJpZ2h0LTJcIj48L2J1dHRvbj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgaWNvbiBpY29uLWFuZ2xlLXJpZ2h0LTJcIj48L2J1dHRvbj4nLFxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAkc2NyZWVuU20gLSAxLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pLm9uKCdsYXp5TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgaW1hZ2UsIGltYWdlU291cmNlKSB7XG4gICAgICAgICQoaW1hZ2UpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nIGxvYWRpbmdfYmVmb3JlJyk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuYnJhbmRzLWxpc3QgLnNsaWNrLXNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgaWNvbiBpY29uLWFuZ2xlLXJpZ2h0LTJcIj48L2J1dHRvbj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgaWNvbiBpY29uLWFuZ2xlLXJpZ2h0LTJcIj48L2J1dHRvbj4nLFxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAkc2NyZWVuU20gLSAxLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCAtIDEsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAkc2NyZWVuTWQgLSAxLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pO1xufSk7IiwiLy8gR2FsbGVyeS1zbGlkZXJcbmZ1bmN0aW9uIGluaXRHYWxsZXJ5U2xpZGVyKCkge1xuICAgICQoJy5nYWxsZXJ5LXNsaWRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5nYWxsZXJ5LXNsaWRlcl9fdmlldycpLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgaWNvbiBpY29uLWFuZ2xlLXJpZ2h0LTJcIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IGljb24gaWNvbi1hbmdsZS1yaWdodC0yXCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAkKHRoaXMpLmZpbmQoJy5nYWxsZXJ5LXNsaWRlcl9fdGh1bWItaW5uZXInKSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcblxuICAgICAgICAgICAgXVxuICAgICAgICB9KS5vbignbGF6eUxvYWRlZCcsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGltYWdlLCBpbWFnZVNvdXJjZSkge1xuICAgICAgICAgICAgJChpbWFnZSkuY2xvc2VzdCgnLnNsaWNrLXNsaWRlJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcgbG9hZGluZ19iZWZvcmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGcgPSAkKHRoaXMpO1xuICAgICAgICBnLmZpbmQoJy5nYWxsZXJ5LXNsaWRlcl9fdGh1bWItaW5uZXInKS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgaWNvbiBpY29uLWFuZ2xlLXJpZ2h0XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBpY29uIGljb24tYW5nbGUtcmlnaHRcIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6IGcuZmluZCgnLmdhbGxlcnktc2xpZGVyX192aWV3JyksXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXG4gICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG5cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkub24oJ2xhenlMb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBpbWFnZSwgaW1hZ2VTb3VyY2UpIHtcbiAgICAgICAgICAgICQoaW1hZ2UpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nIGxvYWRpbmdfYmVmb3JlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaHRtbFRodW1iID0gZy5maW5kKCcuZ2FsbGVyeS1zbGlkZXJfX3RodW1iLWlubmVyJykuaHRtbCgpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS50aHVtYicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChnLmZpbmQoJy5nYWxsZXJ5LXNsaWRlcl9fdGh1bWItaW5uZXInKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgIC8vZy5maW5kKCcuZ2FsbGVyeS1zbGlkZXJfX3RodW1iLWlubmVyJykuc2xpY2soJ3Vuc2xpY2snKS5odG1sKGh0bWxUaHVtYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGcuZmluZCgnLmdhbGxlcnktc2xpZGVyX190aHVtYi1pbm5lcicpLmRhdGEoJ3NsaWRlLWhlaWdodCcsIChnLmhlaWdodCgpICsgMjApLzQgLSAyMCkuZmluZCgnLnNsaWNrLXNsaWRlJykub3V0ZXJIZWlnaHQoKGcuaGVpZ2h0KCkgKyAyMCkvNCAtIDIwKTtcbiAgICAgICAgICAgICAgICBnLmZpbmQoJy5nYWxsZXJ5LXNsaWRlcl9fdGh1bWItaW5uZXInKS5maW5kKCcuc2xpY2stbGlzdCcpLm91dGVySGVpZ2h0KGcuaGVpZ2h0KCkgKyAyMCk7XG4gICAgICAgICAgICAgICAgZy5maW5kKCcuZ2FsbGVyeS1zbGlkZXJfX3RodW1iLWlubmVyJykuZmluZCgnLnNsaWNrLXRyYWNrJylcbiAgICAgICAgICAgICAgICAgICAgLm91dGVySGVpZ2h0KGcuZmluZCgnLmdhbGxlcnktc2xpZGVyX190aHVtYi1pbm5lcicpLmZpbmQoJy5zbGljay1zbGlkZScpLmxlbmd0aCooZy5oZWlnaHQoKSArIDIwKS80KTtcbiAgICAgICAgICAgICAgICBnLmZpbmQoJy5nYWxsZXJ5LXNsaWRlcl9fdGh1bWItaW5uZXInKS5zbGljaygnc2xpY2tHb1RvJywgZy5maW5kKCcuZ2FsbGVyeS1zbGlkZXJfX3ZpZXcnKS5zbGljaygnc2xpY2tDdXJyZW50U2xpZGUnKSwgdHJ1ZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KS50cmlnZ2VySGFuZGxlcigncmVzaXplLnRodW1iJyk7XG4gICAgfSk7XG59XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgIGluaXRHYWxsZXJ5U2xpZGVyKCk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5jb2xvci1pdGVtJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcuZ2FsbGVyeS1zbGlkZXJfX3ZpZXcsIC5nYWxsZXJ5LXNsaWRlcl9fdGh1bWItaW5uZXInKS5zbGljaygnc2xpY2tVbmZpbHRlcicpXG4gICAgICAgIC5zbGljaygnc2xpY2tGaWx0ZXInLCAnW2RhdGEtY29sb3I9XCInICsgJCh0aGlzKS5kYXRhKCdjb2xvcicpICsgJ1wiXScpLnNsaWNrKCdzbGlja0dvVG8nLCAwLCB0cnVlKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKCdyZXNpemUudGh1bWInKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2hhbmdlJywgJ3NlbGVjdC5zZWxlY3Rfc2l6ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gJ2FsbCcpe1xuICAgICAgICAgICAgJCgnLmdhbGxlcnktc2xpZGVyX192aWV3LCAuZ2FsbGVyeS1zbGlkZXJfX3RodW1iLWlubmVyJykuc2xpY2soJ3NsaWNrVW5maWx0ZXInKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKCcuZ2FsbGVyeS1zbGlkZXJfX3ZpZXcsIC5nYWxsZXJ5LXNsaWRlcl9fdGh1bWItaW5uZXInKS5zbGljaygnc2xpY2tVbmZpbHRlcicpXG4gICAgICAgICAgICAuc2xpY2soJ3NsaWNrRmlsdGVyJywgJ1tkYXRhLXNpemU9XCInICsgJCh0aGlzKS52YWwoKSArICdcIl0nKS5zbGljaygnc2xpY2tHb1RvJywgMCwgdHJ1ZSk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VySGFuZGxlcigncmVzaXplLnRodW1iJyk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcudGFicycpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy50YWJzX19idG46Zmlyc3QnKS5hZGRDbGFzcygndGFic19fYnRuX29wZW5lZCcpLmVuZCgpLmZpbmQoJy50YWJzX19pdGVtOmZpcnN0JykuYWRkQ2xhc3MoJ3RhYnNfX2l0ZW1fb3BlbmVkJykuc2xpZGVEb3duKDIwMCk7XG4gICAgfSk7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0YWJzID0gJCh0aGlzKS5jbG9zZXN0KCcudGFicycpO1xuICAgICAgICB2YXIgaSA9IHRhYnMuZmluZCgnLnRhYnNfX2J0bicpLmluZGV4KHRoaXMpO1xuICAgICAgICB0YWJzLmZpbmQoJy50YWJzX19idG4nKS5lcShpKS5hZGRDbGFzcygndGFic19fYnRuX29wZW5lZCcpLmVuZCgpLm5vdCgnOmVxKCcgKyBpICsgJyknKS5yZW1vdmVDbGFzcygndGFic19fYnRuX29wZW5lZCcpO1xuICAgICAgICB0YWJzLmZpbmQoJy50YWJzX19pdGVtJykuZXEoaSkuc2xpZGVEb3duKDIwMCkuZW5kKCkubm90KCc6ZXEoJyArIGkgKyAnKScpLnNsaWRlVXAoMjAwKTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQuYXJjdGljbW9kYWwoJ3NldERlZmF1bHQnLCB7XG4gICAgICAgIGNsb3NlT25PdmVybGF5Q2xpY2s6IGZhbHNlLFxuICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWQxYzJhJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk2XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFmdGVyTG9hZGluZ09uU2hvdzogZnVuY3Rpb24oZGF0YSwgZWwpIHtcblxuICAgICAgICB9LFxuICAgICAgICBhZnRlckNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtvdmVyZmxvdzogJycsIG1hcmdpblJpZ2h0OiAnJ30pO1xuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsLWFqYXhcIl0nLCBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJykgfHwgJCh0aGlzKS5kYXRhKCdocmVmJyk7XG4gICAgICAgICQuYXJjdGljbW9kYWwoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwiZ2FsbGVyeVwiXScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBnYWxsZXJ5SXRlbXMgPSBbXTtcbiAgICAgICAgJCgnW2RhdGEtZ2FsbGVyeT1cIicgKyAkKHRoaXMpLmRhdGEoJ2dhbGxlcnknKSArICdcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghKCQodGhpcykuY2xvc2VzdCgnLnNsaWNrLXNsaWRlJykuaGFzQ2xhc3MoJ3NsaWNrLWNsb25lZCcpKSl7XG4gICAgICAgICAgICAgICAgZ2FsbGVyeUl0ZW1zLnB1c2goJCh0aGlzKS5kYXRhKCdocmVmJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGluaXRpYWxTbGlkZSA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgJC5hcmN0aWNtb2RhbCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICB1cmw6ICdwb3B1cHMvZ2FsbGVyeS5odG1sJyxcbiAgICAgICAgICAgIGFqYXg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBlbCwgcmVzcG9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGFsID0gJChyZXNwb25jZSk7XG4gICAgICAgICAgICAgICAgICAgIGdhbGxlcnlJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9faXRlbSBzbGljay1zbGlkZVwiPjxpbWcgZGF0YS1sYXp5PVwiJyArIGhyZWYgKyAnXCIgYWx0IGNsYXNzPVwiaW1nLW9iamVjdC1maXQgc2NhbGUtZG93blwiIG9ubG9hZD1cIm9iamVjdEZpdCh0aGlzKVwiPjwvZGl2PicpLmFwcGVuZFRvKG1vZGFsLmZpbmQoJy5nYWxsZXJ5JykpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5ib2R5LmFwcGVuZChtb2RhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFmdGVyTG9hZGluZ09uU2hvdzogZnVuY3Rpb24oZGF0YSwgZWwpIHtcbiAgICAgICAgICAgICAgICAkKCcuYXJjdGljbW9kYWwtbG9hZGluZycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICQoJy5nYWxsZXJ5Jykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IGluaXRpYWxTbGlkZSxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn0pOyIsIi8vIFNob3BzIE1hcFxuZnVuY3Rpb24gaW5pdFNob3BNYXAobWFwSWQsIGNlbnRlciwgem9vbSwgcGxhY2VzKSB7XG4gICAgdmFyIG1hcE9wdGlvbnMgPSB7XG4gICAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhjZW50ZXJbMF0sIGNlbnRlclsxXSksXG4gICAgICAgIHpvb206IHpvb20sXG4gICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICAgICAgb3ZlcnZpZXdNYXBDb250cm9sOiBmYWxzZSxcbiAgICAgICAgcGFuQ29udHJvbDogZmFsc2UsXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBzdHlsZXM6IFt7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmVcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOlwiLTEwMFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwibGFuZHNjYXBlXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInNhdHVyYXRpb25cIjotMTAwfSx7XCJsaWdodG5lc3NcIjo2NX0se1widmlzaWJpbGl0eVwiOlwib25cIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicG9pXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInNhdHVyYXRpb25cIjotMTAwfSx7XCJsaWdodG5lc3NcIjpcIjUwXCJ9LHtcInZpc2liaWxpdHlcIjpcInNpbXBsaWZpZWRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6XCItMTAwXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJzaW1wbGlmaWVkXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuYXJ0ZXJpYWxcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wibGlnaHRuZXNzXCI6XCIzMFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmxvY2FsXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImxpZ2h0bmVzc1wiOlwiNDBcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwidHJhbnNpdFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6LTEwMH0se1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJ3YXRlclwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImh1ZVwiOlwiI2ZmZmYwMFwifSx7XCJsaWdodG5lc3NcIjotMjV9LHtcInNhdHVyYXRpb25cIjotOTd9XX0se1wiZmVhdHVyZVR5cGVcIjpcIndhdGVyXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzXCIsXCJzdHlsZXJzXCI6W3tcImxpZ2h0bmVzc1wiOi0yNX0se1wic2F0dXJhdGlvblwiOi0xMDB9XX1dXG4gICAgfTtcbiAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1hcElkKSwgbWFwT3B0aW9ucyk7XG4gICAgLyp2YXIgaW1hZ2UgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VySW1hZ2UoJ2ltZy9tYXJrZXIucG5nJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxuICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMjAsIDU2KVxuICAgICk7XG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoY29vcmRzWzBdLCBjb29yZHNbMV0pLFxuICAgICAgICB0aXRsZTogJ01hc3RlckplYW5zJyxcbiAgICAgICAgaWNvbjogaW1hZ2VcbiAgICB9KTsqL1xuICAgIHBsYWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChwbGFjZSkge1xuICAgICAgICB2YXIgbGFiZWxUZXh0ID0gJzxhIGhyZWY9XCInICsgcGxhY2UudXJsICsgJ1wiIGNsYXNzPVwic2hvcHMtbWFwX19pdGVtXCI+PHNwYW4gY2xhc3M9XCJzaG9wcy1tYXBfX2l0ZW0taWNvbiBmYSBmYS1zaG9wcGluZy1iYWdcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzaG9wcy1tYXBfX2l0ZW0tbGFiZWxcIj4nICsgcGxhY2UudGl0bGUgKyAnPC9zcGFuPjwvYT4nO1xuXG4gICAgICAgIHZhciBteU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZW50OiBsYWJlbFRleHQsXG4gICAgICAgICAgICBib3hTdHlsZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZUF1dG9QYW46IHRydWUsXG4gICAgICAgICAgICBwaXhlbE9mZnNldDogbmV3IGdvb2dsZS5tYXBzLlNpemUoLTExLCAtNyksXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwbGFjZS5jb29yZHNbMF0sIHBsYWNlLmNvb3Jkc1sxXSksXG4gICAgICAgICAgICBjbG9zZUJveFVSTDogXCJcIixcbiAgICAgICAgICAgIGlzSGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHBhbmU6IFwiZmxvYXRQYW5lXCIsXG4gICAgICAgICAgICBlbmFibGVFdmVudFByb3BhZ2F0aW9uOiB0cnVlLy8sXG4gICAgICAgICAgICAvL2RvbXJlYWR5OiB0b29sKGkpXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGliTGFiZWwgPSBuZXcgSW5mb0JveChteU9wdGlvbnMpO1xuICAgICAgICBpYkxhYmVsLm9wZW4obWFwKTtcbiAgICB9KTtcbn1cbiQoZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKCcuc2hvcHMtbWFwJykubGVuZ3RoKSB7XG4gICAgICAgIHZhciBkYXRhU2hvcHNNYXAgPSAkKCcuc2hvcHMtbWFwJykuZGF0YSgnbWFwJyk7XG4gICAgICAgIGluaXRTaG9wTWFwKCcuc2hvcHMtbWFwJywgZGF0YVNob3BzTWFwLmNlbnRlciwgZGF0YVNob3BzTWFwLnpvb20sIGRhdGFTaG9wc01hcC5wbGFjZXMpO1xuICAgIH1cbn0pOyJdfQ==
