import Link from "next/link";
import React, { FC } from "react";
import { mainMenuData } from "utils/data/menus";

const MainMenu: FC = () => {
  return (
    <ul className="flex">
      {mainMenuData.map((menuItem) => {
        return (
          <li key={menuItem.id}>
            <Link href={menuItem.href}>{menuItem.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
