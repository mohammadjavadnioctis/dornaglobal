import React, { FC, ReactNode } from "react";

interface DefaultLayoutType {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutType> = ({ children }) => {
  return (
    <div>
      default layout
      {children}
    </div>
  );
};

export default DefaultLayout;
