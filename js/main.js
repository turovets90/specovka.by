$(document).ready(function(){


    $('.mm_btn').click(function () {
        $('.mm_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".mm_menu.open").length) {
            $(".mm_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });



    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            fade: true,
        });
    }

    $('.cat_item').each(function(){
        var cat_item=$(this);
        var toggler=$(this).find('.cat_toggle');
        var cat_submenu=$(this).find('.cat_submenu');
        $(toggler).on('click', function(){
            if($(cat_submenu).is(':visible')){
                $(cat_submenu).slideUp();
                $(cat_item).removeClass('active');
            }else{
                $(cat_submenu).slideDown();
                $(cat_item).addClass('active');
            }
        });
    });



    $('.tab-content .tab-pane').each(function(){
        var tab_content_slider = $(this).find('.tab_content_slider');
        var tab_content_slider_item = $(this).find('.tab_content_slider > div');
        if(tab_content_slider_item.length > 4){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: true,
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }else if($(window).innerWidth() < 575 && tab_content_slider_item.length > 1){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 767 && tab_content_slider_item.length > 2){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 991 && tab_content_slider_item.length > 3){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        }

    });





    /*


    $('.hamburger').click(function () {
        $('header .main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('header .main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest("header .main_menu.open").length) {
            $("header .main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    $('#show_more').on('click', function(){
        if($('#more').is(':visible')){
            $('#more').slideUp();
        }else{
            $('#more').slideDown();
        }
    });



    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        $('.section_content').css({'margin-top': header_height+'px'});
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height+100) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });

    });
    $(window).resize();



    if($('.product_slider > div').length >1){
        $('.product_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            //fade: true,
            asNavFor: '.product_slider_nav'
        });
    }


    $('.product_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

*/

});


