import { IconType } from 'react-icons';

interface WeatherInfoProps {
  label: string;
  value: string | number;
  weatherIcon: IconType;
  icon: IconType;
  text: string;
  color: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ label, value, text, icon: Icon, weatherIcon: WeatherIcon, color }) => {
  return (
    <div className='flex items-center bg-gray-100 rounded-lg h-20 px-5'>
      <div className='pr-4'>
        <WeatherIcon size={25} className="text-sky-600" />
      </div>
      <div className='w-28'>
        <p className='text-md mb-1 text-gray-500'>{label}</p>
        <p className='font-bold text-xl'>{value}</p>
      </div>
      <div className='flex text-center mt-6 ml-6'>
        <Icon size={20} className={`${color} mr-1`} />
        <p className='text-sm text-gray-400'>{text}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
