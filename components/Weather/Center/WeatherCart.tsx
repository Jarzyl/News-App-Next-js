import { WeatherData } from "@/Types/WeatherData";
import WeatherInfo from "./WeatherInfo";
import { FaTemperatureHigh } from "react-icons/fa";
import { MdWaves } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { BsWind, BsArrowDown, BsArrowUp } from "react-icons/bs";

interface Props {
  data: WeatherData;
}

const WeatherCart: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col justify-between max-w-[600px] w-full h-full m-auto mb-6">
      <div className="grid md:grid-cols-2 gap-3 justify-center md:justify-between mx-auto ">
        <WeatherInfo
          weatherIcon={BsWind}
          text="2 km/h"
          icon={BsArrowDown}
          color="text-red-600"
          label="Wind Speed"
          value={`${data.wind.speed.toFixed(0)} km/h`}
        />
        <WeatherInfo
          weatherIcon={WiHumidity}
          text="3%"
          icon={BsArrowUp}
          color="text-green-500"
          label="Humidity"
          value={`${data.main.humidity}%`}
        />
        <WeatherInfo
          weatherIcon={MdWaves}
          text="32 hpa"
          icon={BsArrowUp}
          color="text-green-500"
          label="Pressure"
          value={`${data.main.pressure}hpa`}
        />
        <WeatherInfo
          weatherIcon={FaTemperatureHigh}
          text="1.5 °C"
          icon={BsArrowDown}
          color="text-red-600"
          label="Temp Max"
          value={`${data.main.temp_max}°C`}
        />
      </div>
    </div>
  );
};

export default WeatherCart;
