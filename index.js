const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");
const startBtn = document.getElementById("start");
const breakBtn = document.getElementById("break");
const done = document.getElementById("done");

// Variables *************************************************
breakAudio = new Audio("./sons/break.mp3");
startAudio = new Audio("./sons/start.mp3");

let startTimer;

let min = 25;
let sec = "00";

minutes.innerHTML = min;
secondes.innerHTML = sec;

// Start Button (Début Session)
startBtn.addEventListener("click", () => {
  done.classList.add("showMsg");
  done.innerHTML = "FOCUS !";

  startAudio.play();

  min = 25;
  sec = "00";

  minutes.innerHTML = min;
  secondes.innerHTML = sec;

  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    clearInterval(startTimer);
    startTimer = setInterval(timer, 1000);
  }
});

// Break Button (Pause Session)

breakBtn.addEventListener("click", () => {
  done.classList.add("showMsg");
  done.innerHTML = "RELAX";

  breakAudio.play();

  min = 5;
  sec = "00";

  minutes.innerHTML = min;
  secondes.innerHTML = sec;

  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    clearInterval(startTimer);
    startTimer = setInterval(timer, 1000);
  }
});

// Fonction du timer

const timer = () => {
  // Work Session *****
  if (sec > 0) {
    sec--;
    secondes.innerHTML = sec;
  } else if (sec <= 0 && min > 0) {
    sec = 59;
    min--;
    minutes.innerHTML = min;
    secondes.innerHTML = sec;
  } else if (sec <= 0 && min <= 0 && done.innerHTML === "FOCUS !") {
    done.classList.add("showMsg");
    done.innerHTML = "Work session finish ! Take a break !";
  } else if (sec <= 0 && min <= 0 && done.innerHTML === "RELAX") {
    done.classList.add("showMsg");
    done.innerHTML = "Break session finish ! GO WORK HARD !";
  }
};
