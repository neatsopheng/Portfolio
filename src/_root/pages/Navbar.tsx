import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setToggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="sticky top-10 w-full backdrop-blur-md text-white bg-black py-3 px-5 md:p-5 border-b border-gray-500 z-10 md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between z-50">
          <span className="font-fraunces font-semibold text-xl lg:text-3xl border px-2 py-1 rounded-xl whitespace-nowrap">
            <a href="./index.html"><span className="text-orange-500">N.</span>Sopheng</a>
          </span>
          <span className="text-2xl cursor-pointer md:hidden">
            {
              isOpen ? <RxCross2 onClick={()=>setIsOpen(false)} /> : <CiMenuFries onClick={setToggle}/>
            }
            
            
          </span>
        </div>

      <ul
          className={`absolute bg-[#121212] py-2 mt-2 md:bg-transparent z-[-1]  text-white w-full left-0 opacity-0  md:flex md:items-center md:z-auto md:static md:w-auto md:py-0 md:pl-0 md:opacity-100 transition-all ease-in duration-200 ${isOpen ? "top-[55px] opacity-100" : ""}`}>
            <li className="cursor-pointer hover:bg-slate-800 py-3 pl-3 md:px-5 md:hover:bg-transparent">
                <a href="#home" className="text-lg lg:text-xl font-ubuntu hover:underline decoration-white underline-offset-8"> Home </a>
            </li>
            <li className="cursor-pointer hover:bg-slate-800 py-3 pl-3 md:px-5 md:hover:bg-transparent">
                <a href="#about" className="text-lg lg:text-xl font-ubuntu hover:underline decoration-white underline-offset-8 whitespace-nowrap"> About me </a>
            </li>
            <li className="cursor-pointer hover:bg-slate-800 py-3 pl-3 md:px-5 md:hover:bg-transparent">
                <a href="#service" className="text-lg lg:text-xl font-ubuntu hover:underline decoration-white underline-offset-8"> Services </a>
            </li>
            <li className="cursor-pointer hover:bg-slate-800 py-3 pl-3 md:px-5 md:hover:bg-transparent">
                <a href="#projects" className="text-lg lg:text-xl font-ubuntu hover:underline decoration-white underline-offset-8"> Projects </a>
            </li>
            <li className="cursor-pointer hover:bg-slate-800 py-3 pl-3 md:px-5 md:hover:bg-transparent">
                <a href="#footer" className="text-lg lg:text-xl font-ubuntu hover:underline decoration-white underline-offset-8"> Contact </a>
            </li>
        </ul>

        <div className="flex items-center gap-3">
            <div className="hidden md:inline text-2xl">
                        <a href="https://github.com/neatsopheng" target="_blank" className="w-24"><i className="fa-brands fa-github"></i></a>
            </div>
            <button className="border border-orange-500 text-white  font-fraunces duration-500 px-6 py-2 hidden md:inline hover:bg-orange-500 hover:border-transparenti hover:text-white rounded">
                <a href="https://t.me/nsopheng" target="_blank">Hire Me</a>
            </button>
        </div>
    </nav>
  );
};

export default Navbar;
