$(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 2,
                nav: true
            },
            992: {
                items: 3,
                nav: true
            },
            1020: {
                items: 3,
                nav: true
            }
        }
    });
});