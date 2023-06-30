import { WeatherData } from "@/Types/WeatherData";

interface Props {
  data: WeatherData;
}

const Country: React.FC<Props> = ({ data }) => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="grid justify-between w-[300px] md:max-w-[350px] h-[180px] mx-auto px-2 md:px-0">
      <div className="flex items-center justify-between text-slate-500">
        <div>
          <p className="text-2xl text-center font-bold mt-4 mb-1 mr-3">
            {data.name}
          </p>
          <p className="font-bold text-xl">{data.sys.country}</p>
        </div>
        <p className="font-bold text-xl">{currentTime}</p>
      </div>
      <div className="flex items-center justify-between pt-1 text-sky-600">
        <p className="text-5xl">{data.main.temp.toFixed(0)}&#176;</p>
        <img
          src={
            data.weather && data.weather[0] && data.weather[0].icon
              ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
              : ""
          }
          alt="weathericon"
          width="80"
          height="80"
        />
        <p className="text-lg text-sky-600">
          {data.weather[0].description.replace(/^\w/, (c) => c.toUpperCase())}
        </p>
      </div>
      <hr className="w-[270px]" />
    </div>
  );
};

export default Country;
