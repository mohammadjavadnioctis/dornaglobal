import React, { FC, memo, useState } from "react";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";
import { AgentType } from "~/utils/types";
import { CgProfile } from "react-icons/cg";
import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import UiLink from "~/lib/UiLink";
import { IoCallOutline } from "react-icons/io5";
import { Button } from "@mantine/core";

interface SidebarAgentCard {
  agent: AgentType;
}

const SidebarAgentCard: FC<SidebarAgentCard> = memo((props) => {
  const { agent } = props;
  const { name, surname, img, mail, tel, description, position } = agent;
  const [isImageLoading, setIsImageLoading] = useState(true);
  return (
    <div className="w-full p-2">
      <div className="w-full flex justify-start items-center">
        <div className="img_container relative w-16 h-16 mr-4">
          {isImageLoading && (
            <div className="absolute inset-0 z-1 w-full h-full bg-white">
              <div className="w-full h-full bg-gray-300 rounded animate-pulse-fast" />
            </div>
          )}
          {img ? (
            <UiImage
              src={img}
              width={70}
              height={70}
              onLoad={() => {
                setIsImageLoading(false);
              }}
            />
          ) : (
            <CgProfile className="w-10 h-10 text-gray-400" />
          )}
        </div>
        <div className="info flex h-min flex-col justify-between">
          <span className="">
            {name} {surname}
          </span>
          <span className="text-accent">{position ?? "Real estate agent"}</span>
        </div>
      </div>
      <div className="agent_body flex flex-col space-y-4 mt-4">
        <div className="pb-2">
          <UiLink
            href={`https://api.whatsapp.com/send?phone=${tel}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full items-center justify-between"
          >
            <BsWhatsapp className="w-5 h-5 mr-2" />
            <span> {tel} </span>
          </UiLink>
        </div>
        <div className="pb-2">
          <UiLink
            href={`mailto:${mail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full items-center justify-between"
          >
            <FiMail className="w-5 h-5 mr-2" />
            <span> {mail} </span>
          </UiLink>
        </div>
        <div className="pb-2">
          <UiLink
            href={`tel:${tel}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full items-center justify-between"
          >
            <IoCallOutline className="w-5 h-5 mr-2" />
            <span> {tel} </span>
          </UiLink>
        </div>
      </div>
      <div className="agent_call flex justify-between text-green-400 py-2">
        <Button
          variant="outline"
          size="lg"
          uppercase
          className="text-accent border-accent hover:bg-accent hover:text-white w-full mr-2"
        >
          <UiLink href={`mailto:${mail}`}>mail</UiLink>
        </Button>
        <Button
          variant="filled"
          size="lg"
          color="#E9C46A"
          uppercase
          className="bg-accent hover:bg-accent-600 transition-all w-full "
        >
          <UiLink href={`https://api.whatsapp.com/send?phone=${tel}`}>
            call
          </UiLink>
        </Button>
      </div>
    </div>
  );
});

if (isDev) {
  SidebarAgentCard.displayName = "SidebarAgentCard";
}

export default SidebarAgentCard;
