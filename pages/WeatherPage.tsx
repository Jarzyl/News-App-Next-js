import { useState, useRef, FormEvent } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import Layout from "@/components/Layout/Layout";
import CustomHead from "@/components/Layout/CustomHead";
import WeatherCart from "@/components/Weather/Center/WeatherCart";
import WeeklyForecast from "@/components/Weather/Right/Forecast";
import { BiLinkExternal } from "react-icons/bi";
import Country from "@/components/Weather/Right/Country";
import Panel from "@/components/Weather/Left/Panel";
import Chart from "@/components/Weather/Center/Chart";

export default function WeatherPage(): JSX.Element {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchCity, setSearchCity] = useState<string>("");
  const [showWeatherInterface, setShowWeatherInterface] =
    useState<boolean>(false);

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!city) {
      setError("The field is empty. Please enter a city name.");
      return;
    }
    if (!/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/.test(city)) {
      setError("Please enter a valid city name.");
      return;
    }
    try {
      await fetchWeather();
      setError("");
      setSearchCity(city);
      setShowWeatherInterface(true);
    } catch (error) {
      setError("City not found. Please enter a valid city name.");
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(API_URL);
      setWeather(response.data);
      setCity("");
      if (inputRef.current) {
        inputRef.current.value = ""; // clear input field
      }
      console.log("Dane pogodowe:", response.data);
    } catch (error) {
      throw new Error("An error occurred while fetching weather data.");
    }
  };

  return (
    <>
      <CustomHead title="News App | Weather" icon="wlogo.png" />
      <Layout>
        <div className="max-w-[330px] md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mt-3 mb-4 md:mb-24 justify-center lg:justify-between grid lg:flex mx-auto gap-3 px-4">
          {showWeatherInterface ? <Panel /> : null}
          <div className="grid max-w-[330px] md:max-w-[500px] xl:max-w-[700px] h-[400px] mx-auto md:mx-0">
            <div className="flex justify-center mx-auto">
              <div
                className={`relative flex justify-between items-center max-w-[300px] md:max-w-[500px] w-full m-auto mt-5 ${
                  showWeatherInterface ? "" : " lg:ml-96 top-1/4 ml-10"
                }`}
              >
                <form
                  onSubmit={handleSubmit}
                  className="flex justify-between items-center w-full m-auto p-2 bg-transparent border border-gray-300 mb-10 rounded-lg"
                >
                  <div className="flex">
                    <button onClick={handleSubmit}>
                      <BsSearch size={20} className="text-gray-400 mr-3" />
                    </button>
                    <input
                      onChange={(e) => setCity(e.target.value)}
                      ref={inputRef}
                      className="bg-transparent border-none focus:outline-none text-xl text-gray-500 w-48 md:w-56"
                      type="text"
                      placeholder="Search location here"
                    />
                    {error && <p className="text-red-500">{error}</p>}
                  </div>
                </form>
              </div>
            </div>
            {showWeatherInterface ? (
              <>
                <div className="text-sky-600 font-semibold text-md mb-5">
                  <hr className="w-[330px] md:w-[520px] xl:w-[650px] mb-3" />
                  <div className="flex justify-between">
                    <p>Today overview</p>
                    <div className="flex items-center">
                      <p className="mr-3">More detail</p>
                      <BiLinkExternal size={20} />
                    </div>
                  </div>
                </div>
                {weather && <WeatherCart data={weather} />}
                <Chart />
              </>
            ) : null}
          </div>
          {showWeatherInterface && weather ? (
            <div className="grid w-[300px] md:w-[350px] border rounded-lg h-[600px] mx-auto mt-36 md:mt-0">
              <Country data={weather} />
              <WeeklyForecast city={searchCity} />
              <div className="h-[150px]"></div>
            </div>
          ) : null}
        </div>
      </Layout>
    </>
  );
}
