// Sample menu data (Consider fetching this data from a server in a real-world scenario)

const menu = {
    Starters: [{name:"Garlic Bread",price:2.22 },{name:"Bruschetta",price:3.00}],
    MainCourses: [{name:"Margherita Pizza",price:10.99},{name:"Spaghetti Carbonara",price:11.99}],
    Desserts: [{name:"Tiramisu",price:199.99},{name:"Cheesecake",price:100.99}],
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("category");
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;

        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemListElement = document.createElement("ul");

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const listItemElement = document.createElement('li');
            // Set the text content of the list item element to the item name
            listItemElement.textContent = item.name;
            // Attach a click event listener to the list item to add it to the order
            listItemElement.addEventListener("click", () => {
                addToOrder(item); // Pass the clicked item to addToOrder function
            });
            // Append the list item to the list of items
            itemListElement.appendChild(listItemElement);
        });
        

        // Append a list of items element to the menu container
        menuContainer.appendChild(itemListElement);
    }
}

// Callback function for adding an item to the order
function addToOrder(item) {
    // Get the order items list and the order total element from the HTML
    const orderList = document.getElementById("order-items");
    // Create a list item for the order
    const listItem = document.createElement("li");
    // Set the text content of the list item to the item name and price
    listItem.textContent = item.name;
    // Append the list item to the order items list
    orderList.appendChild(listItem);

    // Calculate and update the total price
    const orderTotalElement = document.getElementById('order-total');
    // Update the text content of the order total element with the new total
    let orderTotal = parseFloat(orderTotalElement.textContent || 0);
    orderTotal += item.price;
    orderTotalElement.textContent = orderTotal.toFixed(2);

    // Check if all orders have been added, if so, clear the order list
    if (Object.values(menu).flatMap(items => items).length === orderList.children.length) {
        clearOrderList();
    }
}

// Function to clear the order list
function clearOrderList() {
    const orderList = document.getElementById("order-items");
    orderList.innerHTML = ""; // Clear the order list

    // Reset the order total to zero
    const orderTotalElement = document.getElementById('order-total');
    orderTotalElement.textContent = "0.00";
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
   initMenuSystem(menu);
