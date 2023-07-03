import { IconType } from "react-icons";

export interface WeatherInfoProps {
  label: string;
  value: string | number;
  weatherIcon: IconType;
  icon: IconType;
  text: string;
  color: string;
}
