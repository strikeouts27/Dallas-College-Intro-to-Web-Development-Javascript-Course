$(document).ready(function () {
  $("#name").blur(function () {
    if ($(this).val() == "") {
      // set error for empty field.
      $("#nameErr").text("Username is required");
    } else {
      // set error to blank in case a prior error message was displayed.
      $("#adddressErr").text("");
    }
  }); // end validate username

  $("#address").blur(function () {
    if ($(this).val() == "") {
      // set error for empty field.
      $("#addressErr").text("Billing address is required");
    } else {
      // set error to blank in case a prior error message was displayed.
      $("addressErr").text("");
    }
  }); // end validate address

  $("#city").blur(function () {
    if ($(this).val() == "") {
      // set error for empty field.
      $("#cityErr").text("City is required");
    } else {
      // set error to blank in case a prior error message was displayed.
      $("#cityErr").text("");
    }
  }); // end validate city

  $("#zip").blur(function () {
    if ($(this).val() == "") {
      // set error for empty field.
      $("#zipErr").text("Zip code is required");
    } else {
      // set error to blank in case a prior error message was displayed.
      $("#zipErr").text("");
    }
  }); // end validate zip code

  $("#email").blur(function () {
    if ($(this).val() == "") {
      // set error for empty field.
      $("#emailErr").text("Email is required");
    } else {
      // set error to blank in case a prior error message was displayed.
      $("#emailErr").text("");
    }
  }); // end validate email

  $("#email2").blur(function () {
    if ($(this).val() == "") {
      // set error for empty field.
      $("#email2Err").text("Confirming email is required");
    } else {
      // set error to blank in case a prior error message was displayed.
      $("#email2Err").text("");
    }
  }); // end validate email2 
});
