import Link from "next/link";
import React, { FC } from "react";
import { mainMenuData } from "utils/data/menus";

interface MainMenuType {
  ItemsContainerClassNames?: string;
  ItemsClassNames?: string;
}

const MainMenu: FC<MainMenuType> = (props) => {
  const { ItemsContainerClassNames = "flex ", ItemsClassNames } = props;
  return (
    <ul className={`${ItemsContainerClassNames}`}>
      {mainMenuData.map((menuItem) => {
        return (
          <li
            key={menuItem.id}
            className={`${ItemsClassNames} w-full h-full flex items-center`}
          >
            <Link href={menuItem.href} passHref>
              <a className="h-full flex items-center">{menuItem.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
