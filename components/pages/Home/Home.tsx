import React, { memo, useEffect } from "react";
import { isDev } from "~/utils/helpers";
import { HomePageslider } from "../Partials";
import FeaturedExclusives from "../Partials/FeaturedExclusives/FeaturedExclusives";
import ExploreByNeighrbourhood from "../Partials/ExploreByNeighrbourhood/ExploreByNeighrbourhood";
import SellYourProperty from "../Partials/SellYourProperty/SellYourProperty";
import Agents from "../Partials/Agents/Agents";

// TODO: hide the environment variable inside the image tag url
const Home = memo(() => {
  return (
    <>
      <div className="w-full">
        <HomePageslider />
        <main className={``}>
          <FeaturedExclusives />
          <FeaturedExclusives title="Top Projects" />
          <SellYourProperty />
          <ExploreByNeighrbourhood />
          <Agents />
        </main>
      </div>
    </>
  );
});

if (isDev) {
  Home.displayName = "Price";
}

export default Home;
