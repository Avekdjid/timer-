const hours = document.querySelector(".timer__hours");
const minutes = document.querySelector(".timer__minutes");
const seconds = document.querySelector(".timer__seconds");

const btn90 = document.querySelector(".min__90");
const btn60 = document.querySelector(".min__60");
const btn30 = document.querySelector(".min__30");

const audio = document.querySelector(".audio");

let timer;
let endTime;

function startTimer(minutes) {
  const now = new Date();
  endTime = new Date(now.getTime() + minutes * 60 * 1000);

  updateTimerDisplay();

  timer = setInterval(function () {
    const currentTime = new Date();
    if (currentTime >= endTime) {
      clearInterval(timer);
      finishAlarm();
    } else {
      updateTimerDisplay();
    }
  }, 100);
}

function updateTimerDisplay() {
  const currentTime = new Date();
  const remainingTime = Math.max(0, endTime - currentTime) / 1000; // in seconds

  const hrs = Math.floor(remainingTime / 3600);
  const mins = Math.floor((remainingTime % 3600) / 60);
  const secs = Math.floor(remainingTime % 60);

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

