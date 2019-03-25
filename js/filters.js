$(function () {

    var arrowDown = '<i class="fas fa-chevron-down"></i>';
    var arrowUp = '<i class="fas fa-chevron-up"></i>';
    var calendarIcon = '<img src="holder.js/14x14" class="img-fluid">'; // иконка календаря

    $(".filter-selector").select2({
        minimumResultsForSearch: Infinity, // отключает строку поиска
    });

    $(".filter-selector.date-choose").next().addClass("date-choose"); // добавляем селектору класс date-choose    
    
    $('.select2-selection__arrow').html(arrowDown); // меняем стандартную стрелку на arrowDown
    $('.date-choose .select2-selection__arrow').html(calendarIcon); // меняем стандартную стрелку на calendarIcon
    
});
