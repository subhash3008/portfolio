$(document).ready(function() {
    //changing navbar-button to cross
    $('.bar').click(function() {
        $('.bar').toggleClass('change');
    });
    //navbar top fixed
    $(window).scroll(function() {
        let position = $(this).scrollTop();

        if(position >= 157) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    });

    //smooth scroll
    $('.nav-link').click(function(link){
        link.preventDefault();

        let target = $(this).attr('href');
        let position = $(target).offset().top;

        $('html, body').stop().animate({
            scrollTop: position - 95
        }, 1000);
    });

    //Isotope filtering
    // init Isotope
    let $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        let filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
    });
});