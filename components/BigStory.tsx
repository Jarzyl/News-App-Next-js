import Image from 'next/image';
import samsung from '../public/samsung.jpg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import SmallCartv2 from '../components/HomePage/NewsCarts/SmallCartv2';

export default function BigStory() {
  return (
    <div className='max-w-[400px] md:max-w-4xl xl:max-w-7xl mx-auto mt-4 mb-4 md:mb-24'>
      <div className="grid md:flex gap-6 bg-white">
        <div className="w-[350px] md:w-[550px] xl:w-[750px]">
        <div className=''>
            <h1 className="text-2xl lg:text-4xl mb-6">
            {' '}
            <span className="relative inline-block">
                <span className="absolute bottom-0.5 left-0 w-full h-4 bg-green-500"></span>
                <span className="relative z-10">HOT</span>
            </span>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente recusandae.
            </h1>
        </div>
          <div className="relative h-[300px] lg:h-[420px]">
            <Image src={samsung} alt="Article" fill className='object-cover' />
            <div className="absolute bottom-3 left-3 p-2 bg-white text-white text-sm grid rounded-xl">
              <span className="text-black font-semibold mb-1">By Alex Maxerow</span>
              <span className="text-gray-400 mb-1">INFO correspodent</span>
              <div className='flex'>
                <AiOutlineClockCircle size={25} className='text-slate-700 mr-2'/>
                <span className="text-gray-400">15 April 2022</span>
              </div>
            </div>
          </div>
            <p className='text-gray-500 mt-2 px-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis dignissimos, totam aperiam nihil sint similique deserunt ducimus pariatur odit.</p>
            <p className='text-black font-bold text-xl mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis provident voluptas, impedit debitis velit delectus recusandae eaque aspernatur sapiente fuga. Ipsam reiciendis magnam similique illum repellendus sit dolor a atque, eligendi nesciunt velit consectetur voluptatum culpa sunt nihil laborum distinctio?</p>
            <div className='border-2 mt-6 w-24 bg-black'>
                <button className='text-white'>Show more</button>
            </div>
        </div>
        <div className="md:w-[450px] text-black grid">
          <SmallCartv2 photo={samsung} description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'/>
          <SmallCartv2 photo={samsung} description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'/>
          <SmallCartv2 photo={samsung} description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'/>
        </div>
      </div>
    </div>
  );
};
