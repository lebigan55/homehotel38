$(function() {

    new WOW().init();


    // Smooth Scroll to block
    $('a[href^="#l"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
$(document).ready(function() {

    //nav-menu
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.overlay').on('click', function(){
        $(".overlay").fadeToggle(200);   
        $(".button a").toggleClass('btn-open').toggleClass('btn-close');
        open = false;
    });
    
    $('#slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        items: 1
    });

    $('#slider-1').owlCarousel({
        loop:true,
        margin:15,        
        nav:true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});
$(document).ready(function() { 
    //Sexy Tabs
    (function ($) { 
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        
        $('.tab ul.tabs li a').click(function (g) { 
            var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
            
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            
            g.preventDefault();
        } );
    })(jQuery);

});
$(function () {
    $('.cart-hotel-number__photo--images-1')

        .click(function () {
            $('.cart-hotel-number__photo--images').fadeOut(0);
            $('.cart-hotel-number__photo--images-1').fadeIn(600);
            $('.cart-hotel-number__photo--images').removeClass('active');
            $('.cart-hotel-number__photo--images-1').addClass('active');

        });
    
    $('.cart-hotel-number__photo--images-2')

        .click(function () {
            $('.cart-hotel-number__photo--images').fadeOut(0);
            $('.cart-hotel-number__photo--images-2').fadeIn(600);
            $('.cart-hotel-number__photo--images').removeClass('active');
            $('.cart-hotel-number__photo--images-2').addClass('active');

        });

    $('.cart-hotel-number__photo--images-3')

        .click(function () {
            $('.cart-hotel-number__photo--images').fadeOut(0);
            $('.cart-hotel-number__photo--images-3').fadeIn(600);
            $('.cart-hotel-number__photo--images').removeClass('active');
            $('.cart-hotel-number__photo--images-3').addClass('active');

        });
        
});
$("#contact-call-back").validate();
$("#contact-order-call").validate();
$("#contact-get-price").validate();
