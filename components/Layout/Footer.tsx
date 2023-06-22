import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';
import { BsInstagram, BsFacebook, BsTwitter, BsArrowUp } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer () {

    return (
      <>
      <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1150px] mx-auto mt-4 border"/>
      <footer className="bg-white text-center lg:text-left mt-2 max-w-7xl mx-auto">
    <div className="px-10 pt-3 text-left">
      <div className="grid md:grid-cols-5 gap-5 md:gap-32">
        <div className="md:w-40 lg:w-56">
          <p className="mb-3 text-xl xl:text-2xl flex justify-center font-semibold md:justify-start text-black">Informer</p>
          <p className=" text-slate-400 text-sm xl:text-md ml-0 md:ml-1 text-center md:text-left">
          Stay informed and inspired with our news hub. Discover the latest stories, trends, and insights in just a few clicks. Explore now!
          </p>
        </div>
        <div className="text-slate-400 text-center md:text-left">
          <p className="mb-3 text-xl xl:text-2xl flex justify-center font-semibold md:justify-start text-black">Company
          </p>
          <div className="text-sm xl:text-lg ml-0 md:ml-1">
          <p className="mb-2">
            <Link href="#!">About</Link>
          </p>
          <p className="mb-2">
            <Link href="#!">Our jurnalists</Link>
          </p>
          <p className="mb-2">
            <Link href="#!">Work</Link>
          </p>
          <p className="mb-2">
            <Link href="#!">Contact</Link>
          </p>
          </div>
        </div>
          <div className="text-slate-400 text-center md:text-left">
          <p className="mb-3 text-xl xl:text-2xl flex justify-center font-semibold md:justify-start text-black">News
          </p>
          <div className="text-sm xl:text-lg ml-0 md:ml-1">
          <p className="mb-2">
            <Link href="#!">Business</Link>
          </p>
          <p className="mb-2">
            <Link href="#!">Health</Link>
          </p>
          <p className="mb-2">
            <Link href="#!">Sports</Link>
          </p>
          <p className="mb-2">
            <Link href="#!">Tech</Link>
          </p>
          </div>
        </div>
        <div className="text-slate-400">
            <p className="mb-3 text-xl xl:text-2xl flex justify-center font-semibold md:justify-start text-black">Contact</p>
            <p className="mb-4 text-sm xl:text-lg text-center md:text-left flex items-center justify-center md:justify-start">
            1234 1st Ave<br/>Seattle, WA 98101
            </p>
            <p className="text-sm xl:text-lg flex items-center justify-center md:justify-start"> 111-222-333
            </p>
          </div>
        <div className="flex justify-center md:justify-start mt-3 md:mt-6">
            <div className="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer bg-black/30">
              <ScrollLink to="top" smooth={true} duration={500} className="block">
                <BsArrowUp size={25} className="text-white"/>
              </ScrollLink>
            </div>
          </div>
          </div>
        </div>
        <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1150px] mx-auto mt-4 border"/>
          <div className="pt-6 pb-4 text-sm grid md:flex justify-center md:justify-between font-bold"> 
          <p className="text-gray-600 ml-0 md:ml-10">Copyright © 2023 | Bartosz Jarzyło | All Rights Reserved</p>
          <p className="text-black mt-3 md:mt-0 mr-0 md:mr-10"> Privacy Policy | Terms & Conditions | Cookie Policy</p>
        </div>
    </footer>
    </>
  );
};