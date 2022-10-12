import Link from "next/link";
import React, { FC, useEffect } from "react";
import { mainMenuData } from "utils/data/menus";
import { useAuth } from "~/contexts/AuthContext";

interface MainMenuType {
  ItemsContainerClassNames?: string;
  ItemsClassNames?: string;
}

const MainMenu: FC<MainMenuType> = (props) => {
  const { ItemsContainerClassNames = "flex ", ItemsClassNames } = props;
  const { user, loading  } = useAuth();
  // useEffect(()=>{
  //   console.log('this is the user: ', user)
  // },[])
  return (
    <ul className={`${ItemsContainerClassNames}`}>
      {mainMenuData.map((menuItem) => {
        // if (user && menuItem.href === "/profile") return;
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
      {!user && !loading && (
        <li
          key={"signIn"}
          className={`${ItemsClassNames} w-full h-full flex items-center`}
        >
          <Link href={"/signin"} passHref>
            <a className="h-full flex items-center">Login</a>
          </Link>
        </li>
      )}
      {/* {user && (
        <li
          key={"signIn"}
          className={`${ItemsClassNames} w-full h-full flex items-center`}
        >
          <Link href={"/signin"} passHref>
            <a className="h-full flex items-center">Logout</a>
          </Link>
        </li>
      )} */}
    </ul>
  );
};

export default MainMenu;
