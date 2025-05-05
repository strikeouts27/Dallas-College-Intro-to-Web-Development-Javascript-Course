$(document).ready(function () {
  // Initialize jQuery Validation Plugin
  $("#order").validate({
    rules: {
      name: {
        required: true,
      },
      address: {
        required: true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
      zip: {
        required: true,
        digits: true, // Ensures only numeric values are allowed
      },
      email: {
        required: true,
        email: true, // Ensures the value is a valid email format
      },
      email2: {
        required: true,
        equalTo: "#email", // Ensures the value matches the email field
      },
      shipaddr: {
        required: true,
      },
      shipcity: {
        required: true,
      },
      shipstate: {
        required: true,
      },
      shipzip: {
        required: true,
        digits: true,
      },
    },
    messages: {
      name: "Please enter your name.",
      address: "Please enter your billing address.",
      city: "Please enter your city.",
      state: "Please select your state.",
      zip: {
        required: "Please enter your zip code.",
        digits: "Please enter only numeric values for the zip code.",
      },
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address.",
      },
      email2: {
        required: "Please confirm your email address.",
        equalTo: "Email addresses do not match.",
      },
      shipaddr: "Please enter your shipping address.",
      shipcity: "Please enter your shipping city.",
      shipstate: "Please select your shipping state.",
      shipzip: {
        required: "Please enter your shipping zip code.",
        digits: "Please enter only numeric values for the shipping zip code.",
      },
    },
    errorPlacement: function (error, element) {
      // Place the error message in the associated span tag
      const errorId = element.attr("id") + "Err";
      $("#" + errorId).text(error.text());
    },
    success: function (label, element) {
      // Clear the error message when the field is valid
      const errorId = $(element).attr("id") + "Err";
      $("#" + errorId).text("");
    },
  });
});
