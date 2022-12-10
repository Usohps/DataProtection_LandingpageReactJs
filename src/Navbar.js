import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleToggle = () => {
    setNav(!nav);
  };
  return (
    <div className="flex items-center max-w-[1240px] mx-auto h-16 px-4 justify-between">
        <img src="logo192.png" className="w-12 py-8" alt="React.logo" />
      <ul className="hidden lg:flex items-center">
        <li className="p-4 ">
          <a href="#" className="hover:text-[#87ebcb]  ease-in-out duration-500">Home</a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-[#87ebcb]  ease-in-out duration-500">Company</a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-[#87ebcb]  ease-in-out duration-500">Resource</a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-[#87ebcb]  ease-in-out duration-500">About</a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-[#87ebcb]  ease-in-out duration-500">Contact</a>
        </li>
      </ul>
      <div onClick={handleToggle} className="cursor-pointer">
        {nav ? (
          <AiOutlineClose className="lg:hidden ease-in-out duration-500 " />
        ) : (
          <RxHamburgerMenu className="lg:hidden " />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 px-2 bg-inherit w-[60%] h-full   bg-[#000300] lg:hidden ease-in duration-700"
            : "fixed left-[-100%]"
        }
      >
        <img src="logo192.png" className="w-12 py-4" alt="React.logo" />
        <ul className="py-8">
          <li className="my-8 border-b-2 shadow-lg hover:shadow-none hover:text-[#87ebcb]  ease-in-out duration-500 hover:pl-[40px] hover:bg-slate-400">
            <a href="#">Home</a>
          </li>
          <li className="my-8 border-b-2 shadow-md hover:shadow-none  hover:text-[#87ebcb]  ease-in-out duration-500 hover:pl-[40px] hover:bg-slate-400">
            <a href="#">Company</a>
          </li>
          <li className="my-8 border-b-2 shadow-md hover:shadow-none  hover:text-[#87ebcb]  ease-in-out duration-500 hover:pl-[40px] hover:bg-slate-400">
            <a href="#">Resource</a>
          </li>
          <li className="my-8 border-b-2 shadow-md hover:shadow-none  hover:text-[#87ebcb]  ease-in-out duration-500 hover:pl-[40px] hover:bg-slate-400">
            <a href="#">About</a>
          </li>
          <li className="py-0  hover:text-[#87ebcb]  ease-in-out duration-500 hover:pl-[40px] hover:bg-slate-400">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Navbar;
