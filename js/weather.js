weatherContainer = document.querySelector(".js-weather");

function getWeather() {
  const request = new XMLHttpRequest();
  const coords = JSON.parse(localStorage.getItem("coords"));
  if (coords === null) {
    return;
  }

  request.onreadystatechange = function (event) {
    if (request.readyState == 4) {
      if (request.status == 200) {
        const json = eval("(" + request.responseText + ")");
        const city = json.name;
        const sky = json.weather[0].main;
        const temp = Math.round(json.main.temp - 273.15);

        const span = document.createElement("span");
        const weatherText = document.createTextNode(
          `${sky}, ${temp}℃ @ ${city}`
        );
        weatherContainer.appendChild(span);
        span.appendChild(weatherText);
      }
    }
  };
  request.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=e0a722f73ba1db64f40c953acace670b`,
    true
  );
  request.send();
}

function getLocationSuccess(position) {
  const coords = {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };

  localStorage.setItem("coords", JSON.stringify(coords));

  getWeather();
}

function getLocationFail() {}

function getLocation() {
  navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationFail);
}

function init() {
  getLocation();
}

init();
