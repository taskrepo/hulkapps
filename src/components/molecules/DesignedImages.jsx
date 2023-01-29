import React from "react";
import DesignedForText from "../atoms/DesignedForText";
import Test from "../../assets/images/Screen Shot 2021-07-30 at 3.12.17 PM.png";
import Test1 from "../../assets/images/girl.png";
import Test2 from "../../assets/images/Mask Group 23.png";
import Test3 from "../../assets/images/Screen Shot 2021-07-30 at 3.10.15 PM.png";
import Flasa from "../../assets/images/Mask Group 20.png";
import Kafa from "../../assets/images/Screen Shot 2021-07-30 at 3.12.44 PM.png";

const DesignedImages = () => {
  return (
    <div className="bg-[#f3f7f9]">
      <div className="relative top-24 right-20">
        <DesignedForText />
      </div>
      <div className="relative ml-20" style={{ marginTop: "-150px" }}>
        <img src={Test} alt="Test" />
        <div className="relative float-right mr-96 left-10 bottom-14">
          <img src={Test3} alt="Test" />
          <img
            src={Flasa}
            alt="test"
            className="absolute ml-96"
            style={{
              top: "-260px",
              left: "-180px",
            }}
          />
          <img
            src={Kafa}
            alt="test"
            className="absolute ml-96"
            style={{
              top: "-400px",
              left: "50px",
            }}
          />
        </div>
      </div>
      <div className="relative ml-20" style={{ marginTop: "80px" }}>
        <img src={Test1} alt="Test" />
        <img
          src={Test2}
          alt="test"
          className="absolute ml-80 w-72 h-72"
          style={{
            top: "-130px",
          }}
        />
      </div>
    </div>
  );
};

export default DesignedImages;
