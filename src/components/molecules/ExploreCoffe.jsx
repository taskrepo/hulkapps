import React from "react";
import ExploreProducts from "../atoms/ExploreProducts";
import Test from "../../assets/images/1232C_7.png";
import Test1 from "../../assets/images/7018-BS-GR_7@2x.png";
import Test2 from "../../assets/images/Image 14.png";

const ExploreCoffe = () => {
  return (
    <div className="mt-24">
      <ExploreProducts />
      <div className="flex font-josefin font-bold text-2xl">
        <div className="p-5 relative ml-8">
          <img
            src={Test}
            alt="Image 1"
            className="w-full h-64 object-cover"
            style={{
              width: "450px",
              height: "515px",
            }}
          />
          <div className="absolute p-2 top-14 left-16 text-white">
            FRENCH PRESS
          </div>
        </div>
        <div className="p-5 relative">
          <img
            src={Test1}
            alt="Image 2"
            className="w-full object-cover"
            style={{
              width: "450px",
              height: "515px",
            }}
          />
          <div className="absolute p-2 top-14 left-16 text-white">
            POUR OVER
          </div>
        </div>
        <div className="p-5 relative">
          <img
            src={Test2}
            alt="Image 3"
            className="w-full h-64 object-cover"
            style={{ width: "450px", height: "515px" }}
          />
          <div className="absolute p-2 top-14 left-16 text-white">
            COLD BREW
          </div>
        </div>
      </div>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-black rounded-full shadow">
        Button
      </button>
    </div>
  );
};

export default ExploreCoffe;
