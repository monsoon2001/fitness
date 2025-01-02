import React from "react";

const CalorieDisplay = () => {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-lg w-64 flex items-center">
      <div className="flex-col">
        <h2 className="text-xs font-semibold mb-2">Today's Calories</h2>
        <div className="text-xl font-bold text-black">150 Cal</div>
        <div className="text-green-500 text-xs mt-1 mr-3">+2.75% This Week</div>
      </div>
      <div className="flex items-end mt-4 space-x-2">
        <div className="bg-orange-500 h-16 w-4"></div>
        <div className="bg-orange-500 h-12 w-4"></div>
        <div className="bg-orange-500 h-8 w-4"></div>
        <div className="bg-orange-500 h-6 w-4"></div>
        <div className="bg-orange-500 h-10 w-4"></div>
      </div>
    </div>
  );
};

export default CalorieDisplay;
