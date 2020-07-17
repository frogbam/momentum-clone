const clockContainer = document.querySelector(".js-clock");
const clock = clockContainer.querySelector("h1");
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  if (hours < 10) {
    if (mins < 10) {
      clock.innerHTML = `0${hours}:0${mins}`;
    }
    clock.innerHTML = `0${hours}:${mins}`;
  } else if (mins < 10) {
    clock.innerHTML = `${hours}:0${mins}`;
  } else {
    clock.innerHTML = `${hours}:${mins}`;
  }
}
function init() {
  setInterval(getTime, 1000);
}

init();
