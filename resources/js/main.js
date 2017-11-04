$( document ).ready(function() {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1
  });

  var previousScrollValue = 0;

  $(window).scroll(function() {
    var newScrollValue = $(this).scrollTop();
    console.log(newScrollValue - previousScrollValue);
    if(newScrollValue > (previousScrollValue + 50)) {
      var navHeight = $('nav').height();

      $('nav').animate({
        top: -navHeight
      }, 150);

      previousScrollValue = newScrollValue;
    } else if(previousScrollValue > (newScrollValue + 50)) {
      $('nav').animate({
        top: 0
      }, 150);

      previousScrollValue = newScrollValue;
    }
  });
});
