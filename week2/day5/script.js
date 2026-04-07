const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },
    {
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",
    }
]


const questionEl = document.getElementById("quiz-question")
const optionA = document.getElementById("text-option-a")
const optionB = document.getElementById("text-option-b")
const optionC = document.getElementById("text-option-c")
const optionD = document.getElementById("text-option-d")
const submitBtn = document.getElementById("submit")

let currentQuestion = 0
let score = 0

const loadQuestion = () => {
    const { question, ans1text, ans2text, ans3text, ans4text } = quiz[currentQuestion]

    questionEl.textContent = question
    optionA.textContent = ans1text
    optionB.textContent = ans2text
    optionC.textContent = ans3text
    optionD.textContent = ans4text
}


const getSelected = () => {
    const selected = document.querySelector(".answer:checked")
    return selected ? selected.nextElementSibling.textContent : null
}


const deselectAnswers = () => {
    document.querySelectorAll(".answer").forEach(el => el.checked = false)
}


submitBtn.addEventListener("click", () => {
    const selectedAnswer = getSelected()

    if (!selectedAnswer) {
        alert("Please select an answer")
        return
    }

  
    const { answer } = quiz[currentQuestion]

    if (selectedAnswer === answer) {
        score++
    }

    currentQuestion++
    deselectAnswers()

    if (currentQuestion < quiz.length) {
        loadQuestion()
    } else {
        document.querySelector(".quiz-container").innerHTML = `
            <h2>Your Score: ${score}/${quiz.length}</h2>
            <button onclick="location.reload()">Play Again</button>
        `
    }
})

loadQuestion()