import { useState, useRef, FormEvent } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Weather from '../components/Weather/Weather';
import NavBar from '@/components/Layout/Navbars/NavBar';
import { BsSearch } from 'react-icons/bs';

export default function WeatherPage(): JSX.Element {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!city) {
      setError('The field is empty. Please enter a city name.');
      return;
    }
    if (!/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/.test(city)) {
      setError('Please enter a valid city name.');
      return;
    }
    try {
      await fetchWeather();
      setError('');
    } catch (error) {
      setError('City not found. Please enter a valid city name.');
    }
  };
  
  const fetchWeather = async () => {
    try {
      const response = await axios.get(API_URL);
      setWeather(response.data);
      setCity('');
      if (inputRef.current) {
        inputRef.current.value = ''; // clear input field
      }
    } catch (error) {
      throw new Error('An error occurred while fetching weather data.');
    }
  };
  
  return (
    <div className='bg-white ml-3 mr-3 md:ml-0 md:mr-0'>
      <Head>
        <title>News App | Weather</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/jpg" href="logo.png" />
      </Head>
      <NavBar/>
      <h1 className="text-cyan-400 text-center text-xl md:text-3xl mt-16">Check the weather in any location!</h1>

      <div className="relative flex justify-between items-center max-w-[300px] md:max-w-[500px] w-full m-auto mt-16">
        <form onSubmit={handleSubmit} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-2xl">
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              ref={inputRef}
              className="bg-transparent border-none focus:outline-none text-2xl text-gray-400 w-40 md:w-full"
              type="text"
              placeholder="Search city"/>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <button onClick={handleSubmit}>
            <BsSearch size={20} className="text-gray-400"/>
          </button>
        </form>
      </div>
      {weather && <Weather data={weather}/>}
    </div>
  );
};
