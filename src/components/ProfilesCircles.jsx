import React from "react";

const profiles = [
  { id: 1, imgSrc: "profile1.jpg" },
  { id: 2, imgSrc: "profile2.jpg" },
  { id: 3, imgSrc: "profile1.jpg" },
  { id: 4, imgSrc: "profile2.jpg" },
];

const ProfileCircles = () => {
  return (
    <div className="flex space-x-2 items-center">
      <div className="flex">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className={`-relative ${profile.id !== 0 ? "-ml-3" : ""}`}
          >
            <img
              className="h-12 w-12 rounded-full border-2 border-black
               "
              src={profile.imgSrc}
              alt={profile.id}
            />
          </div>
        ))}
        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center -ml-3 border-2 border-black">
          <span className="text-white text-2xl font-semibold flex items-center justify-center w-full h-full">
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCircles;
