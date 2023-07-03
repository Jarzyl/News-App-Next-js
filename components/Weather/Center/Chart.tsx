import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { WeatherData } from "@/Types/WeatherData";
import { ChartData } from "@/Types/Chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
);

interface WeeklyForecastProps {
  city: string;
}

const LineChart: React.FC<WeeklyForecastProps> = ({ city }) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState<any>({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
        );
        const data = await response.json();

        const dailyData: WeatherData[] = data.list.filter((item: WeatherData) =>
          item.dt_txt.includes("12:00:00")
        );

        const labels = dailyData.map((item: WeatherData) =>
          item.dt_txt.substr(5, 5)
        );
        const temperatures = dailyData.map(
          (item: WeatherData) => item.main.temp
        );

        setChartData({
          labels,
          datasets: [
            {
              label: "Temperature (°C)",
              data: temperatures,
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgb(53, 162, 235, 0.4)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (city) {
      fetchWeatherData();
    }

    setChartOptions({
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        y: {
          min: 15,
          max: 40,
          stepSize: 5,
          ticks: {
            beginAtZero: true,
            color: "#0284c7",
            font: {
              weight: "bold",
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    });
  }, [city]);

  return (
    <div className="text-sky-600 font-semibold text-md mb-5 grid">
      <div className="justify-between">
        <p className="mb-3">Average Daily Temperature</p>
        <div className="relative w-[300px] md:w-[500px] xl:w-[580px] h-64 m-auto p-4 border rounded-lg bg-white">
          {chartData.labels.length > 0 ? (
            <Line data={chartData} options={chartOptions} />
          ) : (
            <div>Loading chart...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LineChart;