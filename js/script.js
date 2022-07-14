$(document).ready(function() {
$('.slider').slick({
  arrows: true,
  dots:true,
  adaptiveHeight:true,
  speed:1000,
  cssEase: 'linear',
  infinite: true,
    // autoplay: true,
  // autoplaySpeed: 2500,
  // pauseOnFocus: true,
  // pauseOnHover: true,
  // pauseOnDotsHover: true,
  variableWidth:true,
  centerMode: true,
  slidesToShow: 1,
  // centerPadding: '0px',
  initialSlide: 1,

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: true,
        dots:true,
        centerMode: true,
        // centerPadding: '200px',
        slidesToShow: 1,
        infinite: true,
          slidesToScroll: 1,
          variableWidth: true,
          mobileFirst: true,
      }
    },

    {
      breakpoint: 361,
      settings: {
        arrows: true,
        centerMode: true,
        // centerPadding: '20px',
        slidesToShow: 1,
      }
    },
  ],
  appendArrows:$('.arrows-box'),
  appendDots:$('.arrows-box'),
});


$('.slider-case').slick({
  speed:1000,
  cssEase: 'linear',
  arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },

    {
      breakpoint: 361,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
  ],
  appendArrows:$('.arrows-case-box'),
  appendDots:$('.arrows-case-box'),
});
});


$('.slider-case').on('beforeChange', function(event, slick, currentSlide, nextSlide){
let counterValue = (document.querySelector('#slick-slide-control11'));
console.log(counterValue);
  console.log(nextSlide);
counterValue.textContent = nextSlide;
});


$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
let counterValue = (document.querySelector('#slick-slide-control01'));
console.log(counterValue);
  console.log(nextSlide);
counterValue.textContent = nextSlide;
});