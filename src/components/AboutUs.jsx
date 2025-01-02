import React from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import TrainerDisplay from "./TrainerDisplay";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="bg-[#37383c] text-white py-9">
        <div className="max-w-5xl mx-auto">
          {/* upper part */}
          <div className="flex justify-between items-center">
            {/* left part */}
            <div className="flex-col">
              <h1 className="text-3xl font-bold">970K+ MORE</h1>
              <p className="text-xl text-stone-300 font-semibold">
                Trusted Companies Partner
              </p>
            </div>
            {/* right part */}
            <ul className="flex space-x-6 text-3xl font-semibold items-center">
              <li className="flex items-center">
                <MdOutlineEmojiEmotions className="text-5xl" />
                videoask
              </li>
              <li>HubSpot</li>
              <li>mapbox</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className=" bg-[#3a3b3f] py-20 text-white">
          <div className="max-w-5xl mx-auto">
            {/* lower part */}
            <div className="flex items-center">
              {/* left part */}
              <div className="relative">
                <img
                  className="h-84 w-[500px] rounded-3xl flex-none"
                  src="fitness.jpg"
                  alt="girl-fitness"
                />
                <div className="absolute top-[65%] right-[-10%]">
                  <TrainerDisplay />
                </div>
              </div>

              {/* right part */}
              <div className="flex-col max-w-[360px] space-y-6 ml-32">
                <h1 className="text-4xl leading-snug font-bold text-stone-200">
                  Get Ready To Reach Your Fitness Goals
                </h1>
                <p className="text-stone-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  officia id alias fuga eligendi, repudiandae quis, porro ipsa
                  ipsum sit doloremque, delectus facere earum beatae assumenda
                  officiis
                </p>
                <p className="text-slate-300">
                  consectetur adipisicing elit. Laboriosam, qui quisquam! Iste
                  consequuntur minima sint exped
                </p>
                <button className="bg-[#fd2331] px-6 py-3 rounded-lg font-semibold text-stone-200 hover:bg-red-700 focus:ring-4 focus:ring-[#fd2331] active:bg-[#c01d28] transition duration-300">
                  Free Trial Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
