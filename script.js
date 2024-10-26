let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

const guessInput = document.getElementById("guessInput");

const guessButton = document.getElementById("guessButton");

const resetButton = document.getElementById("resetButton");

const result = document.getElementById("result");

const attemptsDisplay = document.getElementById("attempts");

function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    result.textContent = "Пожалуйста, введите число от 1 до 100";

    return;
  }

  attempts++;

  attemptsDisplay.textContent = `Попытки: ${attempts}`;

  if (userGuess === randomNumber) {
    result.textContent = `Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток!`;

    guessButton.disabled = true;
  } else if (userGuess < randomNumber) {
    result.textContent = "Слишком мало. Попробуйте больше!";
  } else {
    result.textContent = "Слишком много. Попробуйте меньше!";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;

  attempts = 0;

  attemptsDisplay.textContent = "Попытки: 0";

  result.textContent = "";
  guessInput.value = "";
  guessButton.disabled = false;
}

guessButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
