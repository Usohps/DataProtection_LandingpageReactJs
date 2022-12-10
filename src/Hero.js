import React from "react";
function Hero() {
  return (
    <div>
      <div className="max-w-[800px] mx-auto w-full h-screen flex flex-col items-center justify-center">
        <p className="text-[#87ebcb] capitalize ">growing with data analytics</p>
        <h1 className="text-4xl md:text-6xl font-bold ">Grow with data</h1>
        <div>
            <p className="font-semibold my-4">Fast, Flexible Financing for "BTB","BTC","SASS"</p>  
        </div>
        <p className="text-gray-500 md:text-2xl text-center font-semibold">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
        <button className="bg-[#87ebcb] w-[200px] text-black p-2 rounded-md font-bold hover:bg-slate-500 my-4  ease-in-out duration-500 hover:text-white">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
