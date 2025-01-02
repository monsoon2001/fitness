import React from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#3a3b3f] text-white py-10">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto grid grid-cols-5">
          <div>
            <h3 className="font-bold mb-4 text-stone-200 text-xl">Company</h3>
            <ul className="flex-col space-y-4 text-stone-300">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partnership
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-stone-200 text-xl">
              Categories
            </h3>
            <ul className="flex-col space-y-4 text-stone-300">
              <li>
                <a href="#" className="hover:underline">
                  Basic Yoga
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Strength Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Body Building
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Weight Loss
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-stone-200 text-xl">Help</h3>
            <ul className="flex-col space-y-4 text-stone-300">
              <li>
                <a href="#" className="hover:underline">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-stone-200 text-xl">
              Contact Us
            </h3>
            <ul className="flex-col space-y-4 text-stone-300">
              <li className="flex items-center">
                <span role="img" aria-label="phone">
                  📞
                </span>
                +1 (406) 555-0120
              </li>
              <li className="flex items-center">
                <BsEnvelopeFill className="text-red-500 text-xl mr-2" />
                <p>example@email.com</p>
              </li>
              <li className="flex items-center">
                <span role="img" aria-label="location">
                  <MdLocationOn className="text-2xl mr-1 text-red-500" />
                </span>
                2464 Royal Ln. Mesa, New Jersey 45463
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Subscribe Our Newsletter</h3>
            <form className="flex">
              <div className="flex items-center justify-between bg-white px-2 py-1 rounded-3xl w-auto">
                <input
                  className="placeholder:text-stone-400 focus:outline-none text-black"
                  type="email"
                  placeholder="Enter your email"
                />

                <button
                  type="submit"
                  className="p-2 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
                >
                  <span role="img" aria-label="send">
                    <IoIosSend className="text-xl text-white" />
                  </span>
                </button>
              </div>
            </form>
            <p className="mt-2 text-sm">
              Never miss an update & news to your email.
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-500 pt-6">
          <div className="flex items-center">
            <FaDumbbell className="text-red-500 mr-4 text-4xl" />
            <span className="text-xl font-bold">FITNESXIA</span>
          </div>
          <div>
            <p className="text-stone-400">
              ©2023 DesignAxen. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="" className="hover:underline">
              <CiFacebook className="text-4xl" />
            </a>
            <a href="#" className="hover:underline">
              <CiInstagram className="text-4xl" />
            </a>
            <a href="#" className="hover:underline">
              <CiTwitter className="text-4xl" />
            </a>
            <a href="#" className="hover:underline">
              <CiLinkedin className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
