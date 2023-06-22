import Image from 'next/image';
import samsung from '../public/samsung.jpg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import SmallCart from './SmallCart';
import SmallCartv2 from './SmallCartv2';
import SmallCartv3 from './HomePage/NewsCarts/SmallCartv3';

export default function MostWatched() {
  return (
    <div className='max-w-[400px] md:max-w-4xl xl:max-w-7xl mx-auto mt-8 mb-4 md:mb-24'>
        <div className='grid md:flex text-black px-3 mb-6 text-center'>
            <h1 className="text-2xl lg:text-4xl font-bold">
            {' '}
            <span className="relative inline-block">
                <span className="absolute bottom-0.5 left-0 w-full h-3 bg-green-500"></span>
                <span className="relative z-10">Most Watched</span>
            </span>
            </h1>
            <hr className="w-[270px] md:w-[650px] lg:w-[750px] xl:w-[850px] mx-auto mt-4 border"/>
            <p className='text-lg font-semibold'>See all</p>
        </div>
      <div className="grid md:flex gap-4 bg-white justify-center md:justify-start">
        <div className="w-[300px] md:w-[400px] xl:w-[670px]">
          <div className="relative h-[300px] lg:h-[420px]">
            <Image src={samsung} alt="Article" fill className='object-cover' />
          </div>
          <div className="bg-white text-white text-base mt-3 flex rounded-xl justify-between w-[300px] md:w-[400px]">
            <div className='grid'>
              <span className="text-black font-semibold mb-1">By James Landale</span>
              <span className="text-gray-400 mb-1">Diplomatic correspodent</span>
            </div>
            <div className='flex items-center'>
              <AiOutlineClockCircle size={25} className='text-slate-700 ml-2' />
              <span className="text-gray-400">3 days ago</span>
            </div>
          </div>
            <p className='text-black mt-2 px-1 text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis dignissimos, totam aperiam nihil sint similique deserunt ducimus pariatur odit.</p>
            <p className='text-gray-500 font-normal text-md mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis provident voluptas, impedit debitis velit delectus recusandae eaque aspernatur sapiente fuga. Ipsam reiciendis magnam similique illum repellendus sit dolor a atque, eligendi nesciunt velit consectetur voluptatum culpa sunt nihil laborum distinctio?</p>
        </div>
        <div className="md:w-[500px] text-black grid lg:grid-cols-2 gap-16 mt-4 md:mt-0">
          <SmallCartv3 photo={samsung} description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' date={'15 April 2022'}/>
          <SmallCartv3 photo={samsung} description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' date={'15 April 2022'}/>
          <SmallCartv3 photo={samsung} description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' date={'15 April 2022'}/>
          <SmallCartv3 photo={samsung} description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' date={'15 April 2022'}/>
        </div>
      </div>
    </div>
  );
};
