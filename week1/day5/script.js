let box = document.querySelector(".box")
let increment = document.querySelector(".increment")
let decrement = document.querySelector(".decrement")
let reset = document.querySelector(".reset")

function createCounter() {
    let count = 0;

    return {

        increment() {
            if (count < 10) {
                return ++count;
            }
            else {
                alert("Maximum limit excedd")
            }
        },

        decrement() {
            if (count > 0) {
                return --count;
            }
            else {
                alert("Minimum limit excedd")
            }
        },
        reset() {
            count = 0;
            return count;
        }
    }

}

let counter = createCounter()

increment.addEventListener("click", () => {
    box.textContent = counter.increment()
})

decrement.addEventListener("click", () => {
    box.textContent = counter.decrement()
})

reset.addEventListener("click", () => {
    box.textContent = counter.reset()
})