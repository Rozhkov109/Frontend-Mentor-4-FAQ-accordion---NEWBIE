const questions = [
  document.getElementById("question-1"),
  document.getElementById("question-2"),
  document.getElementById("question-3"),
  document.getElementById("question-4"),
]

const answers = [
  document.getElementById("answer-1"),
  document.getElementById("answer-2"),
  document.getElementById("answer-3"),
  document.getElementById("answer-4"),
]

function answerShow(question, answer) {
  const image = question.querySelector("img")
  if (answer.style.display == "block") {
    answer.style.display = "none"
    image.src = "/assets/images/icon-plus.svg"
  } else {
    answer.style.display = "block"
    image.src = "/assets/images/icon-minus.svg"
  }
}

questions.forEach((question, index) => {
  question.addEventListener("click", () => answerShow(question, answers[index]))
})
