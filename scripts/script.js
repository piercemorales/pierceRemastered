$(document).ready(function () {

  // Custom Cursor
  // setting custom cursor coordinates on mouse location
  $(document).on('mousemove', (e) => {
    $('.cursorFilled').css({
      top: e.pageY - 7,
      left: e.pageX - 7,
    });

    $('.cursorBorder').css({
      top: e.pageY - 20,
      left: e.pageX - 20,
    });
  });



  // Animate on Scroll 
  AOS.init({
    duration: 1200,
    disable: 'phone'
  });





});