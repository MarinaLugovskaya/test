$(document).ready(function() {
$('.slider').slick({
  arrows: true,
  dots:true,
  adaptiveHeight:true,
  // slidesToScroll:1,
  infinite: false,
  speed:1000,
  // easing: 'ease',
  // autoplay: false,
  autoplaySpeed: 1000,
  infinite: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  variableWidth:false,
  // slidesPerRow: 2,

  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 360,
      settings: {
        arrows: true,
        centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 1440,
      settings: {
        arrows: true,
        dots:true,
        centerMode: true,
        centerPadding: '50px',
        // slidesToShow: 5,
          slidesToScroll:1,
      }
    }
  ]
});

});