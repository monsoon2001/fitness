import React from "react";
import { FaCheck } from "react-icons/fa";
import Fire from "./Fire";
import Heart from "./Heart";

const Membership = () => {
  return (
    <div id="membership" className="bg-[#3a3b3f] text-white py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center">
          {/* left part */}
          <div className="flex-col space-y-8 w-1/2">
            <h1 className="text-3xl font-bold text-stone-200">
              Why Should People Choose Fitnesxia Services?
            </h1>
            <div className="flex-col space-y-2 text-stone-300">
              <div className="flex items-center space-x-4">
                <div className="text-white bg-[#ff662d] rounded-full text-lg p-1">
                  <FaCheck />
                </div>
                <h1 className="text-xl font-bold">Personal Training</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                accusantium?
              </p>
            </div>

            <div className="flex-col space-y-2 text-stone-300">
              <div className="flex items-center space-x-4">
                <div className="text-white bg-[#ff662d] rounded-full text-lg p-1">
                  <FaCheck />
                </div>
                <h1 className="text-xl font-bold">Expert Trainer</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                accusantium?
              </p>
            </div>

            <div className="flex-col space-y-2 text-stone-300">
              <div className="flex items-center space-x-4">
                <div className="text-white bg-[#ff662d] rounded-full text-lg p-1">
                  <FaCheck />
                </div>
                <h1 className="text-xl font-bold">Flexible Time</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                accusantium?
              </p>
            </div>
            <button className="bg-[#fd2331] px-6 py-3 rounded-lg font-semibold text-stone-200 hover:bg-red-700 focus:ring-4 focus:ring-[#fd2331] active:bg-[#c01d28] transition duration-300">
              Join Today
            </button>
          </div>

          {/* right part */}
          <div className="relative">
            <img
              className="scale-x-150 scale-y-150 relative z-10"
              src="girl.jpg"
              alt=""
            />
            <div className="absolute top-[90%] left-[5%] z-20">
              <Fire />
            </div>
            <div className="absolute top-[40%] right-[5%] z-20">
              <Heart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
