let attempts = 0;
let score = 0;

function guess(userGuess) {
  attempts++;
  document.getElementById("attemp").innerHTML = attempts;
  // Generating a random number
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = randomNumber % 2 == 0 ? "Even" : "Odd";

  function playsound(isCorrect) {
    const sound = isCorrect
      ? document.getElementById("correctSFX")
      : document.getElementById("wrongSFX");
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }

  if (userGuess == correctAnswer) {
    score++;
    document.getElementById("score").innerHTML = score;
    document.getElementById(
      "heading"
    ).innerText = `Correct! The number was ${randomNumber}`;
    playsound(true);
  } else {
    document.getElementById(
      "heading"
    ).innerHTML = `Wrong! The number was ${randomNumber}`;
    playsound(false);
  }

  let percentage = (score / attempts) * 100;
  document.getElementById("win").innerHTML = percentage.toFixed(2) + "%";
}
