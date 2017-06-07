
$(document).ready(function(){
  var btns = $('#row1').children();
  var btns2 = $('#row2').children();
  btns.each(function(i){
    $(this).on('click', function(){
      switch (i) {
        case 0:
          $('html, body').animate({scrollTop: $("#abt").offset().top}, 2000);
        break;
          case 1:
          $('html, body').animate({scrollTop: $("#coop").offset().top}, 2000);
          break;
      }
    });
  });
  btns2.each(function(i){
    $(this).on('click', function(){
      switch (i) {
        case 0:
          $('html, body').animate({scrollTop: $("#pictures").offset().top}, 2000);
        break;
          case 1:
          $('html, body').animate({scrollTop: $("#contact").offset().top}, 2000);
          break;
      }
    });
  });
});
