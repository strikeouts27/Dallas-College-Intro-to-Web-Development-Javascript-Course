$(document).ready(function () {
  console.log("Ready!");

  // Mouseover event to change color to blue
  $("h1, h2").mouseover(function () {
    $(this).css("color", "blue");
  });

  // Mouseout event to change color back to black
  $("h1, h2").mouseout(function () {
    $(this).css("color", "black");
  });
});
