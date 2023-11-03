import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const apiKey = "88ac0947637fad3453757b284d3f4c54";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=YourCity&units=metric&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {weatherData && (
        <div>
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
      {/* style=
      {{
        width: 190.35,
        height: 24.29,
        left: 96.94,
        top: 42,
        position: "absolute",
        color: "black",
        fontSize: 20,
        fontFamily: "Lusitana",
        fontWeight: "400",
        wordWrap: "break-word",
      }} */}
    </div>
  );
};

export default WeatherApp;
