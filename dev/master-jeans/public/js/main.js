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
// Gallery-slider
function initGallerySlider2() {
    $('.gallery-slider-2').each(function () {
        $(this).find('.gallery-slider-2__view').slick({
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
            asNavFor: $(this).find('.gallery-slider-2__thumb-inner'),
            responsive: [

            ]
        }).on('lazyLoaded', function (event, slick, image, imageSource) {
            $(image).closest('.slick-slide').removeClass('loading loading_before');
        });

        var g = $(this);
        g.find('.gallery-slider-2__thumb-inner').slick({
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
            asNavFor: g.find('.gallery-slider-2__view'),
            focusOnSelect: true,
            vertical: false,
            verticalSwiping: true,
            initialSlide: 0,
            centerMode: true,
            centerPadding: '0px',
            responsive: [

            ]
        }).on('lazyLoaded', function (event, slick, image, imageSource) {
            $(image).closest('.slick-slide').removeClass('loading loading_before');
        });
    });
}

$(function () {
    initGallerySlider2();
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