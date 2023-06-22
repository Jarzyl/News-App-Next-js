import Image, { StaticImageData } from "next/image";
import { AiOutlineClockCircle } from 'react-icons/ai';

interface Cart {
    photo: StaticImageData;
    name: string;
    autor: string;
    description: string;
    date: string; 
};

export default function SmallCart({ photo, name, autor, date, description }: Cart) {
  return (
    <div className="grid w-[350px] md:w-[400px] mx-auto">
        <div className=""> 
        <Image src={photo} alt="news photo" width={400} height={100} className="object-cover"/>
        </div>
        <div className="text-sm flex rounded-xl justify-between w-[350px] md:w-[400px]">
            <div className='grid'>
              <span className="text-black font-semibold mb-1">{name}</span>
              <span className="text-gray-400 mb-1">{autor}</span>
            </div>
            <div className='flex items-center'>
              <AiOutlineClockCircle size={25} className='text-slate-700 mr-2' />
              <span className="text-gray-400">{date}</span>
            </div>
          </div>
          <p className="text-black font-bold mt-3">{description}</p>
    </div>
  );
};