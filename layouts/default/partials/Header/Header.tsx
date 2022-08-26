import React from "react";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <div className="header w-full border-2 border-primary flex justify-between">
      <div>LOGO</div>
      <NavBar />
    </div>
  );
};

export default Header;
