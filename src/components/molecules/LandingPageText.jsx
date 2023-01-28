import React from "react";
import Button from "../atoms/Button";
import Explore from "../atoms/Explore";

const LandingPageText = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="text-white">
        <h4 className="text-center text-7xl">BREW ANYWHERE. BE ANYWHERE.</h4>
        <p className="text-center text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut
          <p>
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo.
          </p>
        </p>
      </div>
      <div className="my-4">
        <Button />
      </div>
      <div className="absolute bottom-0">
        <Explore />
      </div>
    </div>
  );
};

export default LandingPageText;
