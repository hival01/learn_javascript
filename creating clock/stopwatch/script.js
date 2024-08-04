const userInput = prompt("Enter the number of seconds for the countdown:");

function startCountdown(userInput) {
  let remainingSeconds = userInput;
  const countdown = setInterval(() => {
    if (remainingSeconds > 0) {
      document.getElementById("timer").innerText = remainingSeconds;
      remainingSeconds--;
    } else {
      clearInterval(countdown);
      document.getElementById("timer").innerText = remainingSeconds;
      document.getElementById("time-up").innerText = "Time's up!";
    }
  }, 1000);
}

if (userInput > 0) {
  startCountdown(userInput);
} else {
  alert("Please enter a valid number of seconds.");
}