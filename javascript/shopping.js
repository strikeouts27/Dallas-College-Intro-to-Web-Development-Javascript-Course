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
      // Get the name and id attributes
      const itemName = this.getAttribute("name");
      const itemId = this.getAttribute("id");
      document.createElement("li"); 
      itemName.classList.add("cartItem"); 
      newItem.setAttribute("name", itemId); 
      newItem.textContent = `Item: ${itemName}`; 
      
      
        });
    }); 
}

// Call the Main function to start the application
Main();
