import React, { memo, useEffect } from "react";
import UiImage from "~/lib/Image";
import UiSlider from "~/lib/UiSlider";
import { isDev } from "~/utils/helpers";
import { HomePageslider } from "../Partials";
import FeaturedExclusives from "../Partials/FeaturedExclusives/FeaturedExclusives";

// TODO: hide the environment variable inside the image tag url
const Home = memo(() => {
  return (
    <>
      <div className="w-full">
        <HomePageslider />
        <main className={`container`}>
          <FeaturedExclusives />
        </main>
      </div>
    </>
  );
});

if (isDev) {
  Home.displayName = "Price";
}

export default Home;
