import React from "react";
import { Navbar } from "reactstrap";

import NavbarHeaderShippingText from "../atoms/NavbarHeaderShippingText";
import AccountIcon from "../../assets/images/AccountIcon.jpg";
import BasketIcon from "../../assets/images/BasketIcon.jpg";
import SearchIcon from "../../assets/images/SearchIcon.jpg";
import Espro from "../../assets/images/Espro.jpg";

const NavbarItems = () => {
  return (
    <div>
      <NavbarHeaderShippingText />
      <Navbar className="bg-white flex h-16 font-josefin font-bold">
        <div className="text-black mx-16 cursor-pointer">
          <a>SHOP</a>
          <a className="ml-16">OUR STORY</a>
        </div>
        <img className="ml-48" src={Espro} alt="profile image" />
        <div className="text-black flex mx-5 cursor-pointer">
          <a className="mr-16">BREW GUIDES</a>
          <a className="mr-20">BLOG</a>
          <img
            className="w-6 h-6 mr-6 cursor-pointer"
            src={SearchIcon}
            alt="User icon"
          />
          <img
            className="w-6 h-6 mr-6 cursor-pointer"
            src={AccountIcon}
            alt="Home icon"
          />
          <img
            className="w-6 h-6 mr-6 cursor-pointer"
            src={BasketIcon}
            alt="Shopping cart icon"
          />
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarItems;
