import { useState, useRef, FormEvent } from "react";
import axios from "axios";
import Weather from "../components/Weather/Weather";
import { BsSearch } from "react-icons/bs";
import Layout from "@/components/Layout/Layout";
import CustomHead from "@/components/Layout/CustomHead";

export default function WeatherPage(): JSX.Element {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

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
    } catch (error) {
      throw new Error("An error occurred while fetching weather data.");
    }
  };

  return (
    <div className="bg-white ml-3 mr-3 md:ml-0 md:mr-0">
      <CustomHead title="News App | Weather" icon="wlogo.png" />
      <Layout>
        <h1 className="text-gray-500 text-center text-xl md:text-3xl mt-16">
          Check the weather in any location!
        </h1>
        <div className="relative flex justify-between items-center max-w-[300px] md:max-w-[500px] w-full m-auto mt-16">
          <form
            onSubmit={handleSubmit}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-2xl mb-10"
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                ref={inputRef}
                className="bg-transparent border-none focus:outline-none text-2xl text-gray-400 w-40 md:w-full"
                type="text"
                placeholder="Search city"
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <button onClick={handleSubmit}>
              <BsSearch size={20} className="text-gray-400" />
            </button>
          </form>
        </div>
        {weather && <Weather data={weather} />}
      </Layout>
    </div>
  );
}