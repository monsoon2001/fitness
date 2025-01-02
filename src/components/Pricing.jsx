import React from "react";
import ToggleButton from "./ToggleButton";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div id="pricing" className="bg-[#37383c] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex-col space-y-6 text-center py-20">
          <h1 className="text-3xl font-bold">Choose The Best Plan</h1>
          <p>
            Choose a plan that's right for your growing team. Simple pricing &
            no hidden charges
          </p>
          <ToggleButton />

          <div className="flex items-center space-x-4 justify-between">
            <div className="flex-col bg-[#464646] px-20 py-6 rounded-xl space-y-6">
              <h1>DISCOVER</h1>
              <h1 className="tracking-widest">
                <span className="text-4xl font-semibold">$99</span> / Per Month
              </h1>
              <ul className="flex-col space-y-4">
                <li className="flex items-center">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
                <li
                  className="flex items-center
                 text-stone-400"
                >
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
                <li className="flex items-center text-stone-400">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
              </ul>
              <button className="border-2 border-white rounded-3xl px-8 py-2 font-semibold w-full transition duration-300 ease-in-out transform hover:bg-white hover:text-[#fd2331] focus:ring-4 focus:ring-white focus:ring-opacity-50 active:scale-95">
                Choose Plan
              </button>
            </div>

            <div className="flex-col bg-[#fd2331] px-16 py-6 rounded-xl space-y-6">
              <h1>DISCOVER</h1>
              <h1>
                <span className="text-4xl font-semibold">$299</span> / Per Month
              </h1>
              <ul className="flex-col space-y-4">
                <li className="flex items-center">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
              </ul>
              <button className="border-2 border-white rounded-3xl px-8 py-2 bg-white text-[#fd2331] font-semibold w-full transition duration-300 ease-in-out transform hover:bg-[#fd2331] hover:text-white focus:ring-4 focus:ring-[#fd2331] focus:ring-opacity-50 active:scale-95">
                Choose Plan
              </button>
            </div>

            <div className="flex-col bg-[#464646] px-20 py-6 rounded-xl space-y-6">
              <h1>DISCOVER</h1>
              <h1 className="tracking-wide">
                <span className="text-4xl font-semibold">$199</span> / Per Month
              </h1>
              <ul className="flex-col space-y-4">
                <li className="flex items-center">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
                <li className="flex items-center text-stone-400">
                  <FaCheck className="mr-6" /> 5 classes per month
                </li>
              </ul>
              <button className="border-2 border-white rounded-3xl px-8 py-2 font-semibold w-full transition duration-300 ease-in-out transform hover:bg-white hover:text-[#fd2331] focus:ring-4 focus:ring-white focus:ring-opacity-50 active:scale-95">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
