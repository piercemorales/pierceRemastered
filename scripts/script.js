// const cursor = document.querySelector('.cursor')

// document.addEventListener('mousemove', e => {
//   cursor.setAttribute('style', 'top: '+(e.pageY - 10)+'px; left: '+(e.pageX - 10)+'px;')
// })

$(document).ready(function () {
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
});