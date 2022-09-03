import React, { memo, useEffect } from "react";
import { isDev } from "~/utils/helpers";
import { HomePageslider } from "../Partials";
import FeaturedExclusives from "../Partials/FeaturedExclusives/FeaturedExclusives";
import ExploreByNeighrbourhood from "../Partials/SellYourProperty/ExploreByNeighrbourhood/ExploreByNeighrbourhood";
import SellYourProperty from "../Partials/SellYourProperty/SellYourProperty";

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
        </main>
      </div>
    </>
  );
});

if (isDev) {
  Home.displayName = "Price";
}

export default Home;
