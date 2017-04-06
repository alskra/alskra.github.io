var $screenSm = 768,
    $screenMd = 1044;

$('link').each(function () {
    $(this).attr('media', 'all').attr('href', $(this).data('href'));
});


