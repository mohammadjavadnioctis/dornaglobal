import MainMenu from "components/Menus/MainMenu/MainMenu";
import React, { FC } from "react";

const NavBar: FC = () => {
  return (
    <nav className="flex">
      <MainMenu ItemsClassNames="px-4" />
      <div className="profile-item inline-block pl-4">profile</div>
    </nav>
  );
};

export default NavBar;
