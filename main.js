const hours = document.querySelector(".timer__hours");
const minutes = document.querySelector(".timer__minutes");
const seconds = document.querySelector(".timer__seconds");

const btn90 = document.querySelector(".min__90");
const btn60 = document.querySelector(".min__60");
const btn30 = document.querySelector(".min__30");

const audio = document.querySelector(".audio");

let timer;
let totalTimeInSeconds = 0;

function startTimer(minutes) {
  totalTimeInSeconds = minutes * 60;
  updateTimerDisplay();

  timer = setInterval(function () {
    if (totalTimeInSeconds <= 0) {
      clearInterval(timer);
      finishAlarm();
    } else {
      totalTimeInSeconds--;
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const hrs = Math.floor(totalTimeInSeconds / 3600);
  const mins = Math.floor((totalTimeInSeconds % 3600) / 60);
  const secs = totalTimeInSeconds % 60;

  hours.textContent = padZero(hrs);
  minutes.textContent = padZero(mins);
  seconds.textContent = padZero(secs);
}

function finishAlarm() {
  audio.play();
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

btn90.addEventListener("click", function () {
  clearInterval(timer);
  startTimer(90);
});

btn60.addEventListener("click", function () {
  clearInterval(timer);
  startTimer(60);
});

btn30.addEventListener("click", function () {
  clearInterval(timer);
  startTimer(30);
});

