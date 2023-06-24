import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import logo from "../../public/logo.png";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const path = router.pathname;

  const handleNav = () => {setNav((prev) => !prev)};

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/newspage", label: "News" },
    { href: "/weatherpage", label: "Weather" },
    { href: "/cryptopage", label: "Crypto" },
  ];

  return (
    <nav className="sticky top-0 bg-white p-5 md:p-6 w-full flex md:justify-center items-center text-gray-400 h-16 z-50 max-w-2xl md:max-w-2xl lg:max-w-7xl mx-auto">
      <Link href="/" className="flex-1">
        <Image src={logo} alt="logo" width={50} height={50}/>
      </Link>
        <ul className="hidden text-lg xl:text-2xl md:flex justify-center items-center">
          {menuItems.map((item) => (
            <li key={item.href} className={`ml-10 ${path === item.href ? "text-black" : ""}`}>
              <Link href={item.href}>
                <div className="flex justify-center items-center mr-3">{item.label}</div>
              </Link>
            </li>
          ))}
        </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden mt-1.5 ml-10" onClick={handleNav}>
        <AiOutlineMenu size={25} />
      </div>

      <div className="hidden lg:flex ml-0 md:ml-20">
        <form className="hidden md:flex items-center justify-center border border-gray-300 rounded-2xl p-2 focus:outline-none text-xl text-gray-400 mr-6">
          <BsSearch className="mr-6 text-black" size={25}/>
          <input
            type="text"
            placeholder="Search News..."
            className="w-40 outline-none focus:outline-none"
          />
        </form>
      </div>
      <div className="ml-10 hidden md:flex items-center justify-center">
        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0"
        >
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={
            nav
              ? "fixed left-0 right-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-[70%] bg-white p-10 ease-in duration-500"
              : "fixed left-0 right-0 top-[-100%] p-10 ease-in duration-500"}>
          <div>
            <div className="flex w-full items-center justify-between text-sky-600 ">
              <div onClick={handleNav}
                className="rounded-full bg-white shadow-lg p-2.5 cursor-pointer">
                <AiOutlineClose/>
              </div>
              <div className="ml-10 flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="py-3 flex flex-col text-center">
            <ul className="uppercase text-gray-400 text-lg">
              {menuItems.map((item) => (
                <li key={item.href} onClick={() => setNav(false)} className="py-4">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}