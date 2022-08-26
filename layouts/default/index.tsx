import React, { FC, ReactNode } from "react";
import Header from "./partials/Header/Header";
import TopBar from "./partials/Header/TopBar";
import NavBar from "./partials/NavBar";

interface DefaultLayoutType {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutType> = ({ children }) => {
  return (
    <div className="container m-auto">
      <TopBar />
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
