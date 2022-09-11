import React, { FC, memo } from "react";
import Head from "~/components/Head/Head";
import Card from "./Card";
import neightbourhoods from "~/utils/data/neightbours.json";
import { isDev } from "~/utils/helpers";

const ExploreByNeighrbourhood: FC = memo(() => {
  return (
    <div className="container">
      <Head
        title="Dorna Global Activites"
        subtitle="You can count on Dorna Global for all of your Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, commodi!​"
        subtitleClassNames="text-subtitleColor tracking-[1px] font-medium leading-[1.5rem] font-[Dosis,_sans-serif]"
        containerClassNames="max-w-[600px] mx-auto my-[60px]"
      />

      {/* the image gallery */}
      <div className="container max-w-[990px] w-full min-h-[500px] grid grid-cols-[repeat(auto-fit,_320px)] auto-rows-[10px] justify-center">
        {neightbourhoods.map((neightbourHood, index) => {
          return (
            <Card
              category={neightbourHood}
              size={index == 1 || index == 3 ? "medium" : "small"}
              key={neightbourHood.id}
            />
          );
        })}
        {/* <Card size="small" />
            <Card size="medium" />
            <Card size="small" />
            <Card size="medium" />
            <Card size="small" />
            <Card size="small" />
            <Card size="small" /> */}
      </div>
    </div>
  );
});

if (isDev) {
  ExploreByNeighrbourhood.displayName = "ExploreByNeightbourHood";
}

export default ExploreByNeighrbourhood;
