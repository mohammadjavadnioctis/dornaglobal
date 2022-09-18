import React, { memo, useEffect, FC } from "react";
import { isDev } from "~/utils/helpers";
import { HomePageslider } from "../Partials";
import FeaturedExclusives from "../Partials/FeaturedExclusives/FeaturedExclusives";
import ExploreByNeighrbourhood from "../Partials/ExploreByNeighrbourhood/ExploreByNeighrbourhood";
import SellYourProperty from "../Partials/SellYourProperty/SellYourProperty";
import Agents from "../Partials/Agents/Agents";
import OurServices from "../Partials/OurServices/OurServices";
import { PropertyType } from "~/utils/types";

// TODO: hide the environment variable inside the image tag url
interface HomepageType {
  properties: PropertyType[];
}
const Home: FC<HomepageType> = memo((props) => {
  const { properties } = props;
  return (
    <>
      <div className="w-full snap-y snap-mandatory">
        <HomePageslider />
        <main className={`snap-start`}>
          <FeaturedExclusives properties={properties} title="Top Projects" />
          <FeaturedExclusives
            properties={properties}
            title="Latest Properties"
          />
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
