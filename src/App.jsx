import { React, useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./WeatherCard";
import Textfield from "./Textfield";

const API_URL =
  "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=986e54ddb6dbdf1b9c5dc2d87eac3622";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
    searchLocation("Takoradi");
  }, []);

  //interface
  return (
    <>
      <div className="app">
        <h1>Weather App</h1>
        <div className="container">
          <div>
            <Textfield></Textfield>
          </div>
          <div className="p-3"></div>

          <div>
            <WeatherCard weather={weather}></WeatherCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
