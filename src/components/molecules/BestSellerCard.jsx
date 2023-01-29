import React, { useState } from "react";
import BestSellerText from "../atoms/BestSellerText";
import Test from "../../assets/images/mug.webp";
import Star from "../../assets/images/star.jpg";
import BestSellerColorVariant from "../atoms/BestSellerColorVariant";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="relative overflow-hidden bg-white ml-12 ">
      <img className="w-96 " src={Test} alt={title} />
      <div className="p-4">
        <div className="flex">
          <img className="w-5" src={Star} alt={title} />
          <img className="w-5" src={Star} alt={title} />
          <img className="w-5" src={Star} alt={title} />
          <img className="w-5" src={Star} alt={title} />
          <img className="w-5" src={Star} alt={title} />
        </div>
        <h2 className="text-sn font-medium text-gray-800">{title}</h2>
        <br />
        <p className="text-base text-gray-600">{price}</p>
        <BestSellerColorVariant />
      </div>
    </div>
  );
};

const BestSellerCard = () => {
  const products = [
    {
      image: Test,
      title: "ESPRO COFFEE FRENCH PRESS P7",
      price: "$109.95 - $128.95",
    },
    {
      image: Test,
      title: "ESPRO COFFEE FRENCH PRESS P6",
      price: "$89.95 $99.95",
    },
    {
      image: Test,
      title: "BLOOM POUR OVER COFFEE BREWING KIT, 18 OZ",
      price: "$99.95",
    },
    {
      image: Test,
      title: "ESPRO ULTRALIGHT COFFEE PRESS P0",
      price: "$44.95",
    },
    {
      image: Test,
      title: "ESPRO COFFEE FRENCH PRESS P6",
      price: "$109.95 - $128.95",
    },
  ];

  return (
    <div>
      <BestSellerText />
      <br />
      <div className="flex">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellerCard;
