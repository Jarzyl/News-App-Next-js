export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    temp_max: number;
  };
  weather: {
    icon: string;
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  dt: number;
  dt_txt: string;
}
