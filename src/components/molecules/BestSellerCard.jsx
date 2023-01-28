import React, { useState } from "react";
import BestSeller from "../atoms/BestSeller";
import Test from "../../assets/images/test.png";
import Star from "../../assets/images/star.jpg";

const BestSellerCard = () => {
  const [selectedColor, setSelectedColor] = useState("green-200");
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <BestSeller />
      <div className="relative overflow-hidden bg-white ml-24">
        <img className="w-96" src={Test} alt="Test" />
        <div className="p-4">
          <div className="flex h-5">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </div>
          <h2 className="text-xl font-medium text-gray-800">
            ESPRO COFFEE FRENCH PRESS P7
          </h2>
          <br />
          <p className="text-base text-gray-600">$109.95 - $128.95</p>
          <div className="flex ">
            <div
              className={`rounded-full h-5 w-5 mr-2 ${
                selectedColor === "green-200"
                  ? "bg-green-200 active"
                  : "bg-green-200"
              }`}
              onClick={() => handleColorSelection("green-200")}
            ></div>
            <div
              className={`rounded-full h-5 w-5 mr-2 ${
                selectedColor === "blue-200"
                  ? "bg-blue-200 active"
                  : "bg-blue-200"
              }`}
              onClick={() => handleColorSelection("blue-200")}
            ></div>
            <div
              className={`rounded-full h-5 w-5 mr-2 ${
                selectedColor === "pink-200"
                  ? "bg-pink-200 active"
                  : "bg-pink-200"
              }`}
              onClick={() => handleColorSelection("pink-200")}
            ></div>
            <div
              className={`rounded-full h-5 w-5 mr-2 ${
                selectedColor === "yellow-200"
                  ? "bg-yellow-200 active"
                  : "bg-yellow-200"
              }`}
              onClick={() => handleColorSelection("yellow-200")}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
