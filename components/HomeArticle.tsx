import Image from 'next/image';
import samsung from '../public/samsung.jpg';
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function HomeArticle() {
  return (
    <div className="max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-2 mt-8 mb-4 md:mb-24">
      <div className="grid md:flex gap-6 bg-white">
        <div className="md:w-1/2 relative h-[200px] lg:h-[320px]">
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
        <div className="md:w-1/2 text-black p-4">
          <h2 className="text-2xl font-bold mb-2">Samsung Galaxy A14 5G review: Galaxy S23 style meets rock-bottom price - Android Authority</h2>
          <p className="text-gray-400">Can Samsung right a few of the missteps from one of its most popular budget models? Find out in our Samsung Galaxy A14 5G review.</p>
          <p className="text-gray-400">Samsung`s budget-friendly Galaxy A series is as reliable as they come. It covers every price range, from the best budget phones to just below the flagship level, and you get specs that more than justi…</p>
        </div>
      </div>
    </div>
  );
};