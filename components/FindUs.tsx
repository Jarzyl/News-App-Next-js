import Image from 'next/image';
import samsung from '../public/samsung.jpg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import SmallCart from './SmallCart';
import { BsInstagram, BsFacebook, BsTwitter, BsArrowUp } from "react-icons/bs";


export default function FindUs() {
  return (
    <div className='max-w-[400px] md:max-w-2xl xl:max-w-7xl mx-auto mt-8 mb-4 md:mb-16'>
    <div className='grid md:flex text-black px-3 text-center'>
            <h1 className="text-2xl lg:text-4xl font-bold">
            {' '}
            <span className="relative inline-block">
                <span className="absolute bottom-0.5 left-0 w-full h-3 bg-green-500"></span>
                <span className="relative z-10">Find us here</span>
            </span>
            </h1>
            <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1000px] mx-auto mt-4 border ml-6"/>
        </div>
        <div className='grid md:flex px-3 justify-center md:justify-between max-w-[350px] md:max-w-2xl xl:max-w-7xl mx-auto text-center md:text-left'>
            <div className='text-lg text-black mt-6 md:mt-16 flex space-x-5 justify-center md:justify-start'>
            <a href="https://www.facebook.com/"><BsFacebook size={25}/></a>
            <a href="https://www.instagram.com/"><BsInstagram size={25}/></a>
            <a href="https://twitter.com/?lang=en"><BsTwitter size={25}/></a>
            </div>
            <div className='mt-6 md:mt-16 w-[300px]'>
                <p className='text-3xl font-bold mb-2'>News Daily</p>
                <p>Get news from the BBC in your inbox each weekday morning</p>
            </div>
            <div className='mt-6 md:mt-16 w-[300px]'>
                <p className='text-3xl font-bold mb-2'>News App</p>
                <p>Find out more about our BBC News App</p>
            </div>
            <div className='mt-6 md:mt-16 w-[300px] text-gray-500 font-semibold'>
                <p className='text-3xl font-bold mb-2 text-black'>Contact</p>
                <p>Email us: <span className='text-black'>sayhello@informer.com</span> </p>
                <p>Call us: <span className='text-black'>+00 111 222 333</span></p>
            </div>
        </div>
    </div>
  );
};
