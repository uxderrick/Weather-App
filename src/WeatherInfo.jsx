import React from "react";

const WeatherInfo = ({ weather }) => {
  return (
    <>
      <div className="weather-info">
        <div className="celsius">
          {weather.name}, {weather.sys?.country}
        </div>

        <div className="temperature-details">
          <div className="temp">{weather.main?.temp.toFixed()}</div>
          <div className="celsius">°C</div>
        </div>
        <div className="other-details-row">
          <div className="other-details">
            <p className="other-details-value">
              {weather.main?.humidity.toFixed(1)}%
            </p>
            <p className="other-details-label">Humidity</p>
          </div>
          <div className="other-details">
            <p className="other-details-value">
              {weather.wind?.speed.toFixed(1)}m/s
            </p>
            <p className="other-details-label">Wind Speed</p>
          </div>

          {/* <p>{weather.weather ? <p>{weather.weather[0].main}</p> : null}</p> */}
          {/* {weather.weather ? {weather.weather[0].main}: null} */}
        </div>
      </div>
    </>
  );
};

export default WeatherInfo;
