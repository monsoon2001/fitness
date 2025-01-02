import React from "react";
import { Link } from "react-scroll";
import { FaDumbbell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="text-white fixed bg-gradient-to-b from-[#1e1e28] to-[#1d1d27] w-full opacity-90 z-30">
      <div className="flex justify-between max-w-5xl mx-auto py-4 items-center">
        {/* left side*/}
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="flex items-center">
            <FaDumbbell className="text-red-500 mr-4 text-4xl" />
            <span className="text-xl font-bold">FITNESXIA</span>
          </div>
        </Link>

        {/* right side */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="text-red-500"
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="text-red-500"
              className="cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="program"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="text-red-500"
              className="cursor-pointer"
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              to="membership"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="text-red-500"
              className="cursor-pointer"
            >
              Membership
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="text-red-500"
              className="cursor-pointer"
            >
              Testimonials
            </Link>
          </li>
          <button className="bg-[#fd2331] px-6 py-3 rounded-lg font-semibold text-stone-200 hover:bg-[#e0222e] focus:ring-4 focus:ring-[#fd2331] active:bg-[#c01d28] transition duration-300">
            Sign Up
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
