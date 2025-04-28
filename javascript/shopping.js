
let shoppingCart = 0; 
const deleteButton = '<span class= "del">Remove</span>'; 

$('.add').on('click', function() {
    shoppingCart ++; 

    if (shoppingCart > 0){
        $('#empty').hide()

    }

    let itemName = $(this).attr('name'); 
    let itemId = $(this).attr('id'); 

    // Create a new <li> element
    const newListItem = document.createElement('li'); 
    newListItem.className = "cartItem"; // Add dclass 'cartItem'
    newListItem.textContent = itemName; // Set the text content to the item name. 
    newListItem.setAttribute('name', itemId); // Set the 'name' attribute to the item's id. 

    var cartLink =
      "<li class='cartItem' name='" +
      itemID +
      "'>" +
      itemName +
      " <span class='del'>Remove</span></li>";

    document.getElementById('cart').appendChild(newListItem); 
    $(this).hide(); 

})