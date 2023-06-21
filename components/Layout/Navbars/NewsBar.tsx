import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NewsBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full shadow-md shadow-gray-200 bg-white fixed top-0 left-0 right-0 z-10 h-10 xl:h-12">
      <div className="text-teal-500 justify-end md:justify-center flex px-4 mr-5 mx-auto lg:max-w-7xl xl:max-w-full md:items-center md:px-8 h-10">
        <div>
        <ul className='hidden text-lg xl:text-2xl md:flex xl:flex xl:mt-2 xl:mr-10'>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/MainPage'>Home</Link>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/NewsStatic/BusinessPage'>Business</Link>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/NewsStatic/HealthPage'>Health</Link>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/NewsStatic/SportPage'>Sport</Link>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/NewsStatic/TechPage'>Technology</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className='md:hidden mt-1.5 ml-auto hover:scale-105 duration-200' onClick={handleNav}><AiOutlineMenu size={25}/>
          </div>
          </div>
        </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

        <div className={
            nav ? 'fixed left-0 right-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-[70%] bg-white p-10 ease-in duration-500'
              : 'fixed left-0 right-0 top-[-100%] p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between text-cyan-400 '>
              <div onClick={handleNav} className='rounded-full bg-white shadow-lg p-2.5 cursor-pointer'><AiOutlineClose/>
              </div>
            </div>
          </div>
          <div className='py-3 flex flex-col text-center'>
            <ul className='uppercase text-teal-500 text-lg'>
            <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/MainPage'>Home</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/NewsStatic/BusinessPage'>Business</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/NewsStatic/HealthPage'>Health</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/NewsStatic/SportPage'>Sport</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/NewsStatic/TechPage'>Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBar;