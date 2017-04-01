var $screenSm = 768,
    $screenMd = 1044;



$(function () {
   $('.form-order').validate(
       {
           onkeyup: function(element) {
               //this.element(element);
           },
           onfocusout: function(element) {
               //this.element(element);
           },
           errorElement: 'div',
           errorPlacement: function(error, element) {
               error.addClass('form-msg form-msg_error').insertAfter(element.closest('.form-field, .form-checkbox, .form-radio'));
           }
       }
   );
});

$(function () {
    $(".car-example").each(function () {
        var after = $(this).find(".car-example__after");
        $(this).find(".car-example__slider").slider({
            min: 0,
            max: 100,
            value: 50,
            create: function () {
                after.width(38 + 1.28*$(this).slider("value"));
            },
            slide: function(event, ui) {
                after.width(38 + 1.28*ui.value);
            }
        });
    });
});
$(window).on('load', function () {
    $(".car-example").addClass('car-example_load');
});
$(function () {
    $('.reviews').slick({
        dots: true,
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
        asNavFor: '',
        adaptiveHeight: true,
        responsive: [

        ]
    }).on('lazyLoaded', function (event, slick, image, imageSource) {
        $(image).closest('.slick-slide').removeClass('loading loading_before');
    });
});