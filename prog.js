function searchWeather() {
  const region = document.getElementById("region").value;
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=4e6c460ec615456eaa483807240205&q=${region}&lang=de`
  )
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
    });
}

function displayWeather(data) {
  const weatherContainer = document.getElementById("weather-container");
  const weatherInfo = `
  <div class="cards">
    <h2>${data.location.name}</h2>
    <p>Temperatur: ${data.current.temp_c}°C</p>
    <p>Wetter: ${data.current.condition.text}</p>
    </div>
  `;
  weatherContainer.innerHTML += weatherInfo;
}
