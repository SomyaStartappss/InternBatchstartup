# Product Filter and Toggle View App

This project is a simple product listing web application built using **HTML, CSS, and JavaScript**. It allows users to browse products and interactively filter, search, sort, and change the layout of product listings.

---

## Project Description

The app displays products in a structured format with the following functionalities:

- **Search**: Users can search for products by their names using the search input.
- **Category Filter**: Products can be filtered based on categories such as Men, Women, Kids, and GenZ.
- **Price Filter**: Products can be filtered by price ranges:
  - Below ₹500
  - ₹500 - ₹1000
  - Above ₹1000
- **Sort by Price**: Users can sort products in ascending or descending order of price.
- **Toggle View**: Users can switch between grid view and list view for better visual preference.
- **Responsive Design**: The layout adjusts to different screen sizes, ensuring usability on mobile devices and desktops.

---

## Technologies Used

- **HTML**: Provides the structure of the page including product cards, filters, and buttons.
- **CSS**: Styles the product cards, filters, layout, and makes the app responsive.
- **JavaScript**: Implements dynamic functionality such as search, filters, sorting, and toggle view.

---

## How It Works

1. **Product Data**: The products are stored in a JavaScript array of objects, each containing name, category, price, and image.
2. **Rendering**: JavaScript dynamically generates HTML for each product card based on the data array.
3. **Filters and Sorting**:
   - When a user types in the search box or selects a filter/sort option, the JavaScript function updates the displayed products in real-time.
   - Filtering checks product names, categories, and price ranges.
   - Sorting rearranges the products based on selected price order.
4. **Toggle View**:
   - The toggle button switches the product container between grid and list layout using CSS class changes.

---

## Usage

- Open the project in a browser.
- Use the **search bar** to find a product by name.
- Select a **category** to see only products in that category.
- Select a **price range** to filter products by cost.
- Use the **sort dropdown** to order products by price.
- Click the **Toggle View** button to switch between grid and list layouts.
- The product display updates dynamically as selections are made.

---

## Summary

This project demonstrates how to create an interactive and responsive product display page using core web technologies. It provides hands-on experience in:

- DOM manipulation with JavaScript
- Using arrays and objects to manage data
- Dynamic rendering of HTML content
- CSS styling and responsive layouts
- Handling user interactions and events

---

**Author:** Somya Nigam