import Image, { StaticImageData } from "next/image";

interface Cart {
    photo: StaticImageData;
    description: string;
};

export default function SmallCartv2({ photo, description }: Cart) {
  return (
    <div className="grid w-[350px] md:w-[300px] xl:w-[350px] mx-auto">
        <div className=""> 
        <Image src={photo} alt="news photo" width={400} height={100} className="object-cover"/>
        </div>
          <p className="text-black font-bold mt-1 mb-6">{description}</p>
    </div>
  );
};