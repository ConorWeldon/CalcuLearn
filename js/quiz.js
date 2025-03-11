// Sample quiz data; you could also load this from data/quiz.json using fetch()
const quizData = [
    {
      question: "Which of the following best describes a conic section?",
      choices: [
        "A curve obtained by cutting a sphere with a plane",
        "A curve obtained by intersecting a plane with a double-napped cone",
        "A curve obtained by folding a paper into a circle",
        "A straight-line graph"
      ],
      answer: 1
    },
    {
      question: "What are the four types of conic sections?",
      choices: [
        "Circle, Ellipse, Parabola, Hyperbola",
        "Line, Curve, Plane, Circle",
        "Parabola, Ellipse, Hyperbola, Triangle",
        "Cylinder, Sphere, Cone, Paraboloid"
      ],
      answer: 0
    }
    // ... add more questions as needed
  ];
  
  let currentQuiz = 0;
  let score = 0;
  
  function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    if (currentQuiz < quizData.length) {
      let q = quizData[currentQuiz];
      let html = `<div class="question"><h2>${q.question}</h2></div>`;
      html += `<div class="choices">`;
      q.choices.forEach((choice, index) => {
        html += `<label><input type="radio" name="answer" value="${index}"> ${choice}</label><br>`;
      });
      html += `</div>`;
      html += `<button onclick="checkAnswer()">Next</button>`;
      quizContainer.innerHTML = html;
    } else {
      // Quiz completed: show score and save to localStorage
      quizContainer.innerHTML = `<h2>You scored ${score} out of ${quizData.length}</h2>`;
      let percentage = Math.round((score / quizData.length) * 100);
      localStorage.setItem('quizScore', percentage);
    }
  }
  
  function checkAnswer() {
    const answers = document.getElementsByName('answer');
    let selected;
    for (const ans of answers) {
      if (ans.checked) {
        selected = parseInt(ans.value);
        break;
      }
    }
    if (selected === quizData[currentQuiz].answer) {
      score++;
    }
    currentQuiz++;
    loadQuiz();
  }
  
  document.addEventListener('DOMContentLoaded', loadQuiz);
  