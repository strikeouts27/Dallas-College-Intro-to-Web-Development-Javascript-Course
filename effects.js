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

  // Animate the #rose element
  $("#rose").css({ right: "-100px", opacity: 0 }).animate(
    {
      right: "100px", // Move to 100px from the right
      opacity: 1, // Fade in
    },
    {
      duration: 2000, // Animation duration in milliseconds (2 seconds)
      easing: "swing", // Use the swing easing function
    }
  );

  // Add submit event to the form
  $("#newsSignup").submit(function (event) {
    event.preventDefault(); // Stop the default form submission

    // Display an alert message
    alert("Thank you for registering");

    // Hide the newsSignup form
    $("#newsSignup").hide();

    // Fade the signuplink anchor tag to 30% opacity
    $("#signuplink").animate(
      {
        opacity: 0.3, // Set opacity to 30%
      },
      {
        duration: 1000, // Animation duration in milliseconds (1 second)
        easing: "swing", // Use the swing easing function
      }
    );
  });
});
