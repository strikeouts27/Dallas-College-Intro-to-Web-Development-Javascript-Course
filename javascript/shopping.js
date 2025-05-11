$(document).ready(function () {
  // Validation for Personal Information fields
  $("#name").blur(function () {
    if ($(this).val().trim() === "") {
      $("#nameErr").text("Name is required.");
    } else {
      $("#nameErr").text("");
    }
  });

  $("#email").blur(function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ($(this).val().trim() === "") {
      $("#emailErr").text("Email is required.");
    } else if (!emailRegex.test($(this).val())) {
      $("#emailErr").text("Enter a valid email address.");
    } else {
      $("#emailErr").text("");
    }
  });

  $("#address").blur(function () {
    if ($(this).val().trim() === "") {
      $("#addressErr").text("Billing address is required.");
    } else {
      $("#addressErr").text("");
    }
  });

  $("#city").blur(function () {
    if ($(this).val().trim() === "") {
      $("#cityErr").text("City is required.");
    } else {
      $("#cityErr").text("");
    }
  });

  $("#zip").blur(function () {
    const zipRegex = /^\d{5}$/;
    if ($(this).val().trim() === "") {
      $("#zipErr").text("Zip code is required.");
    } else if (!zipRegex.test($(this).val())) {
      $("#zipErr").text("Zip code must be 5 numeric characters.");
    } else {
      $("#zipErr").text("");
    }
  });

  $("#shipaddr").blur(function () {
    if ($(this).val().trim() === "") {
      $("#shipaddrErr").text("Shipping address is required.");
    } else {
      $("#shipaddrErr").text("");
    }
  });

  $("#shipcity").blur(function () {
    if ($(this).val().trim() === "") {
      $("#shipcityErr").text("Shipping city is required.");
    } else {
      $("#shipcityErr").text("");
    }
  });

  $("#shipzip").blur(function () {
    const zipRegex = /^\d{5}$/;
    if ($(this).val().trim() === "") {
      $("#shipzipErr").text("Shipping zip code is required.");
    } else if (!zipRegex.test($(this).val())) {
      $("#shipzipErr").text("Shipping zip code must be 5 numeric characters.");
    } else {
      $("#shipzipErr").text("");
    }
  });

  // Copy billing address to shipping address
  $("#copy").change(function () {
    if ($(this).prop("checked")) {
      $("#shipaddr").val($("#address").val());
      $("#shipcity").val($("#city").val());
      $("#shipzip").val($("#zip").val());
      $("#shipstate").val($("#state").val());
    }
  });

  // Calculate totals, tax, shipping, and grand total
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

    // Update the subtotal in the UI
    $("#ordertotal").text(ordertotal.toFixed(2));

    // Calculate tax based on the shipping state
    let shipState = $("#shipstate").val(); // Get the selected shipping state
    let tax = 0;

    if (shipState === "TX") {
      tax = ordertotal * 0.08; // Calculate 8% tax for Texas
    }

    // Update the tax cell in the UI
    $("#tax").text(tax.toFixed(2));

    // Calculate shipping based on the shipping state
    let shipping = 0;
    if (shipState === "TX") {
      shipping = 5.0; // $5 for Texas
    } else if (shipState === "CA" || shipState === "NY") {
      shipping = 20.0; // $20 for California and New York
    } else {
      shipping = 10.0; // $10 for all other states
    }

    // Update the shipping cell in the UI
    $("#shipping").text(shipping.toFixed(2));

    // Calculate the grand total (order total + tax + shipping)
    let grandTotal = ordertotal + tax + shipping;

    // Update the grand total cell in the UI
    $("#grandtotal").text(grandTotal.toFixed(2));
  });
});
