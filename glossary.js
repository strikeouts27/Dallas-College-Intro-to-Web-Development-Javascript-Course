$(document).ready(function () {
  console.log("Document Object Has Loaded!");

  // Mouseover and mouseout events for h1 and h2
  $("h1, h2").hover(
    function () {
      $(this).css("color", "blue"); // Change color to blue on mouseover
    },
    function () {
      $(this).css("color", "black"); // Revert color to black on mouseout
    }
  );
});
