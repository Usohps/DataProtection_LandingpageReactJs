import React from "react";
function Newsplace() {
  return (
    <div className="w-full bg-black px-8 py-20 text-white">
      <div className="w-full flex flex-col items-center justify-between  lg:flex-row lg:items-center  ">
        <div className=" text-center lg:text-left">
          <h1 className="text-center lg:text-left">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className=" ">sign up to our newsletter and stay up to date.</p>
        </div>
          <div className="lg:flex justify-end items-center w-full text-center my-4 lg:w-[50%] ">
            <div>
              <input type="text" placeholder="please enter @username" className="p-2 px-4 rounded-sm border-none outline-none text-black font-bold w-[300px]" />
            </div>
            <div>
              <button className="bg-[#87ebcb] sm:w-[190px] w-170px] text-black p-1 rounded-md font-bold hover:bg-slate-500 hover:text-white my-4 mx-4 ease-in-out duration-500">
                Notify Me
              </button>
            </div>
          </div>
      </div>
      <p className=" text-center flex flex-col items-center lg:items-end">We care bout protection of your data. Read More<span className="text-[#87ebcb] cursor-pointer "> Privacy Policy</span></p>
      
    </div>
  );
}

export default Newsplace;
