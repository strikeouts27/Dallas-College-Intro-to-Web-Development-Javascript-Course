$(document).ready(function () {
  $("h1, h2").mouseover(function () {
    $(this).css("color", "blue"); // Change the text color to blue
  });

  $("h1, h2").mouseout(function () {
    $(this).css("color", "black"); // Revert the text color to black
  });
});
