import React from "react";

function Analytics() {
  return (
    <div className="w-full bg-white px-8 py-16">
      <div className="max-w-[800px]  flex flex-col items-center justify-center  lg:flex-row lg:justify-between m-auto ">
        <img src="logo192.png" alt="big picture" className="lg:w-72" />
        <div className=" text-black text-center lg:text-left max-w-[400px]">
          <p className=" ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-center lg:text-left">Manage Data Analytics Centerally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptates provident, inventore commodi illo distinctio odio
            incidunt, unde facere ullam veniam fuga nobis harum! Cum
            voluptatibus distinctio beatae quod itaque.
          </p>
          <button className="bg-[#87ebcb] w-[200px] text-black p-2 rounded-md font-bold hover:bg-slate-500 my-4 hover:text-white ease-in-out duration-500">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
