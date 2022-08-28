import React, { FC, ReactNode } from "react";
import Footer from "./partials/Footer/Footer";
import Header from "./partials/Header/Header";
import TopBar from "./partials/Header/TopBar";
import NavBar from "./partials/NavBar";

interface DefaultLayoutType {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutType> = ({ children }) => {
  return (
    <>
      <TopBar />
      <div className="container min-h-[100vh] m-auto overflow-x-hidden">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
