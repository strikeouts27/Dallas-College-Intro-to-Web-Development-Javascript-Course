$(document).ready(function () {
  // Add mouseover event to change the color of h1 and h2
  $("h1, h2").on("mouseover", function () {
    $(this).css("color", "white"); // Change to your desired color
  });

  // Add mouseout event to change the color back to the original
  $("h1, h2").on("mouseout", function () {
    $(this).css("color", "black"); // Change back to the original color
  });

  // Add click event to the flower class
  $(".flower").on("click", function () {
    $(".botanic").hide(); // Hide all botanic names
    $(this).find(".botanic").show(); // Show the botanic name for the clicked flower
  });

  // Add hover event for the .pic class
  $(".pic").hover(
    function (evt) {
      // Get the title attribute and create the id for the .imgdiv
      const imgId = "#" + $(this).attr("title");

      // Get the X and Y coordinates of the event
      const x = evt.pageX + 150; // Add 150 to move it to the right
      const y = evt.pageY;

      // Set the top and left CSS properties of the associated .imgdiv
      $(imgId)
        .css({
          top: y + "px", // Set the top position
          left: x + "px", // Set the left position
        })
        .show(); // Show the image
    },
    function () {
      // Get the title attribute and create the id for the .imgdiv
      const imgId = "#" + $(this).attr("title");

      // Hide the associated image div when the mouse leaves
      $(imgId).hide();
    }
  );
});
