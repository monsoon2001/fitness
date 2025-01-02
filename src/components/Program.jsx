import React from "react";

import { LiaDumbbellSolid } from "react-icons/lia";
import { GrYoga } from "react-icons/gr";
import { RiRunFill } from "react-icons/ri";

const Program = () => {
  return (
    <div id="program" className="bg-[#37383c] text-white py-20">
      <div className="max-w-5xl mx-auto">
        {/* upper part */}
        <div className="flex items-center justify-between space-x-16">
          {/* left part */}
          <h1 className="text-4xl font-bold flex-1 leading-snug">
            The Best Programs We Offer For You
          </h1>
          {/* right part */}
          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam
            ullam repellendus modi possimus Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>

        {/* lower part */}
        <div className="flex items-center space-x-6 py-10">
          <div className="flex-col items-start bg-[#464646] hover:bg-[#ff662d] hover:scale-110 duration-300 rounded-2xl p-4 space-y-4">
            <p className="text-6xl">
              <LiaDumbbellSolid />
            </p>
            <h1 className="text-2xl font-semibold">Strength Training</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ullam et optio cupiditate dolorem volu
            </p>
            <p>
              Learn More <span>&rarr;</span>
            </p>
          </div>

          <div className="flex-col items-start bg-[#464646] hover:bg-[#ff662d] hover:scale-110 duration-300 rounded-2xl p-4 space-y-4">
            <p className="text-6xl">
              <GrYoga />
            </p>
            <h1 className="text-2xl font-semibold">Basic Yoga</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ullam et optio cupiditate dolorem volu
            </p>
            <p>
              Learn More <span>&rarr;</span>
            </p>
          </div>

          <div className="flex-col items-start bg-[#464646] hover:bg-[#ff662d] hover:scale-110 duration-300 rounded-2xl p-4 space-y-4">
            <p className="text-6xl">💪</p>
            <h1 className="text-2xl font-semibold">Body Building</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ullam et optio cupiditate dolorem volu
            </p>
            <p>
              Learn More <span>&rarr;</span>
            </p>
          </div>

          <div className="flex-col items-start bg-[#464646] hover:bg-[#ff662d] hover:scale-110 duration-300 rounded-2xl p-4 space-y-4">
            <p className="text-6xl">
              <RiRunFill />
            </p>
            <h1 className="text-2xl font-semibold">Weight Loss</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ullam et optio cupiditate dolorem volu
            </p>
            <p>
              Learn More <span>&rarr;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
