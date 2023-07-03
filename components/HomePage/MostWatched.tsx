import Image from "next/image";
import SmallCartv3 from "./NewsCarts/SmallCartv3";
import biden from "../../public/Images/biden.webp";
import nfl from "../../public/Images/nfl.webp";
import ocean from "../../public/Images/ocean.webp";
import fit from "../../public/Images/fit.webp";
import lufthansa from "../../public/Images/lufthansa.webp";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function MostWatched() {
  return (
    <div className="max-w-[400px] md:max-w-2xl xl:max-w-7xl mx-auto mt-8 mb-4 md:mb-24">
      <div className="grid md:flex text-black px-3 mb-6 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold">
          {" "}
          <span className="relative inline-block">
            <span className="absolute bottom-0.5 left-0 w-full h-2 md:h-3 bg-sky-600"></span>
            <span className="relative z-10">Most Watched</span>
          </span>
        </h1>
        <hr className="w-[270px] md:w-[650px] lg:w-[750px] xl:w-[900px] mx-auto mt-4 border" />
        <p className="text-lg font-semibold lg:mr-5">See all</p>
      </div>
      <div className="grid md:flex gap-4 bg-white justify-center md:justify-start">
        <div className="w-[300px] md:w-[400px] xl:w-[700px] px-2">
          <div className="relative h-[300px] lg:h-[420px]">
            <Image
              src={biden}
              alt="Article"
              fill
              className="object-cover pl-0 md:pl-1 rounded-lg"
            />
          </div>
          <div className="bg-white text-white text-base mt-3 flex rounded-xl justify-between w-[300px] xl:w-[660px] px-1">
            <div className="grid">
              <span className="text-black font-semibold mb-1">
                By Isabella Wright
              </span>
              <span className="text-gray-400 mb-1">
                Diplomatic correspodent
              </span>
            </div>
            <div className="flex items-center mb-2">
              <AiOutlineClockCircle size={25} className="text-slate-700 ml-2" />
              <span className="text-gray-400 ml-2">22 June 2023</span>
            </div>
          </div>
          <p className="text-black mt-2 text-xl font-bold pl-0 md:pl-1">
            Opinion: Biden rolls out the red carpet for a controversial world
            leader.
          </p>
          <p className="text-gray-500 font-normal text-md mt-4 pl-0 md:pl-1">
            The images the world will see this week as Indian Prime Minister
            Narendra Modi visits the United States could serve as a turning
            point in one of the world`s most important relationships. That, at
            least, is the potential for this eventful week.{" "}
            <span className="text-black font-bold">Read more...</span>
          </p>
        </div>
        <div className="md:w-[500px] text-black grid xl:grid-cols-2 gap-16 mt-6 md:mt-0">
          <SmallCartv3
            photo={nfl}
            description="NFL star Aaron Rodgers credits psychedelics for improving his performance on the football field"
            date={"20 June 2023"}
          />
          <SmallCartv3
            photo={fit}
            description="What you should know about muscle memory to help you stay fit"
            date={"20 June 2023"}
          />
          <SmallCartv3
            photo={ocean}
            description="What we know about the ocean`s depths — and why it`s so risky to explore it"
            date={"20 June 2023"}
          />
          <SmallCartv3
            photo={lufthansa}
            description="Lufthansa sold six A380s to Airbus. Then things went a little wrong"
            date={"20 June 2023"}
          />
        </div>
      </div>
    </div>
  );
}