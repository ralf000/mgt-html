$(function () {   
    
    var arrowDown = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    var arrowUp = '<i class="fa fa-angle-up" aria-hidden="true"></i>';    
    
    $(".filter-selector").select2({
        minimumResultsForSearch: Infinity, // отключает строку поиска
    });
    
    $('.select2-selection__arrow b').hide();     // спрятать дефолтную стрелку
    $('.select2-selection__arrow').html(arrowDown);

    $('.filter-selector').on('select2:opening', function (e) {
        $(this).parent().find('.select2-selection__arrow').html(arrowUp);
    });
    
    $('.filter-selector').on('select2:closing', function (e) {
        $(this).parent().find('.select2-selection__arrow').html(arrowDown);
    });

});
