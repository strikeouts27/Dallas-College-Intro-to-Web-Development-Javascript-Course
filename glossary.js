$(document).ready(function () {
  console.log("Document Object Has Loaded!");

  // hide and show()
  $(".botanic").hide(); // Hides all elements with the class 'botanic'


  // Hover event to handle both mouseover and mouseout
  $("h1", "h2").hover(
    function () {
      $(this).css("color", "blue"); // On mouseover
    },
    function () {
      $(this).css("color", "black"); // On mouseout
    }
  );
});
