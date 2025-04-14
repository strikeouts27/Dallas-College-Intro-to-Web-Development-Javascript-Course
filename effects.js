$(document).ready(function () {
  // Initially hide the form
  $("#newsSignup").hide();

  // Assign an onclick event to the #signuplink element
  document.getElementById("signuplink").onclick = function (event) {
    event.preventDefault(); // Prevent the default link behavior
    $("#newsSignup").slideToggle("slow", "linear"); // Toggle the visibility of the form
  };

  // Add hover effect to #slogan
  $("#slogan").hover(
    function () {
      // Mouseover: Fade out and change text to 'Hand Picked Just for You'
      $("#slogan").fadeOut("normal", "linear", function () {
        $(this).text("Hand Picked Just for You").fadeIn("normal", "linear");
      });
    },
    function () {
      // Mouseout: Fade out and change text back to 'The Power of Flowers'
      $("#slogan").fadeOut("fast", "swing", function () {
        $(this).text("The Power of Flowers").fadeIn("slow", "linear");
      });
    }
  );
});
