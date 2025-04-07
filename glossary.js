$(document).ready(function () {
  console.log("Document Object Has Loaded!");

  // Hide all elements with the class 'botanic' on page load
  $(".botanic").hide();

  // Hide all elements with the class 'imgdiv' on page load
  $(".imgdiv").hide();

  // Add a click event to the flower class
  $(".flower").click(function () {
    $(".botanic").hide(); // Hide all botanic names
    $(this).children(".botanic").show(); // Show only the botanic name for the clicked flower
  });

  // Hover event to handle both mouseover and mouseout for h1 and h2
  $("h1, h2").hover(
    function () {
      $(this).css("color", "blue"); // On mouseover
    },
    function () {
      $(this).css("color", "black"); // On mouseout
    }
  );

  // Hover event for the .pic class to show and hide images
  $(".pic").hover(
    function (evt) {
      const x = evt.pageX;
      const y = evt.pageY;

      // Find the associated image div and position it
      const imgId = $(this).data("img"); // Get the unique ID from the data-img attribute
      $("#" + imgId)
        .css({
          top: y + 10 + "px", // Position slightly below the cursor
          left: x + 10 + "px", // Position slightly to the right of the cursor
        })
        .show(); // Show the image
    },
    function () {
      // Hide the associated image div when the mouse leaves
      const imgId = $(this).data("img");
      $("#" + imgId).hide();
    }
  );
});
