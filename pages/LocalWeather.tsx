import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import CustomHead from "@/components/Layout/CustomHead";

type WeatherData = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    icon: string;
    main: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
};

const LocalWeather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [, setLocation] = useState<string>("");

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
    <>
      <CustomHead title="News App | Local Weather" icon="wlogo.png" />
      <Layout>
        <div className="w-full h-screen bg-white rounded-md grid items-center justify-center text-center mx-auto">
          <h1 className="text-black text-center text-xl md:text-3xl">
            Check your local weather!
          </h1>
          {weatherData ? (
            <>
              <div className="items-center justify-center">
                <div className="bg-white shadow-lg w-full h-full md:h-80 relative p-8 rounded-lg text-gray-500">
                  <p className="text-2xl text-center font-bold pb-10">
                    Weather in {weatherData.name}
                  </p>
                  <div className="flex justify-center pb-10">
                    <Image
                      src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                      alt={weatherData.weather[0].main}
                      className="h-20"
                      width={80}
                      height={30}
                    />
                    <div className="text-4xl font-bold">
                      {weatherData.main.temp}&deg;C
                    </div>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-2 justify-between text-center">
                    <div>
                      <p className="font-bold text-xl pb-4">
                        {weatherData.main.feels_like.toFixed(0)}&#176;
                      </p>
                      <p className="text-xl">Feels Like</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl pb-4">
                        {weatherData.main.humidity}%
                      </p>
                      <p className="text-xl">Humidity</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl pb-4">
                        {weatherData.wind.speed.toFixed(0)}KM/H
                      </p>
                      <p className="text-xl">Winds</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl pb-4">
                        {weatherData.main.pressure}
                      </p>
                      <p className="text-xl">Pressure</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl pb-4">
                        {weatherData.sys.country}
                      </p>
                      <p className="text-xl">Country</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default LocalWeather;