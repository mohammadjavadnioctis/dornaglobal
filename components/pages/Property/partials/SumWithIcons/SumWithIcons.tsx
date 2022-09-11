import React, { FC, memo } from "react";
import Divider from "~/components/Divider/Divider";
import SumWithIcon from "~/components/SumWithIcons/SumWithIcon";
import { isDev } from "~/utils/helpers";

interface SumWithIconsType {
  features?: Record<string, string | number | undefined>[];
}

const SumWithIcons: FC<SumWithIconsType> = memo((props) => {
  const { features } = props;
  // console.log("here is the features,", features);

  return (
    <div className="container grid grid-cols-5 ">
      {features?.map((feature) => (
        <SumWithIcon
          FeatureTitle={Object.keys(feature)[0]}
          featureName={Object.keys(feature)[0]}
          featureValue={Object.values(feature)[0]!}
        />
      ))}
      <Divider />
    </div>
  );
});

if (isDev) {
  SumWithIcons.displayName = "SumWithIcons";
}

export default SumWithIcons;
