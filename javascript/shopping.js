let itemCount = 0;

const deleteButtonHTML = '<span class="del">Remove</span>';

// Main function to initialize the application
function Main() {
  // Add a click event to the #add buttons
  document.querySelectorAll("#add").forEach((button) => {
    button.addEventListener("click", function () {
      // Increment the item count
      itemCount++;

      // Hide the #empty list item if itemCount > 0
      if (itemCount > 0) {
        $("#empty").hide(); // Use jQuery to hide the #empty list item
      }

      // Additional logic for adding items can go here
    });
  });
}

// Call the Main function to start the application
Main();
