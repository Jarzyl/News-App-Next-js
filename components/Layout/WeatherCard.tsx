import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { WeatherData } from "@/Types/WeatherData";
import { toast } from "react-toastify";

const WeatherCard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    const getLocation = async () => {
      try {
        if (navigator.geolocation) {
          const position = await new Promise<GeolocationPosition>(
            (resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            }
          );

          const { latitude, longitude } = position.coords;

          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
          );

          setWeatherData(response.data);
          setLocation(response.data.name);
        } else {
          toast.error(
            <div className="flex justify-center">
              <span className="text-red-500">
                Geolocation is not supported by this browser.
              </span>
            </div>,
            {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      } catch (error) {
        toast.error(
          <div className="flex justify-center">
            <span className="text-red-500">
              An error occurred while fetching weather data.
            </span>
          </div>,
          {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    };
    getLocation();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center text-center mx-auto text-gray-500">
        {weatherData ? (
          <>
            <div className="flex">
              <Link href="/WeatherPage" className="flex mt-3">
                <HiOutlineExternalLink size={25} className="text-sky-600" />
                <p className="font-semibold">Full forecast</p>
              </Link>
              <Image
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].main}
                width={70}
                height={30}
                className="mr-3 h-16"
              />
              <div className="text-3xl font-bold text-black mt-1">
                {Math.round(weatherData.main.temp)}&deg;C
              </div>
              <div className="text-lg font-medium ml-3 mt-3">{location}</div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;