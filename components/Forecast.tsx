import React, { useState, useEffect } from "react";
import axios from "axios";

const [forecastData, setForecastData] = useState<any[]>([]);

const getForecastData = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
          )
          .then((response) => {
            const forecastList = response.data.list.filter(
              (data: any) => data.dt_txt.includes("12:00:00")
            );
            setForecastData(forecastList);
          })
          .catch((error) => {
            console.error(error);
          });
      },
      (error) => {
        console.error(error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

useEffect(() => {
  getForecastData();
}, []);
