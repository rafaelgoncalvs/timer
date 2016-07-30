var currentTime = 0;

var timerInterval = null;

function getCleanButton() {
  return document.getElementById("clean-button");
}

function getStartButton() {
  return document.getElementById("start-button");
}

function getStopButton() {
  return document.getElementById("stop-button");
}

function getCurrentTimeElement() {
  return document.getElementById("current-time");
}

setTime = function(time) {
  getCurrentTimeElement().innerHTML = time;
}

getTime = function() {
  return getCurrentTimeElement().innerHTML;
}

changeValue = function() {
  if(currentTime > 0) {
    setTime(--currentTime);
  } else {
    stop();
  }
}

function start() {
  currentTime = getTime();
  timerInterval = setInterval(changeValue, 1000);
  getCleanButton().disabled = false;
  getStartButton().disabled = true;
  getStopButton().disabled = false;
}

function stop() {
  clearInterval(timerInterval);
  getCleanButton().disabled = false;
  getStartButton().disabled = false;
  getStopButton().disabled = false;
}

function clean() {
  stop();
  currentTime = 0;
  setTime(currentTime);
  getCleanButton().disabled = false;
  getStartButton().disabled = false;
  getStopButton().disabled = false;
}
