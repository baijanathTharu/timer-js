const timerDisplay = document.getElementById("timer_display");
const resBtn = document.getElementById("controls_reset_timer");
const incBtn = document.getElementById("controls_increment_timer");
const decBtn = document.getElementById("controls_decrement_timer");
const startBtn = document.getElementById("start_counter");
const timerBtn = document.getElementById("timer_counter");
// const stopBtn = document.getElementById("stop_counter");

const controls = document.querySelector(".controls");
const music = document.getElementById("music");

let countMin = 0;
let countSec = 0;

// Value at which the counter should increase or decrease
const val = 1;

// Value for maximum limit
const max = 60;

const timerRender = (min, sec) => {
  timerDisplay.textContent = `${min < 10 ? "0" + min.toString() : min}:${
    sec < 10 ? "0" + sec.toString() : sec
  }`;
};

timerRender(countMin, countSec);

resBtn.addEventListener("click", () => {
  timerDisplay.textContent = "00:00";
  countMin = 0;
  countSec = 0;
  timerRender(countMin, countSec);
});

decBtn.addEventListener("click", () => {
  countMin = countMin - val;
  if (countMin < 0) {
    countMin = 0;
  }
  timerRender(countMin, countSec);
});

incBtn.addEventListener("click", () => {
  countMin = countMin + val;
  if (countMin > max) {
    countMin = max;
  }
  timerRender(countMin, countSec);
});

// stopBtn.addEventListener("click", (x = true) => {
//   startCounter(x);
// });

const startCounter = () => {
  if (countMin != 0 || countSec != 0) {
    controls.style.visibility = "hidden";
    timerBtn.style.display = "flex";
    // stopBtn.style.display = "flex";
    startBtn.style.display = "none";
    countSec = 60;
    countMin--;
    let countInterval = setInterval(() => {
      countSec--;
      if (countSec < 0) {
        countSec = 59;
        countMin--;
      }
      if (countMin === 0 && countSec === 0) {
        clearInterval(countInterval);
        controls.style.visibility = "visible";
        timerBtn.style.display = "none";
        // stopBtn.style.display = "none";
        startBtn.style.display = "flex";
        music.play();
      }
      timerRender(countMin, countSec);
    }, 1000);
  }
};

startBtn.addEventListener("click", () => startCounter(false));
