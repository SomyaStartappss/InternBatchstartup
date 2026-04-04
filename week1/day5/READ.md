# Counter App

This is a simple web-based Counter application built using **HTML, CSS, and JavaScript**. The app allows users to increment, decrement, and reset a counter within a defined range.

---

## Project Description

The Counter App provides a clean and interactive interface for keeping track of a numeric value. Users can increase or decrease the value, and reset it to start over.

**Features:**

- Increment the counter by 1.
- Decrement the counter by 1.
- Reset the counter to 0.
- Maximum and minimum limits with alerts to prevent overflow or underflow.
- Interactive and visually appealing UI.

---

## Technologies Used

- **HTML**: Creates the structure of the app including buttons and display box.
- **CSS**: Styles the layout, colors, fonts, and buttons.
- **JavaScript**: Handles counter logic, event listeners, and limits.

---

## How It Works

1. **Counter Logic**:
   - The counter starts at `0`.
   - The maximum value is `10` and the minimum value is `0`.
   - When trying to go beyond these limits, an alert is shown.

2. **User Interaction**:
   - Clicking the **+ button** increments the counter.
   - Clicking the **- button** decrements the counter.
   - Clicking the **Reset button** sets the counter back to `0`.

3. **Implementation**:
   - A `createCounter` function is used to encapsulate the counter state and methods (`increment`, `decrement`, `reset`).
   - Event listeners are attached to buttons to update the display dynamically.
   - The UI updates in real-time to reflect the counter value.

---

## Usage

1. Open the project in a web browser.
2. Use the **+ button** to increase the counter.
3. Use the **- button** to decrease the counter.
4. Click **Reset** to set the counter back to zero.
5. Alerts notify you if the counter reaches its minimum or maximum limits.

---

## Summary

This project demonstrates:

- Basic DOM manipulation and event handling in JavaScript.
- Using closures to maintain a private counter state.
- Simple interactive UI design with HTML and CSS.
- Handling user input and limiting actions with alerts.

---

**Author:** Somya Nigam