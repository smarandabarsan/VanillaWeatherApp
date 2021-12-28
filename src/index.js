function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    /*let replacement = `It is ${temperature} degrees in ${response.data.name}`;*/
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = `${temperature}°C`;
    
    let cityInput = document.querySelector("#city-input");
    let city = cityInput.value;
    h1.innerHTML = cityInput.value;


}

function search(event) {
  event.preventDefault();
  let apiKey = "0bb8555244f293e8769ef2e2d96d1767";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(urlApi).then(displayTemperature);
  console.log(urlApi);
}

function showResponse(position) {
    /*let city = "Sydney";*/ 
    console.log(position);
    let apiKey = "0bb8555244f293e8769ef2e2d96d1767";
    let lat = position.coords.latitude;
    console.log(lat);
    let long = position.coords.longitude;
    console.log(long);
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    axios.get(urlApi).then(showTemperature);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

function showLocation (position) {
    console.log(position);
}

function showCurrentLocation() {
  navigator.geolocation.getCurrentPosition(showResponse);
  
}
// Feature Date
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// Feature Submit-Button
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Bonus Feature
/*let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);*/