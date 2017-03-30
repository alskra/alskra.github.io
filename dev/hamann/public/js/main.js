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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJmb3JtLW9yZGVyLmpzIiwiZm9ybS1maWVsZC5qcyIsImNhci1leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkc2NyZWVuU20gPSA3NjgsXG4gICAgJHNjcmVlbk1kID0gMTA0NDtcblxuXG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICQoJy5mb3JtLW9yZGVyJykudmFsaWRhdGUoXG4gICAgICAge1xuICAgICAgICAgICBvbmtleXVwOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAvL3RoaXMuZWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgb25mb2N1c291dDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgLy90aGlzLmVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIGVycm9yRWxlbWVudDogJ2RpdicsXG4gICAgICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgZXJyb3IuYWRkQ2xhc3MoJ2Zvcm0tbXNnIGZvcm0tbXNnX2Vycm9yJykuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5jbG9zZXN0KCcuZm9ybS1maWVsZCwgLmZvcm0tY2hlY2tib3gsIC5mb3JtLXJhZGlvJykpO1xuICAgICAgICAgICB9XG4gICAgICAgfVxuICAgKTtcbn0pOyIsIiIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoXCIuY2FyLWV4YW1wbGVcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhZnRlciA9ICQodGhpcykuZmluZChcIi5jYXItZXhhbXBsZV9fYWZ0ZXJcIik7XG4gICAgICAgICQodGhpcykuZmluZChcIi5jYXItZXhhbXBsZV9fc2xpZGVyXCIpLnNsaWRlcih7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIHZhbHVlOiA1MCxcbiAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFmdGVyLndpZHRoKDM4ICsgMS4yOCokKHRoaXMpLnNsaWRlcihcInZhbHVlXCIpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbGlkZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgYWZ0ZXIud2lkdGgoMzggKyAxLjI4KnVpLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiXX0=
