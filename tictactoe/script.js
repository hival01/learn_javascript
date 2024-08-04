let currentPlayer = "X";
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const message = document.getElementById("message");

let arr = Array(9).fill(null);
let score = {
  X: 0,
  O: 0,
};
function showPopup(text) {
  message.style.display = "block";
  message.innerText = text;
  setTimeout(() => {
    message.style.display = "none";
  }, 1000);
}
function checkWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[0] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[3] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[6] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[0] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[1] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[2] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[0] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[2] == arr[6])
  ) {
    // make popup here for 1 sec
    showPopup(`Winner is ${currentPlayer}`);
    if (currentPlayer == "X") {
      score.X += 1;
    } else {
      score.O += 1;
    }
    displayScore();
    setTimeout(replay, 1000);
    return;
  }
  if (arr.every((e) => e !== null)) {
    showPopup("It's a draw");
    setTimeout(replay, 1000);
  }
}
function displayScore() {
  p1.innerText = score.X;
  p2.innerText = score.O;
}
function reset() {
  replay();
  score = {
    X: 0,
    O: 0,
  };
  displayScore();
}

function replay() {
  arr.fill(null);
  document.querySelectorAll(".col").forEach((e) => (e.innerText = null));
}
function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] !== null) {
    return;
  }
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
