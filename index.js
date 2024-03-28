// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById(menu);

    // Loop through each category and its items in the menu object
       for (const [category, items] of Object.entries(menu)) {

         // Create an element to represent the category
         const categoryElement = document.createElement("div");
    
       // Set the text content of the category element to the category name
         categoryElement.textContent = category;

        // Append the category element to the menu container
          menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const listElement = document.createElement("ul");

        // Append a list of items element to the menu container
        menuContainer.appendChild(listElement);

        // Loop through the items in the category and create list items
           for (i = 0; i < items.length; i++) {
        // Create a list item element
            const listItemElement = document.createElement("li")
      
        // Set the text content of the list item element to the item name
            listItemElement.textContent = items[i]; //Access individual items using index 'i'


            // Attach a click event listener to the list item to add it to the order
               listItemElement.addEventListener ("click",() => {
                addToOrder(items[i]) // Pass the clicked item to addToOrder function
              });
            // Append the list item to the list of items
            menuContainer.appendChild(listItemElement);
           }        
        } 
}


// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
       const orderItemsLists = document.getElementById("order-items");
       const orderTotalElement = document.getElementById("order-total");

    // Create a list item for the order
    const listItem = document.createElement("li");

    // Set the text content of the list item to the item name
    listItem.textContent = itemName;

    // Append the list item to the order items list
    orderItemsLists.appendChild(listItem);

    // Calculate and update the total price
    let totalPric = 0;
    const orderItems = orderItemsLists.getElementById("li");
    for (let i = o; i < orderItems.length; i++) {
     const price = parseFloat(orderItems[i].getAttribute("data-price"));
     totalPrice += price;
    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems();
}

// Start the menu system by calling the init function
initMenuSystem(menu);
