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
      <div className="w-full border-2 border-green-400">
        <HomePageslider />
        <main className={`container border-2 border-orange-400`}>
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
