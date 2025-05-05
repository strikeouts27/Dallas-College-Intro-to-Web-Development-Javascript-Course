$(document).ready(function () {
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
  }); // end of form validate

  // Copy billing fields to shipping fields when the checkbox is checked
  $("#copy").change(function () {
    if ($(this).is(":checked")) {
      $("#shipaddr").val($("#address").val());
      $("#shipcity").val($("#city").val());
      $("#shipzip").val($("#zip").val());
      $("#shipstate").val($("#state").val());
    } else {
      $("#shipaddr").val("");
      $("#shipcity").val("");
      $("#shipzip").val("");
      $("#shipstate").val("");
    }
  });
});
