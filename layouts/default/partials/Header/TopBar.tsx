import React from "react";
import config from "~/app.config.js";
import { BsTelephone } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
const TopBar = () => {
  return (
    <div className="w-full m-auto py-1 h-[35px] bg-primary flex items-center justify-center font-sans">
      <div className="container">
        <div className="flex text-white items-center">
          <BsTelephone className="mr-2" />
          <span className="mr-4">{config.supportPhoneNo}</span>
          <IoIosMail className="mr-2" />
          <span>{config.supportMail}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
