import React, { useState } from "react";

const ToggleButton = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  function handleToggle() {
    setIsAnnual(!isAnnual);
  }
  return (
    <div className="inline-block border border-red-500 rounded-3xl">
      <button
        className={`px-6 py-2 ${isAnnual ? "" : "bg-red-500 rounded-3xl"}`}
        onClick={handleToggle}
      >
        Monthly
      </button>
      <button
        className={`px-6 py-2 ${isAnnual ? "bg-red-500 rounded-3xl" : ""}`}
        onClick={handleToggle}
      >
        Annual
      </button>
    </div>
  );
};

export default ToggleButton;
