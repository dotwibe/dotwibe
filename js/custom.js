$(document).ready(function () {
        $(".navbar-toggle").on("click", function () {
            $(this).toggleClass("active");
        });
    });
$('.testi-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  autoplay: true,
  adaptiveHeight: true,
  slidesToScroll: 1,
   prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
    nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 150){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

