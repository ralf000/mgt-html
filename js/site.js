$(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
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