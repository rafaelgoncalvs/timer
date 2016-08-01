var currentTime;

var timerInterval = null;

function getStartButton() {
  return document.getElementById("start-button");
}

function getStopButton() {
  return document.getElementById("stop-button");
}

function getCurrentTimeElement() {
  return document.getElementById("current-time");
}

function setCurrentTimeElement(time) {
  getCurrentTimeElement().innerHTML = time.toLocaleTimeString();
}

getTime = function() {
  return getCurrentTimeElement().innerHTML;
}

changeValue = function() {
  if(currentTime > 0) {
  currentTime.setSeconds(currentTime.getSeconds() - 1);
    setCurrentTimeElement(currentTime);
  } else {
    stop();
  }
}

function start() {
  currentTime = convertFormattedTimeToObjectTime(getTime());
  timerInterval = setInterval(changeValue, 1000);
  getStartButton().disabled = true;
  getStopButton().disabled = false;
}

function stop() {
  clearInterval(timerInterval);
  getStartButton().disabled = false;
  getStopButton().disabled = false;
}

function convertFormattedTimeToObjectTime(formattedTime) {
  var regex = /(\d{2}):(\d{2}):(\d{2})/;
  var timeArray = regex.exec(formattedTime);
  return new Date(2016, 01, 01, (+timeArray[1]), (+timeArray[2]), (+timeArray[3]));d
}
