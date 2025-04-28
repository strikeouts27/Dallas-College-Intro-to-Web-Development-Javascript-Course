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

  // loop through all img tags in the #gallery div (thumbnail images)
	$('#thumbs img').each(function() {
		// get the src attribute of the thumbnail image
		var imgFile = $(this).attr('src');
		// when the image is clicked, assign the src attribute to the lgPic
		$(this).click(function() {
			$('#lgPic').attr('src', imgFile);
		});// end click
	}); // end each
}); // end ready