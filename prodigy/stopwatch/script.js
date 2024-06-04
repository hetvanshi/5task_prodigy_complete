let display = document.getElementById("display");
let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");

let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

function startStop() {
  if (!running) {
    startTime = new Date().getTime() - difference;
    tInterval = setInterval(updateTime, 1);
    startStopBtn.innerHTML = "Stop";
    resetBtn.disabled = true;
    running = true;
  } else {
    clearInterval(tInterval);
    startStopBtn.innerHTML = "Start";
    resetBtn.disabled = false;
    running = false;
  }
}

function reset() {
  clearInterval(tInterval);
  difference = 0;
  display.innerHTML = "00:00:00";
  startStopBtn.innerHTML = "Start";
  resetBtn.disabled = false;
  running = false;
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
