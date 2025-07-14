const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who wrote the Indian National Anthem?",
    options: ["Rabindranath Tagore", "Mahatma Gandhi", "Sarojini Naidu", "Jawaharlal Nehru"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "What is the capital of INDIA?",
    options: ["Mumbai", "Uttra pradesh", "Tamil Nadu", "New Delhi"],
    answer: "New Delhi"
  },
  {
    question: "Which organ purifies blood in the human body?",
    options: ["Heart", "Lungs", "Kidneys", "Liver"],
    answer: "Kidneys"
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    answer: "Charles Babbage"
  },
  {
    question: "which country is the richest country in the world?",
    options: ["America", "Luxembourg", "China", "Dubai"],
    answer: "Luxembourg"
  },
  {
    question: " who is the first fouder of India?",
    options: ["Chandragupta Maurya", "Hanif Kureshi", "Mohandas Karamchand Gandhi", "Babur"],
    answer: "Chandragupta Maurya"
  },
   {
    question: " which place is the treasure of india?",
    options: ["Taj Mahal", "Padmanabhaswamy Temple", "Jaigarh Fort", " All of the Above"],
    answer: "All of the Above"
  }, {
    question: " what full form for INDIA?",
    options: ["Independent Nation Declared In Acceptation", "Independent Nation Declared In application", "Independent Nation Declared In Agreement", "Independent Nation Declared In August"],
    answer: "Independent Nation Declared In August"
  }, 
  {
    question: "What is the name of India's national animal?",
    options: ["Snow Leopard", "Asiatic Lion", " Indian Rhinoceros", "Royal Bengal Tiger"],
    answer: "Royal Bengal Tiger"
  },

];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const scoreBox = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionBox.innerText = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.className = "list-group-item list-group-item-action";
    btn.onclick = () => checkAnswer(btn, q.answer);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(button, correctAnswer) {
  const allOptions = document.querySelectorAll(".list-group-item");
  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.classList.add("list-group-item-success");
    } else if (btn === button) {
      btn.classList.add("list-group-item-danger");
    }
  });

  if (button.innerText === correctAnswer) score++;
}

nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").classList.add("d-none");
  resultBox.classList.remove("d-none");
  scoreBox.innerText = score;
}

// Start quiz
loadQuestion();
