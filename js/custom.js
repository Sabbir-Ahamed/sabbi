//Type Js Start
$(function () {
    $(".typed").typed({
        strings: ["Web Designer", "Photographer", "Freelancer"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });
});



//Progress Bar Start

$(function () {
    $("#skill").waypoint(function () {

        $('.skill-per').each(function () {
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width", per + '%');
            $({
                animatedValue: 0
            }).animate({
                animatedValue: per
            }, {
                duration: 2000,
                step: function () {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                },
                complete: function () {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                }
            });
        });

        this.destroy()
    }, {
        offset: 'bottom-in-view'
    });
});


//Mixitup Activation Code

var containerEl = document.querySelector('.port-items');

var mixer = mixitup(containerEl);


/*--==== Slick Slider --====*/

//Review Slider

$('.review-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
    }
        ]
});

//Blog Slider

$('.blog-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
});


//Back-to-top

$(function () {
    $('.back-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        if (scrolling > 500) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
});


//Preloader Js Start
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').fadeOut('slow');
});
