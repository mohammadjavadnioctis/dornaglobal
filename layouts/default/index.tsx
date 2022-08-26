import React, { FC, ReactNode } from "react";
import NavBar from "./partials/NavBar";

interface DefaultLayoutType {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutType> = ({ children }) => {
  return (
    <div className="w-full container flex justify-between">
      <div>LOGO</div>
      <NavBar />
      {children}
    </div>
  );
};

export default DefaultLayout;
