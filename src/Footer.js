import React from "react";
import {  TbUsers } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import {ImUserTie} from "react-icons/im"
function Footer() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between lg:justify-center items-center  px-6 py-8">
      <div className=" rounded w-full lg:max-w-[300px] md:max-w-[500px] p-4 bg-slate-400 my-7 mx-6 text-center flex flex-col items-center justify-center">
        <ImUserTie size={"50px"} className=" my-2" />
        <div className="font-bold text-black">
          <h4>Single User</h4>
          <h1>$149</h1>
          <p>500 GB Storage</p>
          <p>1 User Allowed</p>
          <p>Send up to 2GB</p>
        </div>
        <button className="bg-[black] sm:w-[190px] w-160px] text-white p-1 rounded-md font-bold hover:bg-[#87ebcb] hover:text-black ease-in-out duration-500 my-4 mx-4">Start Trial</button>
      </div>

      <div className="rounded w-full lg:max-w-[300px] md:max-w-[500px] text-black p-4 bg-slate-400 my-7 mx-6 text-center flex flex-col items-center justify-center">
        <TbUsers size={"50px"} className="my-2" />
        <div className="font-bold my-4 lg:my-0">
          <h4>Partnership</h4>
          <h1>$199</h1>
          <p>1 TB Storage</p>
          <p>2 users allowed</p>
          <p>Send up to 10 GB</p>
        </div>
        <button className="bg-[black] sm:w-[190px] w-160px] text-white p-1 rounded-md font-bold hover:bg-[#87ebcb] hover:text-black ease-in-out duration-500 my-4 mx-4">Start Trial</button>
      </div>

      <div className="rounded w-full lg:max-w-[300px] md:max-w-[500px] text-black p-4 bg-slate-400 my-7 mx-6 text-center flex flex-col items-center justify-center">
        <HiUserGroup size={"50px"} className=" my-2" />
        <div className="font-bold">
          <h4>Single User</h4>
          <h1>$299</h1>
          <p>5 TB Storage</p>
          <p>Multipe Users Allowed</p>
          <p>Send up to 20 GB</p>
        </div>
        <button className="bg-[black] sm:w-[190px] w-160px] text-white p-1 rounded-md font-bold hover:bg-[#87ebcb] hover:text-black ease-in-out duration-500 my-4 mx-4">Start Trial</button>
      </div>
    </div>
  );
}

export default Footer;
