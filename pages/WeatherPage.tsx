import React, { useState, useRef, FormEvent } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Weather from '../components/Weather/Weather';
import NavBar from '@/components/Navbars/NavBar';
import { BsSearch } from 'react-icons/bs';

export default function WeatherPage(): JSX.Element {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!city) {
      setError('Please enter a city name.');
      return;
    }
    // check for other invalid characters or data here
    // if everything is valid, fetch weather data
    fetchWeather();
    setError(''); // clear error message
  };

  const fetchWeather = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        setError('City not found. Please enter a valid city name.');
      });
    setCity('');
    if (inputRef.current) {
      inputRef.current.value = ''; // clear input field
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

      {/* Search */}
      <div className="relative flex justify-between items-center max-w-[300px] md:max-w-[500px] w-full m-auto mt-16">
        <form onSubmit={handleSubmit} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-2xl">
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              ref={inputRef} // add a ref to the input field
              className="bg-transparent border-none focus:outline-none text-2xl text-gray-400 w-40 md:w-full"
              type="text"
              placeholder="Search city"
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <button onClick={handleSubmit}>
            <BsSearch size={20} className="text-gray-400"/>
          </button>
        </form>
      </div>

      {/* Weather data display */}

      {weather && <Weather data={weather}/>}
    </div>
  );
};
