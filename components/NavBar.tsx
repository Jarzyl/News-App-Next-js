import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full shadow-md shadow-gray-200 bg-white dark:shadow-teal-500 dark:bg-white fixed top-0 left-0 right-0 z-10 h-10 xl:h-12">
      <div className="text-cyan-400 dark:text-teal-500 justify-center flex px-4 mr-5 mx-auto lg:max-w-7xl xl:max-w-full md:items-center md:px-8 h-10">
        <div>
          <ul className='hidden text-lg xl:text-2xl md:flex xl:flex xl:mt-2 xl:mr-10'>
            <li className='ml-10 hover:scale-105 duration-200'>
            <a href='/MainPage'>Home</a>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <a href='/NewsPage'>News</a>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/WeatherPage'>Weather</Link>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/CryptoPage'>Crypto</Link>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/CryptoPage'>Currency</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className='md:hidden mt-1.5 ml-auto hover:scale-105 duration-200' onClick={handleNav}><AiOutlineMenu size={25}/>
          </div>
          </div>
        </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>

        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 dark:bg-white p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between text-teal-400 dark:text-teal-500'>
              <div onClick={handleNav} className='rounded-full bg-gray-300 dark:bg-slate-200 shadow-md shadow-teal-400 dark:shadow-teal-500 p-2.5 cursor-pointer'><AiOutlineClose/>
              </div>
            </div>
          </div>
          <div className='py-3 flex flex-col text-center'>
            <ul className='uppercase text-teal-400 dark:text-teal-500'>
              <li onClick={() => setNav(false)} className='py-4'>
              <a href='#home'>Home</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <a href='#about'>About</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <a href='#skills'>Skills</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <a href='#portfolio'>Portfolio</a>
              </li>
            </ul>
            <div className='pt-14'>
              <p className='uppercase tracking-widest text-teal-400 dark:text-teal-500'>
                Stay in Touch</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%] text-teal-400 dark:text-teal-500'>
                <a href='https://www.linkedin.com/in/bartosz-jarzy%C5%82o-460460260/'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full bg-gray-300 dark:bg-slate-200 shadow-md shadow-teal-400 dark:shadow-teal-500 p-2.5 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn/>
                  </div>
                </a>
                <a href='https://github.com/Jarzyl'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full bg-gray-300 dark:bg-slate-200 shadow-md shadow-teal-400 dark:shadow-teal-500 p-2.5 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub/>
                  </div>
                </a>
                <Link href='mailto:bjarzylo.work@gmail.com'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full bg-gray-300 dark:bg-slate-200 shadow-md shadow-teal-400 dark:shadow-teal-500 p-2.5 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;