import React from "react";
import styled from "@emotion/styled";
//import App from 'C:/Users/sempl/OneDrive/Documenten/Personal/Projects/webprojects/Personal-webpage/my-first-react-app/src/App';
import { motion } from "framer-motion";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  let bottomColor = 0;
  let topColor = 0;
  //bg = background
  let bg = null;
  if (temp > 12) {
    //hot weather
    //original formula:
    //bottomColor = (1 - (temp - 12) / 28) * 255;
    //topColor = bottomColor - 150;
    bottomColor = (1 - (temp - 12) / 64) * 255;
    topColor = bottomColor - 170;
    bg = `linear-gradient(
      to bottom,
      rgba(255, ${Math.abs(topColor)}, 0),
      rgba(255, ${bottomColor}, 0)
    )`;
  } else if (temp <= 12) {
    //cold weather
    //original formula:
    //bottomColor = (1 - (temp + 20) / 32) * 255;
    //topColor = bottomColor - 150;
    bottomColor = (1 - (temp + 20) / 84) * 255;
    topColor = bottomColor - 150;
    bg = `linear-gradient(
      to bottom,
      rgba(0, ${bottomColor}, 255),
      rgba(0, ${Math.abs(topColor)}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location
          getWeather={getWeather}
          city={city}
          country={country}
        ></Location>
        <Icon condition={condition}></Icon>
        <Condition temp={temp} condition={condition}></Condition>
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
