import React, { FC, memo } from "react";
import Divider from "~/components/Divider/Divider";
import SumWithIcon from "~/components/SumWithIcons/SumWithIcon";
import { isDev } from "~/utils/helpers";

interface SumWithIconsType {
  features?: Record<string, string | number | undefined>[];
}

const SumWithIcons: FC<SumWithIconsType> = memo((props) => {
  const { features } = props;

  return (
    <div className="px-3 md:px-4 md:container grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
      {features?.map((feature) => (
        <SumWithIcon
          key={Object.keys(feature)[0]}
          FeatureTitle={Object.keys(feature)[0]}
          featureName={Object.keys(feature)[0]}
          featureValue={Object.values(feature)[0] ?? 'not provided' }
        />
      ))}
    </div>
  );
});

if (isDev) {
  SumWithIcons.displayName = "SumWithIcons";
}

export default SumWithIcons;
