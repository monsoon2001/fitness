import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";

const TrainerDisplay = () => {
  return (
    <div className="flex items-center space-x-4 bg-white p-2 text-black rounded-xl">
      <GiWeightLiftingUp className="text-red-500 text-6xl" />
      <div className="flex-col font-semibold">
        <h1>Professional</h1>
        <h1>Trainer</h1>
      </div>
    </div>
  );
};

export default TrainerDisplay;
