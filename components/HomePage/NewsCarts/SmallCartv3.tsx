import Image, { StaticImageData } from "next/image";
import { AiOutlineClockCircle } from 'react-icons/ai';

interface Cart {
    photo: StaticImageData;
    description: string;
    date: string; 
};

export default function SmallCartv3({ photo, date, description }: Cart) {
  return (
    <div className="grid w-[250px] lg:w-[350px] h-[250px] mx-auto">
        <div className=""> 
        <Image src={photo} alt="news photo" width={250} height={250} className="object-cover"/>
        </div>
        <div className="text-sm flex rounded-xl justify-between mt-2">
            <div className='flex items-center'>
              <AiOutlineClockCircle size={25} className='text-slate-700 mr-2' />
              <span className="text-gray-400">{date}</span>
            </div>
          </div>
          <p className="text-black font-bold mt-3 w-[250px]">{description}</p>
    </div>
  );
};