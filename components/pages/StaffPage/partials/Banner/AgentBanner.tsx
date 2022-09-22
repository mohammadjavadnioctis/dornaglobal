import { Button } from "@mantine/core";
import React, { FC, memo } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";

const AgentBanner: FC = memo(() => {
  return (
    <div className="relative">
      <div className="overlay absolute w-full h-full top-0 left-0 bg-black bg-opacity-[0.7] z-[2] flex flex-col justify-end items-center">
        <h1 className="agent_name font-normal text-[53px] text-white">
          John Doe
        </h1>
        <h2 className="text-xs font-light text-white tracking-[10px]">
          {" "}
          Dorna Global Real Estate Agent{" "}
        </h2>
        <div className="social_media flex items-center">
          <IoLogoInstagram className="text-white w-6 h-6 my-4 mx-4 cursor-pointer hover:text-accent transition-all" />
          <IoLogoLinkedin className="text-white w-6 h-6 my-4 mx-4 cursor-pointer hover:text-accent transition-all" />
          <IoLogoFacebook className="text-white w-6 h-6 my-4 mx-4 cursor-pointer hover:text-accent transition-all" />
          <IoLogoTwitter className="text-white w-6 h-6 my-4 mx-4 cursor-pointer hover:text-accent transition-all" />
          <IoLogoYoutube className="text-white w-6 h-6 my-4 mx-4 cursor-pointer hover:text-accent transition-all" />
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-4 my-4">
          <Button
            variant="outline"
            size="xl"
            className="border-white text-white text-sm font-light tracking-[10px] "
          >
            CONTACT
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="border-white text-white text-sm font-light tracking-[10px]"
          >
            PROPERTIES
          </Button>
        </div>
      </div>
      <div className="slider relative w-full h-screen">
        <UiImage
          id="bg"
          src="https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2FdemoAgent06-05.jpg?alt=media&token=c8490c02-3c83-4515-8a29-7739c3428535"
          // src={`https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/SeekPng.com_world-map-png-image_2573292.png?alt=media&token=c8fd5965-2263-4d6f-9d68-a3b79105de28`}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
        />
      </div>
    </div>
  );
});

if (isDev) {
  AgentBanner.displayName = "AgentBanner";
}

export default AgentBanner;
