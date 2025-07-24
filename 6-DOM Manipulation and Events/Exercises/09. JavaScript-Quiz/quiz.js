document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const allQuestionSectionEls = document.querySelectorAll('.question');
  const allAnswerLiEls = document.querySelectorAll('.quiz-answer');
  const resultDivEl = document.querySelector('#results');

  const rightAnswers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'
  ];

  let currentQuestionIndex = 0;
  let rightAnswersCount = 0;

  // Add event listener to each answer <li>
  allAnswerLiEls.forEach(liEl =>
    liEl.addEventListener('click', handleAnswerSubmit)
  );

  function handleAnswerSubmit(e) {
    const chosenAnswer = e.target.textContent;

    // ✅ Check if the selected answer is correct
    if (chosenAnswer === rightAnswers[currentQuestionIndex]) {
      rightAnswersCount++;
    }

    // ✅ Hide current question
    const currentSectionEl = allQuestionSectionEls[currentQuestionIndex];
    currentSectionEl.classList.add('hidden');

    currentQuestionIndex++; // Move to next question

    if (currentQuestionIndex === rightAnswers.length) {
        const h1El = document.createElement('h1');
        if(rightAnswersCount === 3){
            h1El.textContent = `You are recognized as top JavaScript fan!`;
        }else{
            h1El.textContent = `You have ${rightAnswersCount} right answer${rightAnswersCount ===1 ? '' : 's'}`;
        }
        resultDivEl.appendChild(h1El);
    } else {
      const nextSectionEl = allQuestionSectionEls[currentQuestionIndex];
      nextSectionEl.classList.remove('hidden');
    }

  }
}
