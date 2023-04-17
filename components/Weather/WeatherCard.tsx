import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

type WeatherData = {
  weather: {
    main: string;
    icon: string;
  }[];
  main: {
    temp: number;
  };
};

const WeatherCard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    // a function that retrieves the user's current location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
              )
              .then((response) => {
                setWeatherData(response.data);
                setLocation(response.data.name);
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
    getLocation();
  }, []);

  return (
    <div>
    <h1 className="text-teal-500 text-center text-lg md:text-2xl xl:text-3xl mt-12 md:mt-16 mb-2 md:mb-6">Your local weather</h1>
    <div className="w-56 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center text-center mx-auto text-cyan-500">
      {weatherData ? (
        <>
          <div className="flex-grow">
          <Link href="/LocalWeather">
            <div className="text-lg font-medium">{location}</div>
            </Link>
            <div className="text-3xl font-bold">{Math.round(weatherData.main.temp)}&deg;C</div>
            </div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].main}
            className="h-20"/>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </div>
  );
};

export default WeatherCard;
