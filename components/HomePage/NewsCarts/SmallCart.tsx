import Image, { StaticImageData } from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";

interface Cart {
  photo: StaticImageData;
  name: string;
  autor: string;
  description: string;
  date: string;
}

export default function SmallCart({ photo, name, autor, date, description }: Cart) {
  return (
    <div className="grid w-[350px] lg:w-[400px] mx-auto">
      <div>
        <Image
          src={photo}
          alt="news photo"
          width={380}
          height={100}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="text-sm flex rounded-xl justify-between w-[350px] lg:w-[380px]">
        <div className="grid">
          <span className="text-black font-semibold mt-2 mb-1">{name}</span>
          <span className="text-gray-400 mb-1">{autor}</span>
        </div>
        <div className="flex items-center">
          <AiOutlineClockCircle size={25} className="text-slate-700 mr-2" />
          <span className="text-gray-400">{date}</span>
        </div>
      </div>
      <p className="text-black font-bold mt-3 lg:w-[380px]">{description}</p>
    </div>
  );
}