//import logo from './logo.svg';
import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <div>
        <WeatherEngine location="Sydney, AU" />
      </div>
      {/* <div>
        <WeatherEngine location="Sydney, AU" />
        <WeatherEngine location="Amsterdam, NL" />
        <WeatherEngine location="New York, US" />
        <WeatherEngine location="Ankara, TR" />
      </div>
      <div>
        <WeatherEngine location="Melbourne, AU" />
        <WeatherEngine location="Moscow, RU" />
        <WeatherEngine location="Washington, US" />
        <WeatherEngine location="Kuala Lumpur, MY" />
      </div> */}
    </div>
  );
}

export default App;
