import React, { FC, memo } from "react";
import AgentCard from "~/components/AgentCard.tsx/AgentCard";
import Head from "~/components/Head/Head";
import { isDev } from "~/utils/helpers";
import { AgentType } from "~/utils/types";

const AgentsSampleData: AgentType[] = [
  {
    name: "Sanaz",
    surname: "Shahsavar",
    position: "Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, expedita.",
    office: "Company Agent , Izmir Branch",
    img: "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fsanaz%20shahsavar.jpg?alt=media&token=e443d4d4-976d-4abe-b983-44a3dfeead8b",
    id: "Zd58oroNdd7pC5kuKT4C",
  },
  {
    name: "Roya",
    surname: "Rahimi",
    position: "Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, expedita.",
    office: "Company Agent ,Dorna Global",
    img: "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2FRoya.jpg?alt=media&token=4707987e-5624-4a0e-b78d-a413040edb6a",
    id: "xpRbGNtDWVYGzBkran8g",
  },
  {
    name: "Nora",
    surname: "Alieva",
    position: "Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, expedita.",
    office: "Company Agent , Istanbul Branch",
    img: "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fnora%20alieva.jpg?alt=media&token=678f1288-37ad-4948-a633-f5fadcf08468",
    id: "maBZYb7jatDlNJSWYc6S",
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
