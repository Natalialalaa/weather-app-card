import React, { useState } from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";
import CityInput from "./CityInput";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const handleSelectCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Today's weather</h1>
      </header>
      <main>
        <CityInput onSelectCity={handleSelectCity} />{" "}
        {/* Render CityInput comp */}
        <WeatherApp city={selectedCity} />{" "}
        {/* Pass city selectedto  WeatherApp comp*/}
      </main>
    </div>
  );
}

export default App;
