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

  $('#copy').click(function() {
    if ($(this).prop('checked')) {
      // copies a value from #address
      var address = $('#address').val();
      // assigns the value from #address to #shipaddr
      $('#shipaddr').val(address);

      let city = $('#city').val();
      $('#shipcity').val(city); 

      let zipcode = $("#zip").val();
      $("#shipzip").val(zipcode);
      
    }
  });

  // grab the values of the cells I want by their id's

  
  $(".qty").blur(function () {
    let ordertotal = 0; // Initialize order total to 0

    // Iterate over each quantity input
    $(".qty").each(function (index) {
      let quantity = parseInt($(this).val()); // Get the quantity value and convert to an integer

      // If the quantity is not numeric or invalid, set it to 0
      if (isNaN(quantity) || quantity < 0) {
        quantity = 0;
        $(this).val(quantity); // Update the input field to show 0
      }

      // Get the price using the id "price" + (index + 1)
      let price = parseFloat($("#price" + (index + 1)).text());

      // Calculate the total for this item
      let total = quantity * price;

      // Update the total in the table cell with id "total" + (index + 1)
      $("#total" + (index + 1)).text(total.toFixed(2));

      // Add the total to the overall order total
      ordertotal += total;
    });

    // Update the overall order total in the UI
    $("#ordertotal").text(ordertotal.toFixed(2));
  });

  
});
