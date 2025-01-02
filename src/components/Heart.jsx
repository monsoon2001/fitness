import React from "react";
import { AiFillFire } from "react-icons/ai";

const Heart = () => {
  return (
    <div className="flex items-center bg-white rounded-xl text-black p-2 space-x-4">
      <AiFillFire className="text-5xl text-red-500" />
      <div className="flex-col">
        <p className="font-bold text-xl">24%</p>
        <p className="text-xl">Flat Burning</p>
      </div>
    </div>
  );
};

export default Heart;
