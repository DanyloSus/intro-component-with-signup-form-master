import React from "react";

const BG = () => {
  return (
    <div className=" w-screen h-screen top-0 left-0 bg-red fixed -z-10">
      <img
        src="./bg-intro-desktop.png"
        alt="bg intro desktop"
        className="w-screen h-screen object-cover lg:hidden"
      />
      <img
        src="./bg-intro-mobile.png"
        alt="bg intro mobile"
        className="w-screen h-screen object-cover hidden lg:block"
      />
    </div>
  );
};

export default BG;
