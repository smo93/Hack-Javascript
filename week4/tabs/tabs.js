$(document).ready(function() {
    $('.tab').first().show();
    $('.tabs').find('a').first().removeClass('gray').addClass('green');
    $('.tabs').on('click', 'a', function() {
        var tabId = $(this).attr('href');

        $('.tabs').find('a').removeClass('green').addClass('gray');
        $(this).removeClass('gray').addClass('green');

        $('.tab').hide();
        $(tabId).show();
        return false;
    });
});
