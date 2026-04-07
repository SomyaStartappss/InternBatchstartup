# 🧠 Quiz App (JavaScript Mini Project)

## 📌 Project Overview

This is a simple **Quiz Application** built using **HTML, CSS, and JavaScript (ES6)**.
The app displays multiple-choice questions (MCQs), allows users to select answers, and shows the final score.

---

## 🛠️ Technologies Used

* **HTML** → Structure of the quiz
* **CSS** → Styling and layout
* **JavaScript (ES6)** → Logic and interactivity

---

## 📂 Features

* Display questions dynamically
* Multiple choice answers (radio buttons)
* Score tracking system
* Next question on submit
* Final result display
* Restart quiz option

---

## 🧩 Project Structure

* **HTML**

  * Contains quiz layout (question + options + button)
  * Uses semantic IDs and classes for JS targeting

* **CSS**

  * Centers the quiz container using Flexbox
  * Adds styling like shadows, colors, spacing
  * Makes UI clean and user-friendly

* **JavaScript**

  * Stores questions in an array (objects)
  * Uses ES6 features:

    * Arrow Functions
    * Destructuring
    * forEach
  * Handles:

    * Loading questions
    * Checking answers
    * Updating score
    * Moving to next question

---

## ⚙️ How It Works

1. When the page loads, the first question is displayed.
2. User selects one option using radio buttons.
3. On clicking **Submit**:

   * Selected answer is checked
   * Score is updated if correct
   * Next question loads
4. After last question:

   * Final score is displayed
   * Option to restart quiz is shown

---

## 💡 Key Concepts Used

### 🔹 Destructuring

Extract values from objects easily:

```js
const { question, ans1text } = quiz[currentQuestion]
```

### 🔹 Arrow Functions

Short and modern function syntax:

```js
const loadQuestion = () => { }
```

### 🔹 DOM Manipulation

Updating HTML dynamically using JavaScript:

```js
element.textContent = "New Value"
```

### 🔹 Event Handling

Listening to user actions:

```js
button.addEventListener("click", handler)
```

---

## 🎨 CSS Highlights

* **Flexbox** used for centering content
* **Box-shadow & border-radius** for modern UI
* **Hover effects** on buttons
* Clean spacing and typography for readability

---

## 🚀 Future Improvements

* Add timer for each question ⏱️
* Show correct/wrong answers visually ✔ ❌
* Add progress bar
* Fetch questions from API
* Store high scores using Local Storage

---

## 📊 Conclusion

This project helps in understanding:

* DOM manipulation
* Event handling
* ES6 JavaScript features
* Building interactive UI

---

## 🙌 Author

Somya Nigam
