let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

let stopEL = document.getElementById("stop");
let startEL = document.getElementById("start");
let resetEL = document.getElementById("reset");

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  //   to display or add the extra zero while time starts
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  //   To update or display the HTML elemet everysec.
  displayTime.innerHTML = h + ":" + m + ":" + s;
}

// To excute the above stopwatch function for everysecond to the increase the value of one second for everytime, so using the JS timeInterval
// watchStart
function watchstart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  // 1000 milli-sec = 1 sec.
  timer = setInterval(stopwatch, 1000);
}

// watchStop
function watchstop() {
  clearInterval(timer);
}

// watchReset
function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
startEL.addEventListener("click", watchstart);
stopEL.addEventListener("click", watchstop);
resetEL.addEventListener("click", watchReset);
