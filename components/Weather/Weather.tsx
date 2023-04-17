import React from 'react';

interface WeatherData {
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
}

interface Props {
  data: WeatherData;
}

const Weather: React.FC<Props> = ({ data }) => {
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-full m-auto'>
      {/* Top */}
      <div className='relative flex justify-between pt-12 text-cyan-300'>
        <div className='flex flex-col items-center '>
          <img
            src={data.weather && data.weather[0] && data.weather[0].icon ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : ''}         
            alt='weathericon'
            width='130'
            height='130'
          />
        </div>
        <p className='text-8xl'>{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      {/* Bottom */}

      <div className='bg-white shadow-lg m-2 relative p-4 rounded-lg text-cyan-300 xl:mt-20'>
        <p className='text-2xl text-center font-bold pb-6'>Weather in {data.name}</p>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-2 justify-between text-center'>
          <div>
            <p className='font-bold text-xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className='text-xl'>Feels Like</p>
          </div>
          <div>
            <p className='font-bold text-xl'>{data.main.humidity}%</p>
            <p className='text-xl'>Humidity</p>
          </div>
          <div>
            <p className='font-bold text-xl'>{data.wind.speed.toFixed(0)} KM/H</p>
            <p className='text-xl'>Winds</p>
          </div>
          <div>
            <p className='font-bold text-xl'>{data.main.pressure} </p>
            <p className='text-xl'>Pressure</p>
          </div>
          <div>
            <p className='font-bold text-xl'>{data.sys.country} </p>
            <p className='text-xl'>Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
