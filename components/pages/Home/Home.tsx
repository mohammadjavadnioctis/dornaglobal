import React, { memo, useEffect, FC, useRef } from "react";
import { isDev } from "~/utils/helpers";
import { HomePageslider } from "./Partials";
import FeaturedExclusives from "./Partials/FeaturedExclusives/FeaturedExclusives";
import ExploreByNeighrbourhood from "./Partials/ExploreByNeighrbourhood/ExploreByNeighrbourhood";
import SellYourProperty from "./Partials/SellYourProperty/SellYourProperty";
import Agents from "./Partials/Agents/Agents";
import OurServices from "./Partials/OurServices/OurServices";
import { PropertyType } from "~/utils/types";
import NeightBourHoodSlider from "./Partials/NeightBourHoodSlider/NeightBourHoodSlider";
import useScrollSnap from "react-use-scroll-snap";
import Promotions from "./Partials/Promotions/Promotions";
import useTrans from "~/lib/useTranslate";

// TODO: hide the environment variable inside the image tag url
interface HomepageType {
  properties: PropertyType[];
}
const Home: FC<HomepageType> = memo((props) => {
  const { properties } = props;
  const scrollRef = useRef(null);
  const t = useTrans()
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  return (
    <>
      <div className="w-full relative">
        <HomePageslider />
        <main className={``}>
          <Promotions />
          <FeaturedExclusives
            properties={properties}
            title={t("TOP PROJECTS")}
            ref={scrollRef}
            titleClassNames='text-[25px] md:text-[40px]'
            subtitleClassNames="text-sm"
          />
          <FeaturedExclusives
            properties={properties}
            title={t("LATEST PROPERTIES")}
            titleClassNames='text-[25px] md:text-[40px]'
            subtitleClassNames="text-sm"
          />
          <NeightBourHoodSlider />
          <SellYourProperty />
          <ExploreByNeighrbourhood />
          <Agents />
          <OurServices />
        </main>
      </div>
    </>
  );
});

if (isDev) {
  Home.displayName = "Price";
}

export default Home;
