let itemCount = 0; // Variable to count the items in the shopping cart

const deleteButtonHTML = '<span class="del">Remove</span>'; // HTML for the delete button

// Main function to initialize the application
function Main() {
  // Add a click event to the .add class (Add to Cart buttons)
  document.querySelectorAll(".add").forEach((button) => {
    button.addEventListener("click", function () {
      // Increment the shopping cart count by 1
      itemCount++;

      // Hide the #empty list item if itemCount > 0
      if (itemCount > 0) {
        $("#empty").hide(); // Use jQuery to hide the #empty list item
      }

      // Get the text from the name and id attributes of the clicked element
      const itemName = this.getAttribute("name"); // Name of the flower
      const itemId = this.getAttribute("id"); // ID of the clicked element

      // Create the list item using the cartLink variable
      const cartLink =
        "<li class='cartItem' name='" +
        itemId +
        "'>" +
        itemName +
        " " +
        deleteButtonHTML +
        "</li>";

      // Append the new list item to the end of the #cart ul
      const cart = document.getElementById("cart");
      cart.insertAdjacentHTML("beforeend", cartLink);

      // Hide the Add to Cart button
      this.style.display = "none";
    });
  });

  // Delegate a click event to the remove buttons in the shopping cart
  document.getElementById("cart").addEventListener("click", function (event) {
    if (event.target.classList.contains("del")) {
      const listItem = event.target.parentElement; // Get the parent <li> element
      const itemId = listItem.getAttribute("name"); // Get the name attribute (id of the flower)

      // Remove the parent <li> from the cart
      listItem.remove();

      // Deduct 1 from the item count
      itemCount--;

      // If the item count is 0, show the #empty list item 
      if (itemCount === 0) {
        $("#empty").show(); // Use jQuery to show the #empty list item
      }

      // Show the Add to Cart button for the associated flower
      document.getElementById(itemId).style.display = "block";
    }
  });

  // Add a click event to the star images inside a span with the class 'rating'
  document.querySelectorAll(".rating img").forEach((star) => {
    star.addEventListener("click", function () {
      const allStars = this.parentElement.querySelectorAll("img"); // Get all sibling stars
      const clickedIndex = Array.from(allStars).indexOf(this); // Get the index of the clicked star

      // Reset all stars to 'staroff.gif'
      allStars.forEach((img) => {
        img.src = "/gif/staroff.gif";
      });

      // Set the clicked star and all previous stars to 'staron.gif'
      for (let i = 0; i <= clickedIndex; i++) {
        allStars[i].src = "/gif/staron.gif";
      }
    });
  });
}

// Call the Main function to start the application
Main();
