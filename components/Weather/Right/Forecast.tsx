import { useEffect, useState } from "react";
import { WeatherData } from "@/Types/WeatherData";

interface WeeklyForecastProps {
  city: string;
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ city }) => {
  const [forecastData, setForecastData] = useState<WeatherData[]>([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
        );
        const data = await response.json();

        const dailyData: WeatherData[] = data.list.filter((item: WeatherData) =>
          item.dt_txt.includes("12:00:00")
        );

        setForecastData(dailyData);
      } catch (error) {
        console.error("Błąd podczas pobierania danych prognozy:", error);
      }
    };

    fetchForecast();
  }, [city]);

  const formattedDate = (date: Date) => {
    return date.toLocaleString();
  };

  return (
    <div className="text-center justify-center grid w-[300px] mx-auto">
      <h2 className="my-1 text-black font-semibold text-lg">
        Daily Forecast for {city}
      </h2>
      {forecastData.length > 0 ? (
        <ul className="px-0 md:px-2">
          {forecastData.map((item: WeatherData) => (
            <li
              key={item.dt}
              className="flex bg-gray-400/50 rounded-lg items-center my-2 w-72 px-1 justify-center"
            >
              <p className="text-sky-600 font-semibold text-xl mr-2">
                {(item.main.temp - 273.15).toFixed(0)}°C
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="Icon"
                width={40}
                height={40}
                className="mr-2"
              />
              <p className="text-gray-600">
                {formattedDate(new Date(item.dt_txt))}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default WeeklyForecast;
