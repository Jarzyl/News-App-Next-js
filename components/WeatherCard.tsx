import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny } from "react-icons/wi"; // przykładowa ikona pogody
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
    // funkcja pobierająca aktualną lokalizację użytkownika
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
    <div className="w-56 h-24 bg-gray-200 rounded-xl flex items-center justify-center text-center mx-auto text-cyan-500 mt-16">
      {weatherData ? (
        <>
          <div className="flex-grow">
          <Link href="/LocalWeather">
            <div className="text-lg font-medium">{location}</div>
            </Link>
              <div className="text-3xl font-bold">{weatherData.main.temp}&deg;C</div>
            </div>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].main}
            className="h-20"/>
        </>
      ) : (
        <div>Ładowanie...</div>
      )}
    </div>
  );
};

export default WeatherCard;
