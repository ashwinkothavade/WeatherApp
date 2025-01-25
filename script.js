const form = document.querySelector(".formweather");
const card = document.querySelector(".card");
const cityNameElem = document.getElementById("city-name");
const temperatureElem = document.getElementById("temperature");
const humidityElem = document.getElementById("humidity");
const descriptionElem = document.getElementById("description");
const windSpeedElem = document.getElementById("wind-speed");
const pressureElem = document.getElementById("pressure");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = document.getElementById("city").value.trim();
  if (!city) return alert("Please enter a city name");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=643d77f460b7a776b39ed118cf04bdfd`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    cityNameElem.textContent = data.name;
    temperatureElem.textContent = data.main.temp;
    humidityElem.textContent = data.main.humidity;
    descriptionElem.textContent = data.weather[0].description;
    windSpeedElem.textContent = data.wind.speed;
    pressureElem.textContent = data.main.pressure;

    card.style.display = "block";
  } catch (error) {
    alert(error.message);
  }
});
