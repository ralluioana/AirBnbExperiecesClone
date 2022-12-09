import React from "react";
import MyPhoto from "../images/Airbnb-Logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={MyPhoto} className="nav-logo" alt="aribnblogo" />
    </nav>
  );
};
