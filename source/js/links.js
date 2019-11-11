'use strict';

(function () {

  $(document).ready(function(){

      function linkScroll (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1000);
      }

      $('#menu').on('click', 'a[href]', linkScroll);
      $('#button-down').on('click', 'a', linkScroll);
  });

})();
