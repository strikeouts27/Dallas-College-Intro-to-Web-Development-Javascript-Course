$(document).ready(function () {
  // Hide all elements with the class 'botanic' on page load
  $(".botanic").hide();

  // jQuery function calls go here...
  $("h1, h2").hover(
    function () {
      $(this).css("color", "green");
    },
    function () {
      // Mouseout function: Revert background color to white
      $(this).css("color", "black");
    }
  );

  // Add a click event to the flower class
  $(".flower").click(function () {
    $(".botanic").hide(); // Hide all botanic names
    $(this).children(".botanic").show(); // Show only the botanic name for the clicked flower
  });
});
