import React, { FC, memo } from "react";
import AgentCard from "~/components/AgentCard.tsx/AgentCard";
import Head from "~/components/Head/Head";
import { isDev } from "~/utils/helpers";
import { AgentType } from "~/utils/types";

const AgentsSampleData: AgentType[] = [
  {
    name: "John",
    surname: "Doe",
    position: "Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, expedita.",
    office: "Company Agent , Cool Houses Inc",
    image:
      "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fagent1.jpg?alt=media&token=5f0e04f7-feff-40c9-9574-a87c4318939c",
  },
  {
    name: "Justin",
    surname: "Bieebr",
    position: "Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, expedita.",
    office: "Company Agent , Cool Houses Inc",
    image:
      "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fagent%202.jpg?alt=media&token=7ee69cd7-f0c2-4545-aea7-d5214fbf1945",
  },
  {
    name: "Lady",
    surname: "Gaga",
    position: "Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, expedita.",
    office: "Company Agent , Cool Houses Inc",
    image:
      "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fagent3.jpg?alt=media&token=7860f293-0ae1-4501-9e90-4d4a28eb2341",
  },
];

const Agents: FC = memo(() => {
  return (
    <div className="w-full bg-[#f7f7f7]">
      <Head
        title="Meet Our Agents"
        subtitle="CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT AS LISTS OR GRIDS, FULL-WIDTH OR BOXED ​"
      />
      <div className="flex justify-center items-center flex-wrap">
        {AgentsSampleData.map((agent) => {
          return <AgentCard agent={agent} key={agent.id} />;
        })}
      </div>
    </div>
  );
});

if (isDev) {
  Agents.displayName = "Agents";
}

export default Agents;
