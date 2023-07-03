import Image from "next/image";
import obama from "../../public/Images/obama.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function HomeArticle() {
  return (
    <div className="max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-3 mt-10 mb-4 md:mb-24">
      <div className="grid md:flex gap-6 bg-white pl-0 md:pl-1">
        <div className="md:w-1/2 relative h-[200px] lg:h-[350px]">
          <Image
            src={obama}
            alt="Article"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-3 left-3 p-2 bg-white text-white text-sm grid rounded-xl">
            <span className="text-black font-semibold mb-1">By Noah Davis</span>
            <span className="text-gray-400 mb-1">CNN correspondent</span>
            <div className="flex">
              <AiOutlineClockCircle size={25} className="text-slate-700 mr-2" />
              <span className="text-gray-400 mt-0.5">23 June 2023</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 text-black p-4">
          <h1 className="font-bold text-4xl lg:text-5xl mb-3">CNN Politics</h1>
          <h2 className="text-2xl font-bold mb-2">
            Obama warns democratic institutions are `creaky` but Trump`s
            indictment is proof rule of law still exists in US
          </h2>
          <p className="text-gray-400">
            Democratic institutions in the United States and around the world
            have grown “creaky,” former President Barack Obama warned in an
            exclusive CNN interview Thursday, and it remains incumbent on
            American leaders to find ways to sustain them into the future.{" "}
            <span className="text-black font-bold">Read more...</span>
          </p>
        </div>
      </div>
    </div>
  );
}