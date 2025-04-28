$(document).ready(function () {
  let shoppingCart = 0;
  const deleteButton = '<span class="del">Remove</span>';

  // Add to Cart functionality
  $(".add").on("click", function () {
    shoppingCart++;

    if (shoppingCart > 0) {
      $("#empty").hide();
    }

    // Get the text from the name and id attributes of the clicked element
    let itemName = $(this).attr("name");
    let itemId = $(this).attr("id");

    // Create a new <li> element
    const newListItem = document.createElement("li");
    newListItem.className = "cartItem"; // Add class 'cartItem'
    newListItem.setAttribute("name", itemId); // Set the 'name' attribute to the item's id
    newListItem.innerHTML = `${itemName} ${deleteButton}`; // Set the inner HTML

    // Append the new list item to the #cart ul
    document.getElementById("cart").appendChild(newListItem);

    // Hide the clicked Add to Cart button
    $(this).hide();
  });

  // Delegate click event to the "Remove" buttons in the shopping cart
  $("#cart").on("click", ".del", function () {
    // Get the parent <li> element
    const parentListItem = $(this).parent();

    // Get the 'name' attribute of the parent <li> (which corresponds to the id of the Add to Cart button)
    const itemId = parentListItem.attr("name");

    // Show the corresponding Add to Cart button
    $(`#${itemId}`).show();

    // Remove the parent <li> from the cart
    parentListItem.remove();

    // Decrement the shopping cart counter
    shoppingCart--;

    // Show the "empty cart" message if the cart is empty
    if (shoppingCart === 0) {
      $("#empty").show();
    }
  });

  $(".rating").on("click", "img", function () {
    // Change the image source of all siblings to "staroff.gif"
    $(this).siblings("img").attr("src", "gif/staroff.gif");

    // Change the image source of the clicked star to "staron.gif"
    $(this).attr("src", "gif/staron.gif");

    // Change the image source of all previous stars to "staron.gif"
    $(this).prevAll("img").attr("src", "gif/staron.gif");
  });


    
});
