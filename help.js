const form = document.getElementById('helpForm');
const helpMessage = document.getElementById('helpMessage');
const helpIdDisplay = document.getElementById('helpIdDisplay');

function generateHelpId() {
  const prefix = 'HELP';
  const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6‑digit number
  return prefix + '-' + randomNumber;
}

form.addEventListener('submit', function (event) {
  event.preventDefault(); // stop page reload

  const questionInput = document.getElementById('questionText');
  const nameInput = document.getElementById('studentName');

  const question = questionInput.value.trim();
  const name = nameInput.value.trim();

  if (question === '') {
    helpMessage.textContent = 'Please type your question before submitting.';
    return;
  }

  const helpId = generateHelpId();

  helpIdDisplay.textContent = helpId;

  const userName = name !== '' ? name : 'Dear student';

  helpMessage.textContent =
    userName +
    ', thank you for your question. We will let you know your answer soon. ' +
    'Your Help ID is ' +
    helpId +
    '.';

  // clear only the question, keep name
  questionInput.value = '';
});
