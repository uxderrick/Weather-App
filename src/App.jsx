import { React, useEffect, useState, useCallback } from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";
import { DebounceInput } from "react-debounce-input";

const API_URL =
  "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=986e54ddb6dbdf1b9c5dc2d87eac3622";

const App = () => {
  const [location, setLocation] = useState("");

  const [weather, setWeather] = useState([]);

  const [desc, setDesc] = useState("");

  const searchLocation = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&&APPID=986e54ddb6dbdf1b9c5dc2d87eac3622`
    );
    // `${API_URL}`
    const data = await response.json();

    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    searchLocation(location);
  }, [location]);

  return (
    <>
      <div className={weather.weather ? weather.weather[0].main : "Default"}>
        <div className="app shade">
          <div className="title">WEATHER APP</div>
          <div className="container">
            {/* Input field*/}
            <DebounceInput
              type="text"
              placeholder="Search for a city"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // setLocation("");
                  searchLocation(location);
                  e.preventDefault();
                }
              }}
              debounceTimeout={500}
              minLength={2}
            ></DebounceInput>

            {weather.name !== undefined ? (
              <WeatherInfo weather={weather}></WeatherInfo>
            ) : (
              <div className="hint-text">Hit the ↵ Enter key to proceed</div>
            )}

            {weather.cod == 404 ? (
              <div className="error-msg">{`"${location}" does not exist`}</div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
