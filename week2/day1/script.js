let display = document.getElementById("display")

function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b == 0) {
        return "Error"
    } else {
        return a / b
    }
}

function press(value) {
    display.value += value
}

function clearDisplay(value) {
    display.value = ""
}

function calculate() {
    let exp = display.value

    let match = exp.match(/(\d+)([+\-*/])(\d+)/)

    if (!match) {
        display.value = "Invalid";
        return
    }

    let a = Number(match[1])
    let op = match[2]
    let b = Number(match[3])

    let result;

    switch (op) {
        case "+":
            result = add(a, b)
            break

        case "-":
            result = sub(a, b)
            break

        case "*":
            result = multiply(a, b)
            break

        case '/':
            result = divide(a, b)
            break

        default:
            result = "Invalid"
    }
      display.value = result
}