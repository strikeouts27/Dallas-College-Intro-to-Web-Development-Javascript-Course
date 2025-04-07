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
      // Show the associated image and position it based on the cursor
      const imgDiv = $(this).siblings(".imgdiv");
      imgDiv.css({
        top: evt.pageY + 10 + "px", // Position 10px below the cursor
        left: evt.pageX + 10 + "px", // Position 10px to the right of the cursor
        display: "block", // Make the image visible
      });
    },
    function () {
      // Hide the image when the cursor leaves the .pic span
      $(this).siblings(".imgdiv").css("display", "none");
    }
  );
});
