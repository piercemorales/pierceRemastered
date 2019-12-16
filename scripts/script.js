$(document).ready(function () {

  // Custom Cursor
  // setting custom cursor coordinates on mouse location
  $(document).on('mousemove', (e) => {
    $('.cursorFilled').css({
      top: e.pageY - 10,
      left: e.pageX - 10,
    });

    $('.cursorBorder').css({
      top: e.pageY - 20,
      left: e.pageX - 20,
    });
  });



  // Animate on Scroll 
  AOS.init({
    duration: 2000,
    disable: "mobile"
  });





});