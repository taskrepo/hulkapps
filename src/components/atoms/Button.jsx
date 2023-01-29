import React from "react";
import { Button as StrapButton } from "reactstrap";

const Button = () => {
  return (
    <button
      type="button"
      className="text-black bg-white text-2xl
      rounded-full px-12 py-3.5 text-center mr-2 mb-2 
      dark:bg-green-600 dark:hover:bg-white "
    >
      <b className="font-josefin">POUR ON THE GO</b>
    </button>
  );
};

export default Button;
