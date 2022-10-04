let units = "metric";
let city = "Nairobi";

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  console.log(response.data.name);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].desription;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windyElement = document.querySelector("#windy");
  windyElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "743bee57fddbfaf52447193a87d5dd25";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

function formatDate(timestamp) {
  let date = new date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  return `${day} ${hours}:${minutes}`;
}
