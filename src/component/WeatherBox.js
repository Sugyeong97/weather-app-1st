import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weather-box">
      <div>{weather?.name.toUpperCase()}</div>
      <h2>{weather?.main.temp} C</h2>
      <h2>{weather?.weather[0].description.toUpperCase()}</h2>
    </div>
  );
};

export default WeatherBox;
