import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherApp = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "a4f473f40da9bfb6a51387c1217ca2a9";
  const weatherImages = {
    Clear: "/images/clear_sky.png",
    Thunderstorm: "/images/thunderstorm.png",
    Clouds: "/images/clouds.png",
    //etc
  };

  useEffect(() => {
    if (city) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [city]);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          {weatherData.weather[0] && (
            <>
              <div>
                <img
                  src={weatherImages[weatherData.weather[0].main]}
                  alt={weatherData.weather[0].description}
                  style={{ width: 100, height: 100 }}
                />
              </div>
              <p>Description: {weatherData.weather[0].description}</p>
            </>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApp;
