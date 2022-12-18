import React from "react";
import config from "~/app.config.js";
import { BsTelephone } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import LangSelect from "~/components/LangSelect/LangSelect";
const TopBar = () => {
  return (
    <div className="w-full m-auto py-1 min-h-[35px] bg-accent flex items-center justify-center font-sans">
      <div className="container flex justify-between">
        <div className="inline-flex flex-col md:flex-row text-white items-center">
          <div className="flex items-center">

          <BsTelephone className="mr-2 text-black" />
          <a
            href={`tel:${config.supportPhoneNo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-4 text-black">{config.supportPhoneNoBeautified}</span>
          </a>
          </div>
          <a
            href="mailto:info@dornaglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <IoIosMail className="mr-2 text-black" />
            <span className="text-black">{config.supportMail}</span>
          </a>
        </div>
        <div className="inline-block">
          <LangSelect />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
