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

  // Add mouseover and mouseout events for h1 and h2
  $("h1, h2").hover(
    function () {
      $(this).css("color", "blue"); // Change color to blue on mouseover
    },
    function () {
      $(this).css("color", "black"); // Revert color to black on mouseout
    }
  );

  // Add a hover event for the .pic class
  $(".pic").hover(
    function (evt) {
      const imgId = "#" + $(this).attr("title");
      const x = evt.pageX + 150;
      const y = evt.pageY;

      $(imgId)
        .css({
          top: y + "px",
          left: x + "px",
        })
        .show();
    },
    function () {
      const imgId = "#" + $(this).attr("title");
      $(imgId).hide();
    }
  );

  // Add a keypress event to navigate to flowers
  $(document).keypress(function (evt) {
    const keyPressed = String.fromCharCode(evt.which).toLowerCase(); // Get the key pressed and convert to lowercase
    window.location = "#" + keyPressed; // Navigate to the corresponding flower
  });
});
