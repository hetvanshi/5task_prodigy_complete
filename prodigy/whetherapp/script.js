const apiKey = "ac91716064b893e689173b40d32b5414"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const location = document.getElementById("location-input").value;
  if (location) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=23.02579000&lon=72.58727000&appid=ac91716064b893e689173b40d32b5414`
    )
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "location"
        ).innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById(
          "temperature"
        ).innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById(
          "conditions"
        ).innerText = `Conditions: ${data.weather[0].description}`;
      })
      .catch((error) => {
        alert("Error fetching weather data. Please try again.");
        console.error("Error:", error);
      });
  } else {
    alert("Please enter a location.");
  }
}
