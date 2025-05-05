$(document).ready(function () {
  // Copy billing fields to shipping fields when the checkbox is checked
  $("#copy").change(function () {
    if ($(this).is(":checked")) {
      // Copy billing fields to shipping fields
      $("#shipaddr").val($("#address").val());
      $("#shipcity").val($("#city").val());
      $("#shipzip").val($("#zip").val());

      // Copy the selected state from billing to shipping
      $("#shipstate").val($("#state").val());
    } else {
      // Clear shipping fields if the checkbox is unchecked
      $("#shipaddr").val("");
      $("#shipcity").val("");
      $("#shipzip").val("");
      $("#shipstate").val(""); // Clear the shipping state dropdown
    }
  });

  // Form validation
  $("#signupForm").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      address: {
        required: true,
      },
      city: {
        required: true,
      },
      shippingAddress: {
        required: true,
      },
      shippingCity: {
        required: true,
      },
    },
    messages: {
      email: "Please enter a valid email address",
      address: "Please enter your billing address",
      city: "Please enter your city",
      shippingAddress: "Please enter your shipping address",
      shippingCity: "Please enter your shipping city",
    },
  });
});
