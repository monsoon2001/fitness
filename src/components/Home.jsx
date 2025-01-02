import React from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import CalorieDisplay from "./CalorieDisplay";

const Home = () => {
  return (
    <section
      id="home"
      className="container bg-gradient-to-b from-[rgb(30,30,40)] to-[rgb(45,44,50)] text-white relative h-auto pt-12"
    >
      <div className="flex justify-between max-w-5xl mx-auto items-center">
        {/* left side */}
        <div className="flex-col space-y-8 w-1/2 mt-16">
          <h1 className="text-4xl font-bold leading-snug">
            GET HEALTHY BODY WITH THE PERFECT EXERCISES
          </h1>
          <p className="text-lg text-stone-300">
            We are always there to help you to make a healthy body and mind
            through the power of fitness.
          </p>

          <div className="flex space-x-6 items-center">
            <button className="bg-[#fd2331] px-6 py-3 rounded-lg font-semibold text-stone-200 hover:bg-[#e0222e] focus:ring-4 focus:ring-[#fd2331] active:bg-[#c01d28] transition duration-300">
              Get Started
            </button>

            <div className="flex items-center">
              <IoPlayCircleSharp className="text-6xl" />
              <p className="font-semibold mx-2">Watch Video</p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-col">
              <h1 className="text-3xl font-bold">105+</h1>
              <p>Expert Trainers</p>
            </div>
            <div className="h-12 mt-2 mx-4 border-r-2 border-gray-500"></div>

            <div className="flex-col">
              <h1 className="text-3xl font-bold">970+</h1>
              <p>Members Joined</p>
            </div>
            <div className="h-12 mt-2 mx-4 border-r-2 border-gray-500"></div>

            <div className="flex-col">
              <h1 className="text-3xl font-bold">135+</h1>
              <p>Fitness Programs</p>
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="relative">
          <img className="scale-100 pt-24" src="gym5.png" alt="Gym" />
          <div className="absolute top-[75%] left-[20%]">
            <CalorieDisplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
