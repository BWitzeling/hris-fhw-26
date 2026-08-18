(() => {
  "use strict";

  const data = window.QUIZ_DATA;

  if (!data || !Array.isArray(data.questions) || data.questions.length === 0) {
    throw new Error("Die Quizdaten fehlen oder enthalten keine Fragen.");
  }

  const elements = {
    splash: document.getElementById("splashScreen"),
    app: document.getElementById("app"),
    enterQuizBtn: document.getElementById("enterQuizBtn"),
    intro: document.getElementById("intro"),
    quiz: document.getElementById("quiz"),
    result: document.getElementById("result"),
    startQuizBtn: document.getElementById("startQuizBtn"),
    restartTopBtn: document.getElementById("restartTopBtn"),
    restartBtn: document.getElementById("restartBtn"),
    nextQuestionBtn: document.getElementById("nextQuestionBtn"),
    toggleSolutionsBtn: document.getElementById("toggleSolutionsBtn"),
    questionCounter: document.getElementById("questionCounter"),
    answeredCounter: document.getElementById("answeredCounter"),
    progressBar: document.getElementById("progressBar"),
    questionText: document.getElementById("questionText"),
    answers: document.getElementById("answers"),
    resultMessage: document.getElementById("resultMessage"),
    scoreText: document.getElementById("scoreText"),
    solutions: document.getElementById("solutions")
  };

  const state = {
    questionIndex: 0,
    selectedIndex: null,
    answers: []
  };

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element && typeof value === "string") {
      element.textContent = value;
    }
  }

  function applyContent() {
    setText("eventLabelHeader", data.eventLabel);
    setText("heroTitle", data.headline);
    setText("heroText", data.heroText);
    setText("prizeLabel", data.prizeLabel);
    setText("durationLabel", data.durationLabel);
    setText("difficultyLabel", data.difficultyLabel);
    setText("resultPrizeTitle", data.resultPrizeTitle);
    setText("resultPrizeText", data.resultPrizeText);
    setText("studyText", data.studyText);

    const introSteps = document.getElementById("introSteps");
    introSteps.replaceChildren();
    data.introSteps.forEach((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      introSteps.appendChild(item);
    });

    const studyLink = document.getElementById("studyLink");
    studyLink.href = data.studyUrl;

    const newsletterLink = document.getElementById("newsletterLink");
    newsletterLink.href = data.newsletterUrl;
  }

  function enterQuiz() {
    elements.splash.classList.add("is-closing");
    elements.app.inert = false;

    window.setTimeout(() => {
      elements.splash.hidden = true;
      elements.startQuizBtn.focus();
    }, 280);
  }

  function showSplash() {
    elements.splash.hidden = false;
    elements.splash.classList.remove("is-closing");
    elements.app.inert = true;
    elements.enterQuizBtn.focus();
  }

  function showOnly(section) {
    [elements.intro, elements.quiz, elements.result].forEach((item) => {
      item.hidden = item !== section;
    });
  }

  function resetQuiz() {
    state.questionIndex = 0;
    state.selectedIndex = null;
    state.answers = [];
    elements.solutions.replaceChildren();
    elements.solutions.hidden = true;
    elements.toggleSolutionsBtn.setAttribute("aria-expanded", "false");
    elements.toggleSolutionsBtn.textContent = "Lösungen anzeigen";
    elements.progressBar.style.width = "0%";
    elements.answeredCounter.textContent = "0 beantwortet";
    showOnly(elements.intro);
    window.scrollTo({ top: 0, behavior: "smooth" });
    showSplash();
  }

  function startQuiz() {
    state.questionIndex = 0;
    state.selectedIndex = null;
    state.answers = [];
    showOnly(elements.quiz);
    renderQuestion();
  }

  function selectAnswer(index) {
    state.selectedIndex = index;
    elements.nextQuestionBtn.disabled = false;

    elements.answers.querySelectorAll(".answer").forEach((answer, answerIndex) => {
      answer.classList.toggle("is-selected", answerIndex === index);
    });
  }

  function renderQuestion() {
    const question = data.questions[state.questionIndex];
    const questionNumber = state.questionIndex + 1;
    const isLastQuestion = questionNumber === data.questions.length;

    elements.questionCounter.textContent = `Frage ${questionNumber} von ${data.questions.length}`;
    elements.answeredCounter.textContent = `${state.answers.length} beantwortet`;
    elements.progressBar.style.width = `${(state.answers.length / data.questions.length) * 100}%`;
    elements.questionText.textContent = question.question;
    elements.answers.replaceChildren();
    elements.nextQuestionBtn.disabled = true;
    elements.nextQuestionBtn.textContent = isLastQuestion ? "Ergebnis anzeigen →" : "Nächste Frage →";
    state.selectedIndex = null;

    question.options.forEach((option, optionIndex) => {
      const inputId = `question-${state.questionIndex}-option-${optionIndex}`;
      const label = document.createElement("label");
      label.className = "answer";
      label.htmlFor = inputId;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${state.questionIndex}`;
      input.id = inputId;
      input.value = String(optionIndex);
      input.addEventListener("change", () => selectAnswer(optionIndex));

      const letter = document.createElement("strong");
      letter.className = "answer__letter";
      letter.textContent = `${String.fromCharCode(65 + optionIndex)}.`;

      const text = document.createElement("span");
      text.textContent = option;

      label.append(input, letter, text);
      elements.answers.appendChild(label);
    });

    elements.questionText.focus();
  }

  function nextQuestion() {
    if (state.selectedIndex === null) {
      return;
    }

    state.answers[state.questionIndex] = state.selectedIndex;

    if (state.questionIndex < data.questions.length - 1) {
      state.questionIndex += 1;
      renderQuestion();
      return;
    }

    showResult();
  }

  function getResultMessage(score) {
    const ratio = score / data.questions.length;

    if (ratio === 1) {
      return "Ausgezeichnet – echtes HR-Profiwissen!";
    }

    if (ratio >= 0.6) {
      return "Stark – Sie gestalten HR mit Weitblick!";
    }

    return "Danke fürs Mitmachen – HR bleibt spannend!";
  }

  function buildSolutions() {
    const fragment = document.createDocumentFragment();

    data.questions.forEach((question, questionIndex) => {
      const chosenIndex = state.answers[questionIndex];
      const isCorrect = chosenIndex === question.correctIndex;
      const solution = document.createElement("article");
      solution.className = "solution";

      const heading = document.createElement("p");
      heading.className = "solution__question";
      heading.textContent = `${questionIndex + 1}. ${question.question}`;

      const status = document.createElement("p");
      status.className = `solution__status${isCorrect ? " is-correct" : ""}`;
      const correctLetter = String.fromCharCode(65 + question.correctIndex);
      const chosenLetter = Number.isInteger(chosenIndex) ? String.fromCharCode(65 + chosenIndex) : "–";
      status.textContent = isCorrect
        ? `✓ Ihre Antwort ${chosenLetter} ist richtig.`
        : `Ihre Antwort: ${chosenLetter} · Richtig: ${correctLetter} – ${question.options[question.correctIndex]}`;

      const explanation = document.createElement("p");
      explanation.className = "solution__explanation";
      explanation.textContent = question.explanation;

      solution.append(heading, status, explanation);
      fragment.appendChild(solution);
    });

    elements.solutions.replaceChildren(fragment);
  }

  function showResult() {
    const score = data.questions.reduce((total, question, questionIndex) => {
      return total + (state.answers[questionIndex] === question.correctIndex ? 1 : 0);
    }, 0);

    elements.progressBar.style.width = "100%";
    elements.resultMessage.textContent = getResultMessage(score);
    elements.scoreText.textContent = `Sie haben ${score} von ${data.questions.length} Fragen richtig beantwortet.`;
    buildSolutions();
    showOnly(elements.result);
    elements.result.focus();
  }

  function toggleSolutions() {
    const willOpen = elements.solutions.hidden;
    elements.solutions.hidden = !willOpen;
    elements.toggleSolutionsBtn.setAttribute("aria-expanded", String(willOpen));
    elements.toggleSolutionsBtn.textContent = willOpen ? "Lösungen ausblenden" : "Lösungen anzeigen";

    if (willOpen) {
      elements.solutions.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  elements.enterQuizBtn.addEventListener("click", enterQuiz);
  elements.startQuizBtn.addEventListener("click", startQuiz);
  elements.restartTopBtn.addEventListener("click", resetQuiz);
  elements.restartBtn.addEventListener("click", resetQuiz);
  elements.nextQuestionBtn.addEventListener("click", nextQuestion);
  elements.toggleSolutionsBtn.addEventListener("click", toggleSolutions);

  applyContent();
})();
