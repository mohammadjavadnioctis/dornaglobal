import React, { FC, memo } from "react";
import CircleSlider from "~/components/CircleSlider/CircleSlider";
import { NeightBourHoodSampleData } from "~/utils/data";
import { isDev } from "~/utils/helpers";

const NeightBourHoodSlider: FC = memo(() => {
  return (
    <div>
      <CircleSlider slides={NeightBourHoodSampleData} />
    </div>
  );
});

if (isDev) {
  NeightBourHoodSlider.displayName = "NeightBourHoodSlider";
}

export default NeightBourHoodSlider;
