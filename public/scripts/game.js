const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const VS = "VS";
const DRAW = "DRAW";
const WIN = "PLAYER WIN";
const LOSE = "COMP WIN";
const choices = [ROCK, PAPER, SCISSORS];
var centerText = document.getElementById("centerText");

function back() {
  window.history.back();
}

function replay() {
  centerText.className = "center-text";
  centerText.innerHTML = VS;

  document.querySelectorAll("[id^='choice-']").forEach((e) => {
    e.classList.remove("active-state");
    e.classList.remove("disable-event");
  });
}

function play(p) {
  var c = choices[Math.floor(Math.random() * choices.length)];
  centerText.innerHTML = DRAW;

  if (
    (p == ROCK && c == SCISSORS) ||
    (p == PAPER && c == ROCK) ||
    (p == SCISSORS && c == PAPER)
  ) {
    centerText.innerHTML = WIN;
  } else if (
    (p == ROCK && c == PAPER) ||
    (p == PAPER && c == SCISSORS) ||
    (p == SCISSORS && c == ROCK)
  ) {
    centerText.innerHTML = LOSE;
  }

  document
    .querySelectorAll("#choice-comp-" + c + ",#choice-player-" + p)
    .forEach((e) => {
      e.classList.add("active-state");
    });

  centerText.className = "result-text";

  document.querySelectorAll("[id*='player-']").forEach((element) => {
    element.classList.add("disable-event");
  });
}
