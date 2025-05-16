$(document).ready(function () {
  // Your jQuery code here

  $(".jQueryToggleButton").on("click", function () {
    $(".jqueryLogo1").fadeToggle();
  });

  $(".SlideUpButton").on("click", function () {
    $(".jQueryLogo2").slideUp();
  })

  $(".SlideDownButton").on("click", function () {
    $(".jQueryLogo2").slideDown();
  }
);

  // Converts US dollars to British pounds
  function dollarsToPounds(dollars) {
    const exchangeRate = 0.79; // Example rate, update as needed
    return dollars * exchangeRate;
  }

  // Example usage:
  const pounds = dollarsToPounds(100);
  console.log(`100 USD is ${pounds} GBP`);
}); 