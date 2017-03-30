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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJmb3JtLW9yZGVyLmpzIiwiZm9ybS1maWVsZC5qcyIsImNhci1leGFtcGxlLmpzIiwicmV2aWV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICRzY3JlZW5TbSA9IDc2OCxcbiAgICAkc2NyZWVuTWQgPSAxMDQ0O1xuXG5cbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgJCgnLmZvcm0tb3JkZXInKS52YWxpZGF0ZShcbiAgICAgICB7XG4gICAgICAgICAgIG9ua2V5dXA6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgIC8vdGhpcy5lbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICBvbmZvY3Vzb3V0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAvL3RoaXMuZWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgZXJyb3JFbGVtZW50OiAnZGl2JyxcbiAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKGVycm9yLCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICBlcnJvci5hZGRDbGFzcygnZm9ybS1tc2cgZm9ybS1tc2dfZXJyb3InKS5pbnNlcnRBZnRlcihlbGVtZW50LmNsb3Nlc3QoJy5mb3JtLWZpZWxkLCAuZm9ybS1jaGVja2JveCwgLmZvcm0tcmFkaW8nKSk7XG4gICAgICAgICAgIH1cbiAgICAgICB9XG4gICApO1xufSk7IiwiIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5jYXItZXhhbXBsZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFmdGVyID0gJCh0aGlzKS5maW5kKFwiLmNhci1leGFtcGxlX19hZnRlclwiKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmNhci1leGFtcGxlX19zbGlkZXJcIikuc2xpZGVyKHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgdmFsdWU6IDUwLFxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWZ0ZXIud2lkdGgoMzggKyAxLjI4KiQodGhpcykuc2xpZGVyKFwidmFsdWVcIikpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICBhZnRlci53aWR0aCgzOCArIDEuMjgqdWkudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5yZXZpZXdzJykuc2xpY2soe1xuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IGljb24gaWNvbi1hbmdsZS1yaWdodC0yXCI+PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IGljb24gaWNvbi1hbmdsZS1yaWdodC0yXCI+PC9idXR0b24+JyxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICBhc05hdkZvcjogJycsXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG5cbiAgICAgICAgXVxuICAgIH0pLm9uKCdsYXp5TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgaW1hZ2UsIGltYWdlU291cmNlKSB7XG4gICAgICAgICQoaW1hZ2UpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nIGxvYWRpbmdfYmVmb3JlJyk7XG4gICAgfSk7XG59KTsiXX0=
