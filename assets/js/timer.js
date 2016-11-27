var timerInterval = null;

var currentTime;

function start() {
  currentTime = convertFormattedTimeToTime(getCurrentTime());
  timerInterval = setInterval(changeValue, 1000);
  getStartButtonElement().disabled = true;
  getStopButtonElement().disabled = false;
}

function stop() {
  clearInterval(timerInterval);
  getStartButtonElement().disabled = false;
  getStopButtonElement().disabled = true;
}

var changeValue = function() {
  if(currentTime >= 0) {
    currentTime--;
    var formattedTime = convertTimeToFormattedTime(currentTime);
    setCurrentTimeElement(formattedTime);
  } else {
    stop();
  }
}

function convertFormattedTimeToTime(formattedTime) {
  var regex = /(\d{2}):(\d{2}):(\d{2})/;
  var timeArray = regex.exec(formattedTime);

  var hours = parseInt(timeArray[1]);
  var minutes = parseInt(timeArray[2]);
  var seconds = parseInt(timeArray[3]);

  var date = new Date();
  date.setUTCHours(hours);
  date.setUTCMinutes(minutes);
  date.setUTCSeconds(seconds);
  date.setUTCMilliseconds(0);

  return Math.round(date.getTime() / 1000);
}

function convertTimeToFormattedTime(time) {
  var date = new Date(time * 1000);
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var seconds = date.getUTCSeconds();

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}

  return hours+':'+minutes+':'+seconds;
}

function getStartButtonElement() {
  return document.getElementById("start-button");
}

function getStopButtonElement() {
  return document.getElementById("stop-button");
}

function getCurrentTimeElement() {
  return document.getElementById("current-time");
}

function setCurrentTimeElement(time) {
  getCurrentTimeElement().innerHTML = time;
}

function getCurrentTime() {
  return getCurrentTimeElement().innerHTML;
}
