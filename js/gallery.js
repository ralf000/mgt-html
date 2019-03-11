$(function () {    
    // Главный слайдер
    $(".gallery").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor: '.gallery-nav',
        prevArrow: $("#gallery-previous-arrow"),
        nextArrow: $("#gallery-next-arrow"),
    });
    
    // Горизонтальный слайдер
    $('.gallery-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.gallery',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }       
        ]
    });
    
});


