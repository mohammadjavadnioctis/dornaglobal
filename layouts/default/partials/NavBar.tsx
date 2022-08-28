import MainMenu from "components/Menus/MainMenu/MainMenu";
import Link from "next/link";
import React, { FC } from "react";

interface NavbarPropsType {
  ItemsClassNames?: string;
  ItemsContainerClassNames?: string;
}

const NavBar: FC<NavbarPropsType> = (props) => {
  const { ItemsClassNames, ItemsContainerClassNames } = props;
  return (
    <nav className="flex">
      <MainMenu
        ItemsClassNames={`px-4 ${ItemsClassNames}`}
        ItemsContainerClassNames={ItemsContainerClassNames}
      />
    </nav>
  );
};

export default NavBar;
