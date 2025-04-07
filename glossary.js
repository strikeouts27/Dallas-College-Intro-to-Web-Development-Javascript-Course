$(document).ready(function() {
  console.log('Ready!');
  // jQuery function calls go here...
  $('h1, h2').hover(
  function() {
    $(this).css("color", "green"); 
  },
  function() {
    // Mouseout function: Revert background color to white
    $(this).css("color", "black"); 
  });

});


