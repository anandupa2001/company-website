let isCircle = true;
let circle = 0;
let cross = 0;
let inputBox = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const boxes = document.getElementsByClassName("boxes");
const winner = document.getElementById("winner");
const reset = document.getElementById("reset");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function (event) {
    if (boxes[i].innerHTML) {
      return;
    }
    if (isCircle) {
      inputBox[parseInt(event.target.id)] = "X";
      buildCross(boxes[i]);
      ++cross;
      isCircle = false;
    } else {
      inputBox[parseInt(event.target.id)] = "O";
      buildCircle(boxes[i]);
      ++circle;
      isCircle = true;
    }
    optimisedCheckWinner();
  });
}

function buildCircle(element) {
  element.innerHTML = `<div class="circle"></div>`;
}

function buildCross(element) {
  element.innerHTML = `<div class="cross">
            <div class="line_1"></div>
            <div class="line_2"></div>
          </div>`;
}

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

function optimisedCheckWinner() {
  for (
    let combination = 0;
    combination < winningCombination.length;
    combination++
  ) {
    const [first, second, third] = winningCombination[combination];
    if (
      inputBox[first] == inputBox[second] &&
      inputBox[second] == inputBox[third]
    ) {
      winner.innerHTML = `Winner is ${inputBox[first]}`;
      reset.style.display = "inline";
      break;
    }
  }
  if (cross + circle === 9) {
    winner.innerHTML = `Match Draw`;
    reset.style.display = "inline";
  }
}

function checkWinner() {
  if (inputBox[0] == inputBox[1] && inputBox[1] == inputBox[2]) {
    console.log("winner - ", inputBox[0]);
    alert("winner decided");
    clearBoxes();
  } else if (inputBox[3] == inputBox[4] && inputBox[4] == inputBox[5]) {
    console.log("winner - ", inputBox[3]);
    alert("winner decided");
    clearBoxes();
  } else if (inputBox[6] == inputBox[7] && inputBox[7] == inputBox[8]) {
    console.log("winner - ", inputBox[6]);
    alert("winner decided");
    clearBoxes();
  } else if (inputBox[0] == inputBox[3] && inputBox[3] == inputBox[6]) {
    console.log("winner - ", inputBox[0]);
    alert("winner decided");
    clearBoxes();
  } else if (inputBox[1] == inputBox[4] && inputBox[4] == inputBox[7]) {
    console.log("winner - ", inputBox[1]);
    alert("winner decided");
    clearBoxes();
  } else if (inputBox[2] == inputBox[5] && inputBox[5] == inputBox[8]) {
    console.log("winner - ", inputBox[2]);
    alert("winner decided");
    clearBoxes();
  } else if (inputBox[0] == inputBox[4] && inputBox[4] == inputBox[8]) {
    console.log("winner - ", inputBox[0]);
    alert("winner decided");
    clearBoxes();
  } else if (inputBox[2] == inputBox[4] && inputBox[4] == inputBox[6]) {
    console.log("winner - ", inputBox[2]);
    alert("winner decided");
    clearBoxes();
  } else {
    if (cross + circle === 9) {
      alert("Match Draw");
    }
  }
}
function clearBoxes() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
  }
  cross = 0;
  circle = 0;
  inputBox = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  winner.innerHTML = "";
  reset.style.display = "none";
}
