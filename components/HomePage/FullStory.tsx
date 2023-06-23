import Image from 'next/image';
import SmallCart from './NewsCarts/SmallCart';
import museum from '../../public/Images/museum.webp';
import plane from '../../public/Images/plane.webp';
import stone from '../../public/Images/stone.webp';
import nba from '../../public/Images/nba.webp';
import { AiOutlineClockCircle } from 'react-icons/ai';

export default function FullStory() {
  return (
    <div className='max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-8 md:mb-24'>
    <div className='grid md:flex text-black px-3 text-center'>
            <h1 className="text-2xl lg:text-4xl font-bold">
            {' '}
            <span className="relative inline-block">
                <span className="absolute bottom-0.5 left-0 w-full h-2 md:h-3 bg-sky-600"></span>
                <span className="relative z-10">Full story</span>
            </span>
            </h1>
            <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1000px] mx-auto mt-4 border"/>
            <p className='text-lg font-semibold lg:mr-5'>See all</p>
        </div>
    <div className="max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-4 md:mt-8 mb-16">
      <div className="grid lg:flex gap-6 bg-white">
        <div className="md:w-1/2 text-black p-4 grid">
          <div className=" bg-white text-white text-sm flex rounded-xl justify-between w-[300px]">
            <div className='grid'>
              <span className="text-black font-semibold">By James Landale</span>
              <span className="text-gray-400">Architecture correspondent</span>
            </div>
            <div className='flex items-center'>
              <AiOutlineClockCircle size={25} className='text-slate-700 mb-3' />
              <span className="text-gray-400 ml-3 mb-3">3 days ago</span>
            </div>
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold mb-2 mt-6">British Museum apologizes after using translator`s work in China exhibition without pay or acknowledgment</h2>
          <p className="text-gray-400">When the British Museum launched its “China`s hidden century” exhibition last month, writer and translator Yilin Wang began getting confusing messages from her peers. <span className='text-black font-bold'>Read more...</span></p>
        </div>
        <div className="w-[350px] lg:w-[590px] relative h-[300px] lg:h-[420px] mx-auto md:mx-0">
          <Image src={museum} alt="Article" fill className='object-cover' />
        </div>
      </div>
      <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-6 md:mt-16 px-4'>
      <SmallCart photo={plane} name={'Jean Mackenzie'} autor={'CNN Jurnalist'} date={'9 May 2023'} description={'The A380 was nearly extinct. Now a new airline says it`s building a superjumbo-only fleet'}/>
      <SmallCart photo={stone} name={'Emma Johnson'} autor={'Reuters Journalist'} date={'10 May 2023'} description={'Archaeologists unearth 4,000-year-old Stonehenge-like sanctuary in the Netherlands'}/>
      <SmallCart photo={nba} name={'Liam Carter'} autor={'Sport Reporter'} date={'12 June 2023'} description={'Victor Wembanyama taken by the San Antonio Spurs with first pick of NBA Draft'}/>

      </div>
    </div>
    </div>
  );
};
