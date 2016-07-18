var currentTime = 0;

var timerInterval = null;

var changeValue = function() {
  getCurrentTimeElement().innerHTML = --currentTime;
}

function start() {
  currentTime = getCurrentTimeElement().innerHTML;
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
  getCurrentTimeElement().innerHTML = currentTime;
  getCleanButton().disabled = false;
  getStartButton().disabled = false;
  getStopButton().disabled = false;
}

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
