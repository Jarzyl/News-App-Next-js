import Image from 'next/image';
import SmallCartv2 from './NewsCarts/SmallCartv2';
import meta from '../../public/Images/meta.jpg';
import bird from '../../public/Images/bird.jpg';
import home from '../../public/Images/home.jpg';
import trap from '../../public/Images/trap.webp';
import { AiOutlineClockCircle } from 'react-icons/ai';

export default function BigStory() {
  return (
    <div className='max-w-[400px] md:max-w-4xl xl:max-w-7xl mx-auto mt-4 mb-4 md:mb-24 justify-center flex lg:justify-normal lg:flex-none'>
      <div className="grid lg:flex gap-6 bg-white">
        <div className="w-[350px] md:w-[550px] xl:w-[800px] mb-6 md:mb-0 pl-0 md:pl-3">
        <div className='font-bold'>
            <h1 className="text-2xl lg:text-4xl mb-6">
            {' '}
            <span className="relative inline-block">
                <span className="absolute bottom-0.5 left-0 w-full h-2 md:h-3 bg-sky-600"></span>
                <span className="relative z-10">First on CNN:</span>
            </span>
            {' '}
            Senators press Google, Meta and Twitter on whether their layoffs could imperil 2024 election
            </h1>
        </div>
          <div className="relative h-[300px] lg:h-[420px]">
            <Image src={meta} alt="Article" fill className='object-cover pl-0 md:pl-1' />
            <div className="absolute bottom-3 left-3 p-2 bg-white text-white text-sm grid rounded-xl">
              <span className="text-black font-semibold mb-1">By Olivia Thompson</span>
              <span className="text-gray-400 mb-1">CNN correspondent</span>
              <div className='flex'>
                <AiOutlineClockCircle size={25} className='text-slate-700 mr-2'/>
                <span className="text-gray-400 mt-0.5">15 June 2023</span>
              </div>
            </div>
          </div>
            <p className='text-gray-500 mt-2 px-1 text-sm'>Three US senators are pressing Facebook-parent Meta, Google-parent Alphabet and Twitter about whether their layoffs may have hindered the companies` ability to fight the spread of misinformation ahead of the 2024 elections..</p>
            <p className='text-black font-bold text-xl mt-4 px-1'>In a letter to the companies dated Tuesday, the lawmakers warned that reported staff cuts to content moderation and other teams could make it harder for the companies to fulfill their commitments to election integrity.</p>
            <div className='border-2 border-black rounded-lg mt-6 w-32 h-10 bg-black text-center justify-center items-center flex cursor-pointer'>
                <button className='text-white font-bold'>Show more</button>
            </div>
        </div>
        <div className="xl:w-[450px] text-black grid">
          <SmallCartv2 photo={bird} description='`Bird Planet` showcases birds like you`ve never seen them before'/>
          <SmallCartv2 photo={home} description='Inside the world of SAOTA: The South African architects designing elite homes'/>
          <SmallCartv2 photo={trap} description='Biden taps Dr. Mandy Cohen for top role as next CDC director'/>
        </div>
      </div>
    </div>
  );
};
