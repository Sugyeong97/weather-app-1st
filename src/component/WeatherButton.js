import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  const searchByCity = (city) => {};

  return (
    <div className="weather-button">
      <Button variant="outline-info" className="button-margin">
        Current Location
      </Button>

      {cities.map((city) => (
        <Button
          variant="info"
          className="button-margin"
          onClick={() => setCity(city)}
        >
          {city.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
