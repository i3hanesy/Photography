'use strict';

(function () {

  $(document).ready(function(){

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.button-up__wrapper').fadeIn();
      } else {
        $('.button-up__wrapper').fadeOut();
      }
    });

    $('.button-up').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 1000);
      return false;
    });

    var $win = $(window);
    var $footer = $(".footer");

    $win.scroll(function() {
      if($win.scrollTop() + $win.height() >= $footer.offset().top) {
        $(".button-up__wrapper").addClass('absolute');
      }else{
        $(".button-up__wrapper").removeClass('absolute');
      }
    });
  });

})();
