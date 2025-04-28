$(document).ready(function () {
  let originalSrc = $("#photo").attr("src");

  /* Apply hover effect to smaller images */
  $(".thumbnail").hover(
    function (event) {
      // Mouse enters the smaller image
      let newSrc = $(event.currentTarget).attr("src");
      $("#photo").attr("src", newSrc);
    },
    function () {
      // Mouse leaves the smaller image
      $("#photo").attr("src", originalSrc);
    }
  );

  /* Update the large picture on click */
  $(".thumbnail").on("click", function (event) {
    // Update the originalSrc to the clicked image's src
    originalSrc = $(event.currentTarget).attr("src");
    $("#photo").attr("src", originalSrc);
  });
});
