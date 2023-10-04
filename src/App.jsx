import { React, useEffect, useState } from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";
import { DebounceInput } from "react-debounce-input";
import DateTimeDisplay from "./DateDisplay";
import "font-awesome/css/font-awesome.min.css";
import { trim } from "lodash";

const App = () => {
  const [location, setLocation] = useState("");

  const [weather, setWeather] = useState([]);

  const searchLocation = async (location) => {
    // Check if the weather data for this location is in localStorage
    const cachedData = localStorage.getItem(location);

    if (cachedData) {
      // If cached data exists, parse it and setWeather
      const parsedData = JSON.parse(cachedData);
      // console.log(cachedData);
      setWeather(parsedData);
    } else {
      // If cached data doesn't exist, make an API call to fetch the data
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&&APPID=986e54ddb6dbdf1b9c5dc2d87eac3622`
      );
      const data = await response.json();

      // Cache the data in localStorage

      if (weather?.cod === 200) {
        localStorage.setItem(location, JSON.stringify(data));
      }

      // Set the fetched data in the weather state
      setWeather(data);
      // console.log(data);
    }
  };

  useEffect(() => {
    searchLocation(location.trim());
  }, [location, weather.cod]);

  return (
    <>
      <div className={weather.weather ? weather.weather[0].main : "Default"}>
        <div className="app shade">
          <div className="title">WEATHER APP</div>
          <div className="container">
            <div className="input-container">
              {/* Input field*/}
              <DebounceInput
                type="text"
                placeholder="Search for a city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchLocation(location);
                    e.preventDefault();
                    // setLocation("");
                    e.target.blur();
                  }
                }}
                debounceTimeout={800}
                minLength={2}
                autoComplete="on"
              ></DebounceInput>

              {/* {location ? (
                <i
                  className="fa fa-times-circle close-icon"
                  onClick={() => setLocation("")}
                  style={{ fontSize: "40px", color: "lightgrey" }}
                />
              ) : null} */}
            </div>

            {weather.name !== undefined ? (
              <WeatherInfo weather={weather}></WeatherInfo>
            ) : (
              <div>
                <div className="hint-text">Hit the ↵ Enter key to proceed</div>
                <DateTimeDisplay></DateTimeDisplay>
              </div>
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
