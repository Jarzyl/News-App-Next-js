import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import Image from 'next/image';
import logo from '../../../public/logo.png'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(prev => !prev);
  };

  return (
    <nav className="sticky top-0 bg-white p-5 md:p-6 w-full flex justify-end md:justify-center items-center text-gray-400 h-16 z-50 max-w-7xl mx-auto">
        <Link href='/' className="flex-1">
      <Image src={logo} alt="logo" width={50} height={50}/>
  </Link>
        <div>
          <ul className='hidden text-lg xl:text-2xl md:flex justify-center items-center'>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/MainPage'>Home</Link>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/NewsStatic/NewsPage'>News</Link>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/WeatherPage'>Weather</Link>
            </li>
            <li className='ml-10 hover:scale-105 duration-200'>
            <Link href='/CryptoPage'>Crypto</Link>
            </li>
          </ul>
          

          {/* Hamburger Icon */}
          <div className='md:hidden mt-1.5 ml-auto hover:scale-105 duration-200' onClick={handleNav}><AiOutlineMenu size={25}/>
          </div>
          </div>

          <div className="ml-10">
      <form className="hidden md:flex items-center justify-center border border-gray-300 rounded-2xl p-1.5 focus:outline-none text-xl text-gray-400">
        <BsSearch className='mr-6 text-black'size={25}/>
        <input type="text" placeholder="Search Infomer..."
          className=""/>
      </form>
    </div>
         <div className="ml-10 hidden md:flex items-center justify-center">
          <button type="submit" className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0"
          >Login</button>
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
              <Link href='/NewsStatic/NewsPage'>News</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/WeatherPage'>Weather</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/CryptoPage'>Crypto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;