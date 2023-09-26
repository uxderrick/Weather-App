import { React, useEffect, useState } from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

const API_URL =
  "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=986e54ddb6dbdf1b9c5dc2d87eac3622";

const App = () => {
  const [location, setLocation] = useState("");

  const [weather, setWeather] = useState([]);

  const searchLocation = async (location) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&&APPID=986e54ddb6dbdf1b9c5dc2d87eac3622`
    );
    // `${API_URL}`
    const data = await response.json();

    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    searchLocation(location);
  }, []);

  //interface
  return (
    <>
      <div className="app">
        <div className="title">WEATHER APP</div>
        <div className="container">
          {/* Input field*/}
          <input
            type="text"
            placeholder="Search for a city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchLocation(location);
                e.preventDefault();
              }
            }}
          ></input>

          {weather.name !== undefined ? (
            <WeatherInfo weather={weather}></WeatherInfo>
          ) : (
            <div className="hit-text">
              Hit the ↵ Enter key to proceed
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
