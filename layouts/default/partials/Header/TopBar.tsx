import React from "react";
import config from "~/app.config.js";
import { BsTelephone } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import LangSelect from "~/components/LangSelect/LangSelect";
const TopBar = () => {
  return (
    <div className="w-full m-auto py-1 min-h-[35px] bg-accent flex items-center justify-center font-sans">
      <div className="container flex justify-between">
        <div className="inline-flex text-white items-center">
          <BsTelephone className="mr-2" />
          <span className="mr-4">{config.supportPhoneNo}</span>
          <IoIosMail className="mr-2" />
          <span>{config.supportMail}</span>
        </div>
        <div className="inline-block">
          <LangSelect />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
