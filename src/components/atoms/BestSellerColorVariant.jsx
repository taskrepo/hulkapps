import React, { useState } from "react";

const BestSellerColorVariant = () => {
  const [selectedColor, setSelectedColor] = useState("green-200");
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };
  return (
    <div>
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
            selectedColor === "blue-200" ? "bg-blue-200 active" : "bg-blue-200"
          }`}
          onClick={() => handleColorSelection("blue-200")}
        ></div>
        <div
          className={`rounded-full h-5 w-5 mr-2 ${
            selectedColor === "pink-200" ? "bg-pink-200 active" : "bg-pink-200"
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
  );
};

export default BestSellerColorVariant;
