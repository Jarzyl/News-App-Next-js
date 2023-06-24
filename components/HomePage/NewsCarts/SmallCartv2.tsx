import Image, { StaticImageData } from "next/image";

interface Cart {
  photo: StaticImageData;
  description: string;
}

export default function SmallCartv2({ photo, description }: Cart) {
  return (
    <div className="grid w-[350px] md:w-[300px] xl:w-[400px] mx-auto">
      <div className="mb-1">
        <Image
          src={photo}
          alt="news photo"
          width={400}
          height={100}
          className="object-cover rounded-lg"
        />
      </div>
      <p className="text-black font-bold mt-1 mb-7">{description}</p>
    </div>
  );
}