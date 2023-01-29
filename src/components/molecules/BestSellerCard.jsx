import React, { useState } from "react";
import BestSellerText from "../atoms/BestSellerText";
import Test from "../../assets/images/test.png";
import Star from "../../assets/images/star.jpg";
import BestSellerColorVariant from "../atoms/BestSellerColorVariant";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="relative overflow-hidden bg-white ml-12">
      <img className="w-96" src={Test} alt={title} />
      <div className="p-4">
        <div className="flex">
          <img className="w-5" src={Star} alt={title} />
          <img className="w-5" src={Star} alt={title} />
          <img className="w-5" src={Star} alt={title} />
          <img className="w-5" src={Star} alt={title} />
          <img className="w-5" src={Star} alt={title} />
        </div>
        <h2 className="text-xl font-medium text-gray-800">{title}</h2>
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
      title: "Product 1",
      price: "$109.95 - $128.95",
    },
    {
      image: Test,
      title: "Product 2",
      price: "$109.95 - $128.95",
    },
    {
      image: Test,
      title: "Product 3",
      price: "$109.95 - $128.95",
    },
    {
      image: Test,
      title: "Product 4",
      price: "$109.95 - $128.95",
    },
    {
      image: Test,
      title: "Product ",
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
