import samsung from '../public/samsung.jpg';
import SmallCart from '../components/HomePage/NewsCarts/SmallCart';

export default function Popular() {
  return (
    <div className='max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-8 mb-4 md:mb-24'>
    <div className='grid md:flex text-black px-3 text-center'>
            <h1 className="text-2xl lg:text-4xl font-bold">
            {' '}
            <span className="relative inline-block">
                <span className="absolute bottom-0.5 left-0 w-full h-2 bg-green-500"></span>
                <span className="relative z-10">Popular</span>
            </span>
            </h1>
            <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1100px] mx-auto mt-4 md:ml-3 border"/>
        </div>
    <div className="max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-8 mb-16">
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-4 md:mt-10 px-4'>
      <SmallCart photo={samsung} name={'Jean Mackenzie'} autor={'JHDAHDSAHDAKHDKAS'} date={'9 May 2022'} description={'jdjsakhdkahdhahdhsakhdkhsakhdas'}/>
      <SmallCart photo={samsung} name={'Jean Mackenzie'} autor={'JHDAHDSAHDAKHDKAS'} date={'9 May 2022'} description={'jdjsakhdkahdhahdhsakhdkhsakhdas'}/>
      <SmallCart photo={samsung} name={'Jean Mackenzie'} autor={'JHDAHDSAHDAKHDKAS'} date={'9 May 2022'} description={'jdjsakhdkahdhahdhsakhdkhsakhdas'}/>
      </div>
    </div>
    </div>
  );
};
