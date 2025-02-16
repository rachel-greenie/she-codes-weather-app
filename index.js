function formatDate(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let currentDate = `${day} ${hours}:${minutes}`;
  return currentDate;
}

function display(response) {
  let city = response.data.city;
  let displayCity = document.querySelector("#current-city");
  displayCity.innerHTML = city;

  let now = new Date();
  let date = formatDate(now);
  let displayDate = document.querySelector("#current-date");
  displayDate.innerHTML = date;

  let condition = response.data.condition.description;
  let displayCondition = document.querySelector("#current-condition");
  displayCondition.innerHTML = condition;

  let humidity = response.data.temperature.humidity;
  let displayHumidity = document.querySelector("#current-humidity");
  displayHumidity.innerHTML = `${humidity}%`;

  let wind = response.data.wind.speed;
  let displayWind = document.querySelector("#current-wind");
  displayWind.innerHTML = `${wind}km/h`;

  let tempValue = Math.round(response.data.temperature.current);
  let displayTempValue = document.querySelector(".current-temperature-value");
  displayTempValue.innerHTML = tempValue;
}

function performSearch(event) {
  event.preventDefault();
  let userInput = document.querySelector("#search-input");
  userInput = userInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${userInput}&key=${apiKey}`;
  axios.get(apiUrl).then(display);
}

let apiKey = "b803fta4369bbfdo83e46a17ed47b804";
let submitSearch = document.querySelector("#search-form");
submitSearch.addEventListener("submit", performSearch);
