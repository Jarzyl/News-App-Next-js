import Image from 'next/image';
import samsung from '../public/samsung.jpg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import SmallCart from '../components/HomePage/NewsCarts/SmallCart';

export default function FullStory() {
  return (
    <div className='max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-8 md:mb-24'>
    <div className='flex text-black px-3'>
            <h1 className="text-2xl lg:text-4xl font-bold">
            {' '}
            <span className="relative inline-block">
                <span className="absolute bottom-0.5 left-0 w-full h-3 bg-green-500"></span>
                <span className="relative z-10">Full story</span>
            </span>
            </h1>
            <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1000px] mx-auto mt-4 border"/>
            <p className='text-lg font-semibold'>See all</p>
        </div>
    <div className="max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-8 mb-16">
      <div className="grid lg:flex gap-6 bg-white">
        <div className="md:w-1/2 text-black p-4 grid">
          <div className=" bg-white text-white text-sm flex rounded-xl justify-between w-[300px] md:w-[400px]">
            <div className='grid'>
              <span className="text-black font-semibold mb-1">By James Landale</span>
              <span className="text-gray-400 mb-1">Diplomatic correspodent</span>
            </div>
            <div className='flex items-center'>
              <AiOutlineClockCircle size={25} className='text-slate-700 ml-2' />
              <span className="text-gray-400">3 days ago</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Samsung Galaxy A14 5G review: Galaxy S23 style meets rock-bottom price - Android Authority</h2>
          <p className="text-gray-400">Can Samsung right a few of the missteps from one of its most popular budget models? Find out in our Samsung Galaxy A14 5G review.</p>
          <p className="text-gray-400">Samsung`s budget-friendly Galaxy A series is as reliable as they come. It covers every price range, from the best budget phones to just below the flagship level, and you get specs that more than justi…</p>
        </div>
        <div className="md:w-3/4 relative h-[300px] lg:h-[420px]">
          <Image src={samsung} alt="Article" fill className='object-cover' />
        </div>
      </div>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16 px-4'>
      <SmallCart photo={samsung} name={'Jean Mackenzie'} autor={'JHDAHDSAHDAKHDKAS'} date={'9 May 2022'} description={'jdjsakhdkahdhahdhsakhdkhsakhdas'}/>
      <SmallCart photo={samsung} name={'Jean Mackenzie'} autor={'JHDAHDSAHDAKHDKAS'} date={'9 May 2022'} description={'jdjsakhdkahdhahdhsakhdkhsakhdas'}/>
      <SmallCart photo={samsung} name={'Jean Mackenzie'} autor={'JHDAHDSAHDAKHDKAS'} date={'9 May 2022'} description={'jdjsakhdkahdhahdhsakhdkhsakhdas'}/>

      </div>
    </div>
    </div>
  );
};
