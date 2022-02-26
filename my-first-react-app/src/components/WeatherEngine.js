import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";
import { ScaleLoader } from "react-spinners";

const WeatherEngine = ({ location }) => {
  //const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    city: null,
    country: null,
  });

  // old version of the weather const variable used as a reliable method for calling a weather card
  // all of these const variables below are inside the weather const
  // these const variables were previously used in the handleSearch const
  // const [city, setCity] = useState("");
  // const [temp, setTemp] = useState("");
  // const [condition, setCondition] = useState("");
  // const [country, setCountry] = useState("");

  //data from: https://openweathermap.org/current
  const getWeather = async (query) => {
    setLoading(true);
    try {
      const apiResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query},uk&units=metric&APPID=07d1defed4fac6264a8338d3a97b820f`
      );
      const responseJSON = await apiResponse.json();
      setWeather({
        temp: responseJSON.main.temp,
        condition: responseJSON.weather[0].main,
        city: responseJSON.name,
        country: responseJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
    //return responseJSON;
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "black" }}>
        There has been an error
        <br />
        <button onClick={() => setError(false)}>Reset</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "240px",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          //border: "2px solid black",
        }}
      >
        <ScaleLoader size={20} />
      </div>
    );
  }

  return (
    <div>
      {/* <WeatherCard
        temp={-10}
        condition="Tornado"
        city="Texel"
        country="NL"
      ></WeatherCard>
      <WeatherCard
        temp={12}
        condition="Haze"
        city="Sydney"
        country="AU"
      ></WeatherCard>
      <WeatherCard
        temp={13}
        condition="Thunderstorm"
        city="New York"
        country="US"
      ></WeatherCard> */}
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
        getWeather={getWeather}
      ></WeatherCard>
    </div>
  );
};

export default WeatherEngine;
