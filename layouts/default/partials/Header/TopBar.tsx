import React from "react";
import config from "../../../../app.config";
const TopBar = () => {
  console.log("this is config", config);
  return <div className="w-full py-1 h-[35px] bg-primary"></div>;
};

export default TopBar;
