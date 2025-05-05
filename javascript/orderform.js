$(document).ready(function () {
  // Waits for the DOM to be fully loaded before executing the code inside this function.

  // Form validation
  $("#signupForm").validate({
    // Initializes the jQuery Validation Plugin on the form with the ID "signupForm".

    rules: {
      // Specifies validation rules for the form fields.

      email: {
        required: true,
        // The "email" field is required (cannot be left blank).

        email: true,
        // Ensures the value entered in the "email" field is in a valid email format.
      },
      address: {
        required: true,
        // The "address" field is required (cannot be left blank).
      },
      city: {
        required: true,
        // The "city" field is required (cannot be left blank).
      },
      shippingAddress: {
        required: true,
        // The "shippingAddress" field is required (cannot be left blank).
      },
      shippingCity: {
        required: true,
        // The "shippingCity" field is required (cannot be left blank).
      },
    },
    messages: {
      // Specifies custom error messages for each field if validation fails.

      email: "Please enter a valid email address",
      // Custom error message for the "email" field if it is empty or invalid.

      address: "Please enter your billing address",
      // Custom error message for the "address" field if it is empty.

      city: "Please enter your city",
      // Custom error message for the "city" field if it is empty.

      shippingAddress: "Please enter your shipping address",
      // Custom error message for the "shippingAddress" field if it is empty.

      shippingCity: "Please enter your shipping city",
      // Custom error message for the "shippingCity" field if it is empty.
    },
  }); // end of form validate
  // Ends the initialization of the jQuery Validation Plugin for the form.

  // Copy billing fields to shipping fields when the checkbox is checked
  $("#copy").change(function () {
    // Adds an event listener to the checkbox with the ID "copy".
    // This function is triggered whenever the checkbox is checked or unchecked.

    if ($(this).is(":checked")) {
      // Checks if the checkbox is checked.

      $("#shipaddr").val($("#address").val());
      // Copies the value from the "address" field to the "shipaddr" field.

      $("#shipcity").val($("#city").val());
      // Copies the value from the "city" field to the "shipcity" field.

      $("#shipzip").val($("#zip").val());
      // Copies the value from the "zip" field to the "shipzip" field.

      $("#shipstate").val($("#state").val());
      // Copies the value from the "state" field to the "shipstate" field.
    } else {
      // If the checkbox is unchecked:

      $("#shipaddr").val("");
      // Clears the value of the "shipaddr" field.

      $("#shipcity").val("");
      // Clears the value of the "shipcity" field.

      $("#shipzip").val("");
      // Clears the value of the "shipzip" field.

      $("#shipstate").val("");
      // Clears the value of the "shipstate" field.
    }
  });
});
