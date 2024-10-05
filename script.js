// // Navigation bar transition when scrolling

const navbar = document.querySelector("#header");
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    navbar.classList.add("header--dark");
    scrollUp.classList.add("show");
    scrollUp.classList.remove("hide");
  } else {
    navbar.classList.remove("header--dark");
    scrollUp.classList.add("hide");
    scrollUp.classList.remove("show");
  }
});

// Show and Hide Quiz
var quizContainer = document.getElementById("quiz-container");
var exitBtn = document.getElementById("exit-btn");
var startQuiz = document.getElementById("start-quiz");
var header = document.getElementById("header");
var scrollUp = document.getElementById("scroll-up");
var planetInfo = document.getElementsByClassName("planet-info");
var wasp = document.getElementById("wasp");
var proxima = document.getElementById("proxima");
var gliese = document.getElementById("gliese");
var trappist = document.getElementById("trappist");
var burgerMenu = document.getElementById("burger-menu");
var navBar = document.getElementById("nav__bar");

function showNavBar() {
  exitBtn.classList.add("show");
  exitBtn.classList.add("hide");

  navBar.classList.add("show-nav__bar");

  burgerMenu.classList.add("hide");
}

function showQuiz() {
  quizContainer.classList.add("show");
  quizContainer.classList.remove("hide");

  header.classList.add("hide");
  header.classList.remove("show");

  scrollUp.classList.add("hide");
  scrollUp.classList.remove("show");
}

function showWasp() {
  header.classList.add("hide");
  header.classList.remove("show");

  exitBtn.classList.add("show");
  exitBtn.classList.remove("hide");

  scrollUp.classList.add("hide");
  scrollUp.classList.remove("show");

  wasp.classList.add("show");
  wasp.classList.remove("hide");
}

function showProxima() {
  header.classList.add("hide");
  header.classList.remove("show");

  exitBtn.classList.add("show");
  exitBtn.classList.remove("hide");

  scrollUp.classList.add("hide");
  scrollUp.classList.remove("show");

  proxima.classList.add("show");
  proxima.classList.remove("hide");
}

function showGliese() {
  header.classList.add("hide");
  header.classList.remove("show");

  exitBtn.classList.add("show");
  exitBtn.classList.remove("hide");

  scrollUp.classList.add("hide");
  scrollUp.classList.remove("show");

  gliese.classList.add("show");
  gliese.classList.remove("hide");
}

function showTrasppist() {
  header.classList.add("hide");
  header.classList.remove("show");

  exitBtn.classList.add("show");
  exitBtn.classList.remove("hide");

  scrollUp.classList.add("hide");
  scrollUp.classList.remove("show");

  trappist.classList.add("show");
  trappist.classList.remove("hide");
}

function hide() {
  exitBtn.classList.add("hide");
  exitBtn.classList.remove("show");

  quizContainer.classList.add("hide");
  quizContainer.classList.remove("show");

  header.classList.add("show");
  header.classList.remove("hide");

  scrollUp.classList.add("show");
  scrollUp.classList.remove("hide");

  wasp.classList.add("hide");
  wasp.classList.remove("show");

  proxima.classList.add("hide");
  proxima.classList.remove("show");

  gliese.classList.add("hide");
  gliese.classList.remove("show");

  trappist.classList.add("hide");
  trappist.classList.remove("show");

  burgerMenu.classList.remove("hide");

  navBar.classList.remove("show-nav__bar");
}

//Quiz functionality

const quizData = [
  {
    question: "What is an exoplanet?",
    a: "A planet that orbits around the Sun",
    b: "A planet that orbits a moon",
    c: "A dwarf planet in the Kuiper Belt",
    d: "A planet that orbits a star outside our solar system",
    correct: "d",
  },
  {
    question:
      "Which of the following methods is commonly used to detect exoplanets?",
    a: "Gravitational lensing",
    b: "Transit method",
    c: "Eclipse method",
    d: "Solar flares",
    correct: "b",
  },
  {
    question:
      'The "habitable zone" around a star is defined as the region where:',
    a: "The temperature is suitable for liquid water to exist",
    b: "The planet receives the most radiation",
    c: "The atmosphere can support human life",
    d: "There is no magnetic field",
    correct: "a",
  },
  {
    question:
      "Which space telescope has significantly contributed to the discovery of exoplanets?",
    a: "Spitzer Space Telescope",
    b: "Kepler Space Telescope",
    c: "James Webb Space Telescope",
    d: "Hubble Space Telescope",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question-headline");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
             <div class="reload-menu">
                <h2 class="h2-heading">You answered ${score}/${quizData.length} questions correctly</h2>
                <button class="reload-btn" onclick="location.reload()">Exit</button>
             </div>
             `;
    }
  }
});

//introdution burger menu
