import React from "react";
import ProfileCircles from "./ProfilesCircles";
import { MdStarRate } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-[#37383c] text-white py-20">
      <div className="max-w-5xl mx-auto ">
        <div className="flex justify-between space-x-40 items-center">
          {/* left part */}
          <div className="flex-col space-y-6 w-1/2">
            <h1 className="text-4xl font-bold leading-snug text-stone-200 tracking-wider">
              What Our Happy Clients Say About Us
            </h1>
            <p className="text-stone-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              enim cumque distinctio totam illo possimus officiis unde delectus
              ipsa, aperiam aliquid sunt laborum aspernatur
            </p>

            <div className="flex items-center space-x-4">
              <ProfileCircles />
              <p className="text-xl">⭐</p>
              <p className="text-stone-300">4.9(450 Reviews)</p>
            </div>
          </div>

          {/* right part */}
          <div className="flex-col  flex-1 bg-[#464646] p-6 rounded-2xl">
            <div className="flex space-x-4 items-center">
              <img
                className="h-16 w-16 rounded-full"
                src="profile2.jpg"
                alt=""
              />
              <div className="flex-col">
                <h1 className="text-xl font-semibold">Farhan Rio</h1>
                <p>Happy Customer</p>
              </div>
            </div>
            <p className="text-lg mt-2">⭐⭐⭐⭐⭐</p>
            <div className="flex justify-between items-center text-3xl text-stone-300">
              <FaCircleArrowLeft className="-ml-10" />
              <FaCircleArrowRight className="-mr-10" />
            </div>
            <p className="text-stone-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quia deserunt consectetur ipsa neque voluptate corporis aliquam,
              harum voluptates labore.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-3xl font-semibold text-stone-500 mt-4">
          <MdStarRate />
          <p>Trustpilot</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
