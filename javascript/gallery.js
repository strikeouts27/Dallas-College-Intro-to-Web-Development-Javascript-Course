$(document).ready(function () {
  /* Using hover() function */
  $("#thumbs img").hover(
    function () {
      $(this).css({
        border: "2px solid darkgreen",
        "box-shadow": "0 0 10px rgba(0, 100, 0, 0.7)",
      });
    },
    function () {
      $(this).css({
        border: "",
        "box-shadow": "",
      });
    }
  );

  // Loop through all img tags in the #gallery div (thumbnail images)
  $("#thumbs img").each(function () {
    // Get the src attribute of the thumbnail image
    var imgFile = $(this).attr("src");
    // When the image is clicked, assign the src attribute to the lgPic
    $(this).click(function () {
      $("#lgPic").attr("src", imgFile);
    }); // End click
  }); // End each

  // Add a click event to the large image to open it in a new window using the src attribute as the URL
  $("#lgPic").on("click", function () {
    var imgSrc = $(this).attr("src"); // Get the src of the large image
    window.open(imgSrc, "_blank"); // Open the image in a new tab
  });
}); // End ready
