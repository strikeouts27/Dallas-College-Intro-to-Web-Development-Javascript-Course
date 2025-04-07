$(document).ready(function () {
  console.log("Document Object Has Loaded!");

  // Hide all elements with the class 'botanic' on page load
  $(".botanic").hide();

  // Hide all elements with the class 'imgdiv' on page load
  $(".imgdiv").hide();

  // Mouseover and mouseout events for h1 and h2
  $("h1, h2").hover(
    function () {
      $(this).css("color", "blue"); // Change color to blue on mouseover
    },
    function () {
      $(this).css("color", "black"); // Revert color to black on mouseout
    }
  );

  // Add a click event to the flower class
  $(".flower").click(function () {
    $(".botanic").hide(); // Hide all botanic names
    $(this).children(".botanic").show(); // Show only the botanic name for the clicked flower
  });

  // Add a hover event for the .pic class
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
