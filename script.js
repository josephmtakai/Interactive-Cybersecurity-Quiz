const quizData = [
    {
      question: "What is the primary goal of cybersecurity?",
      choices: ["To protect data", "To develop software", "To prevent crimes", "To create malware"],
      answer: "To protect data"
    },
    {
      question: "Which of the following is considered a phishing attack?",
      choices: [
        "An email asking for personal details",
        "Installing antivirus software",
        "Using a strong password",
        "Updating your software"
      ],
      answer: "An email asking for personal details"
    },
    {
      question: "What does the term 'Zero Day' refer to in cybersecurity?",
      choices: [
        "A virus with no cure",
        "A vulnerability unknown to the vendor",
        "A cybersecurity event that happens once a day",
        "A type of ransomware"
      ],
      answer: "A vulnerability unknown to the vendor"
    },
    {
      question: "Which protocol is used to secure data in transit on websites?",
      choices: ["HTTP", "HTTPS", "FTP", "SSH"],
      answer: "HTTPS"
    },
    {
      question: "What is the purpose of a firewall?",
      choices: [
        "To monitor incoming and outgoing network traffic",
        "To detect phishing attacks",
        "To create strong passwords",
        "To secure data on hard drives"
      ],
      answer: "To monitor incoming and outgoing network traffic"
    },
    {
      question: "Which type of attack involves overwhelming a system with traffic to make it unavailable?",
      choices: ["Phishing", "SQL Injection", "DDoS", "Man-in-the-middle"],
      answer: "DDoS"
    },
    {
      question: "What is multi-factor authentication (MFA)?",
      choices: [
        "A method of encryption",
        "A way to block malware",
        "A security process that requires multiple forms of verification",
        "A type of firewall"
      ],
      answer: "A security process that requires multiple forms of verification"
    },
    {
      question: "Which of these is a form of social engineering attack?",
      choices: ["Brute force attack", "Phishing", "Buffer overflow", "SQL Injection"],
      answer: "Phishing"
    },
    {
      question: "What is encryption used for?",
      choices: [
        "To crack passwords",
        "To secure data by converting it into unreadable code",
        "To monitor traffic",
        "To create malware"
      ],
      answer: "To secure data by converting it into unreadable code"
    },
    {
      question: "What does 'CIA' stand for in cybersecurity?",
      choices: [
        "Central Intelligence Agency",
        "Confidentiality, Integrity, and Availability",
        "Cybersecurity Information Access",
        "Computer Internet Attack"
      ],
      answer: "Confidentiality, Integrity, and Availability"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById('question');
  const choicesEl = document.getElementById('choices');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const scoreContainer = document.getElementById('score-container');
  const quizContainer = document.getElementById('quiz-container');
  const finalScoreEl = document.getElementById('final-score');
  const restartBtn = document.getElementById('restartBtn');
  
  // Load the current question and choices
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuizData.question;
  
    // Clear previous choices
    choicesEl.innerHTML = '';
  
    // Dynamically create choice buttons
    currentQuizData.choices.forEach(choice => {
      const choiceButton = document.createElement('button');
      choiceButton.classList.add('choice', 'block', 'w-full', 'bg-gray-300', 'hover:bg-gray-400', 'text-gray-800', 'font-bold', 'py-2', 'px-4', 'rounded');
      choiceButton.innerText = choice;
      choiceButton.onclick = () => checkAnswer(choice);
      choicesEl.appendChild(choiceButton);
    });
  
    prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentQuestionIndex === quizData.length - 1 ? 'none' : 'block';
  }
  
  // Check the user's answer and update the score
  function checkAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      score++;
    }
  }
  
  // Move to the next question
  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      displayScore();
    }
  });
  
  // Move to the previous question
  prevBtn.addEventListener('click', () => {
    currentQuestionIndex--;
    loadQuestion();
  });
  
  // Display the final score after quiz completion
  function displayScore() {
    quizContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    finalScoreEl.innerText = `Your score is ${score}/${quizData.length}`;
  }
  
  // Restart the quiz
  restartBtn.onclick = () => {
    score = 0;
    currentQuestionIndex = 0;
    quizContainer.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    loadQuestion();
  };
  
  // Initialize the first question when the page loads
  loadQuestion();
  