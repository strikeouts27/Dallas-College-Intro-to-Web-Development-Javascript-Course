$(document).ready(function () {
  /* Using hover() function */
  $('#thumbs img').hover(
    function () {
      $(this).css({
        'border': '2px solid darkgreen',
        'box-shadow': '0 0 10px rgba(0, 100, 0, 0.7)'
      });
    }, 
    function () {
      $(this).css({
        'border': '',
        'box-shadow': ''
      }); 
    }
  );


  
});