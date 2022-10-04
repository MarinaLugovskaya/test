$(document).ready(function() {
  var rev = $('.rev_slider');
  rev.on('init', function(event, slick, currentSlide) {
    var
      cur = $(slick.$slides[slick.currentSlide]),
      next = cur.next(),
      prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
      cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    next = cur.next(),
      prev = cur.prev();
    prev.prev();
    prev.next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
  });
  
  rev.slick({
arrows: true,
 dots:true,
 adaptiveHeight:true,
 speed:1000,
cssEase: 'linear',
 infinite: true,
    infinite: true,
    centerMode: true,
     slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    infinite: true,
    appendArrows:$('.arrows-box'),
    appendDots:$('.arrows-box'),
  });
  
  $('.rev_slider ').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let counterValue = (document.querySelector('#slick-slide-control00'));
    console.log(counterValue);
      console.log(nextSlide);
    counterValue.textContent = nextSlide;
    });


$('.slider-case').slick({
  speed:1000,
  cssEase: 'linear',
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 600,
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

$('.slider-case').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  let counterValue = (document.querySelector('#slick-slide-control10'));
  console.log(counterValue);
    console.log(nextSlide);
  counterValue.textContent = nextSlide;
  });


$('.slider__results').slick({
  speed:400,
  cssEase: 'linear',
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        
      }
    },

    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        
      }
    },
  ],
});

});