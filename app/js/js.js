wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();
//MOBILE MENU START
$("#navToggle").click(function(){$(this).toggleClass("active"),$(".overlay").toggleClass("open"),$("body").toggleClass("locked")});
$(".mobile-link").click(function () {
    $(".overlay").removeClass("open");
    $(".navBurger").removeClass("active");
    $("body").toggleClass("locked");
})
//MOBILE MENU END
// TRANSITION TOOGLE START
jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1200);
        return false;
    });
});

// TRANSITION TOOGLE END
// UP-CHEVRON
if (document.body.clientWidth > 768) {
    jQuery(function (f) {
        var element = f('#up-scrol');
        f(window).scroll(function () {
            element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](500);
        });
    });
}
// UP-CHEVRON END
$(".user-input").focus(function () {
    $(this).parent().addClass("focus");
}).blur(function () {
    if($(this).val() === '') {
        $(this).parent().removeClass("focus")
    }
})

function MaxHeight(column) {
    var max_height = 0;
    column.each (function () {
        if ($(this).height() > max_height) {
            max_height = $(this).height();
        }
    });
    column.height(max_height);
}
MaxHeight($(".s2-item__format"));
MaxHeight($(".s2-item__materials"));
MaxHeight($(".s2-item__header"));


$('.review-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1110,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:false
            }
        }
    ]
});
$('.s2-popup').magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade',
        callbacks: {
            open: function () {
                $('.s2-slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.s2-slider__nav'
                });
                $('.s2-slider__nav').slick({
                    slidesToShow:3,/* $('.s2-slider__nav').length,*/
                    slidesToScroll: 0,
                    asNavFor: '.s2-slider',
                    dots: true,
                    centerMode: true,
                    focusOnSelect: true
                });
            },
            close: function() {
                $('.s2-slider').slick('unslick');
                $('.s2-slider__nav').slick('unslick');
            }
        }
    });


$(function(){
    $('.s5-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#s5-pager'
    });

    $('#s5-pager').slick({
        slidesToShow: 12,
        slidesToScroll: 3,
        asNavFor: '.s5-slider',
        dots: true,
        // centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 3,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows:false
                }
            }
        ]
    });

    $('.s5-slider__item').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
});
    $('.s7-btn').magnificPopup({
    type: 'inline',
    focus: '#name'
});