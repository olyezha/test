jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });

    $('.more').on('click', function(){
        $(this).css('opacity', '0')
    })

    $('.details-btn').on('click',function(){
        $('.show-modal').fadeIn()
    })

    $('.reset').on('click', function(){
        $('.reset-modal').css('display', 'flex')
        $('.confirm').on('click', function(){
            location.reload();
        })
        $('.cancel').on('click', function(){
            $('.reset-modal').css('display', 'none')
        })
    })

    $('.save').on('click', function(){
        $('.done').css('display', 'flex')
        $('.done').css('background', '#2196f3')
        $('.ok').on('click', function(){
            $('.done').css('display', 'none')
        })
    })

});