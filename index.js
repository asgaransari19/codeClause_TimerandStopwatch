let buttons = document.querySelectorAll("nav button");
let content = document.getElementsByClassName("content");

function handleClick() {
  buttons[0].classList.add("active");
  buttons[1].classList.remove("active");
  content[0].style.display = "block";
  content[1].style.display = "none";
}

function stopwatchClick() {
  buttons[1].classList.add("active");
  buttons[0].classList.remove("active");
  content[1].style.display = "block";
  content[0].style.display = "none";
}

//  Timer script code ----------------->

let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

var sec = 0;
var min = 0;
var hour = 0;
let timer;

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
  timer = setInterval(() => {
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
      if (min === 60) {
        min = 0;
        hour++;
      }
    }
    display.textContent = `${hour.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  }, 1000);
  // startBtn.disabled = true;
  start.style.background = "green";
  reset.style.background = "red";
  stop.style.background = "red";
}

function stopTimer() {
  clearInterval(timer);
  // start.disabled = false;

  start.style.background = "red";
  reset.style.background = "red";
  stop.style.background = "green";
}

function resetTimer() {
  clearInterval(timer);
  sec = 0;
  min = 0;
  hour = 0;
  display.textContent = "00 : 00 : 00";

  start.style.background = "red";
  reset.style.background = "red";
  stop.style.background = "red";
  // start.disabled = false;
}

//  stopwatch script code ----------------->

// let stopData = document.getElementById("stopData");
// let startbtn = document.getElementById("starts");
// let splitbtn = document.getElementById("split");
// let resetbtn = document.getElementById("resets");
// const splitTimes = document.getElementsByClassName("split-times");
// let stopwatchData;
// let milli = 0;
// var sec = 0;
// var min = 0;
// var hour = 0;

// startbtn.addEventListener("click", startStopWatch);
// splitbtn.addEventListener("click", splitStopWatch);
// resetbtn.addEventListener("click", resetStopWatch);

// function startStopWatch() {

//   stopwatchData = setInterval(() => {
//     milli++;
//     if (milli === 1000) {
//       milli = 0;
//       sec++;
//       if (sec === 60) {
//         sec = 0;
//         min++;
//         if (min === 60) {
//           min = 0;
//           hour++;
//         }
//       }
//     }
//     stopData.textContent = `${hour.toString().padStart(2, "0")}:${min
//       .toString()
//       .padStart(2, "0")}:${sec.toString().padStart(2, "0")}.${milli

//       .toString()
//       .padStart(3, "0")}`;
//   }, 1);

//   startbtn.style.background = "green";
//   resetbtn.style.background = "red";
//   splitbtn.style.background = "red";

//   startbtn.style.display = "block";
//   resetbtn.style.display = "block";
//   splitbtn.style.display = "block";

//   console.log(stopData);
// }

// function splitStopWatch() {
//   // const splitTime = document.createElement("div");
//   // splitTime.className = "split-time";
//   // splitTime.textContent = stopData.textContent;
//   // splitTimes.appendChild(splitTime);

//   startbtn.style.background = "red";
//   resetbtn.style.background = "red";
//   splitbtn.style.background = "green";
// }

// function resetStopWatch() {
//   clearInterval(stopwatchData);
//   milli = 0;
//   sec = 0;
//   min = 0;
//   hour = 0;
//   display.textContent = "00 : 00 : 00 :00";

//   startbtn.style.background = "red";
//   resetbtn.style.background = "red";
//   splitbtn.style.background = "red";
// }

const display1 = document.querySelector('.display1');
const startBtn1 = document.querySelector('.start');
const stopBtn1 = document.querySelector('.stop');
const resetBtn1 = document.querySelector('.reset');

let timerId;
let startT;
let elapsedTime = 0;

function updateDisplay() {
  const ms = elapsedTime % 1000;
  const sec = Math.floor(elapsedTime / 1000) % 60;
  const min = Math.floor(elapsedTime / (1000 * 60)) % 60;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const timeStr = `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}
  :${sec.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
  display1.textContent = timeStr;
}

function tick() {
  const now = Date.now();
  elapsedTime += now - startT;
  startT = now;
  updateDisplay();
}

startBtn1.addEventListener('click', function() {
  if (!timerId) {
    startT = Date.now();
    timerId = setInterval(tick, 10);
  }

  startBtn1.style.background = "green";
  resetBtn1.style.background = "red";
  stopBtn1.style.background = "red";
});

stopBtn1.addEventListener('click', function() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  startBtn1.style.background = "red";
  resetBtn1.style.background = "red";
  stopBtn1.style.background = "green";
});

resetBtn1.addEventListener('click', function() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  elapsedTime = 0;
  updateDisplay();

  startBtn1.style.background = "red";
  resetBtn1.style.background = "red";
  stopBtn1.style.background = "red";
});

updateDisplay();