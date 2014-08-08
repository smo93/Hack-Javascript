$(document).ready(function() {
    $('.accordion').find('dd').first().show();
    $('.accordion').on('click', 'dt', function() {
        var dd = $(this).next('dd');
        $('dd').hide();
        dd.show();
    });
});
