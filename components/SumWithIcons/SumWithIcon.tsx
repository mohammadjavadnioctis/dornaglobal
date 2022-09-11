import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { TbDimensions } from "react-icons/tb";
import { BsCalendar3 } from "react-icons/bs";

interface SumWithIcon {
  featureName: string;
  FeatureTitle: string;
  featureValue: string | number;
}

const SumWithIcon: FC<SumWithIcon> = memo((props) => {
  const { featureName, featureValue } = props;
  return (
    <>
      <div className="wrapper flex flex-col items-center justify-center">
        <div className="flex items-center">
          <FeatureIcon IconName={featureName} />
          <span className="feature_value ml-2">{featureValue}</span>
        </div>
        <span>{featureName}</span>
      </div>
    </>
  );
});

interface FeatureIconType {
  IconName: string;
}

const FeatureIcon: FC<FeatureIconType> = memo((props) => {
  const { IconName } = props;

  let Icon = (() => {
    switch (IconName) {
      case "Bedrooms":
        return <BiBed />;
      case "Bathrooms":
        return <FaBath />;
      case "garage":
        return <GiHomeGarage />;
      case "Living Area":
        return <TbDimensions />;
      case "Year Built":
        return <BsCalendar3 />;
      default:
        return <div className="hidden"></div>;
    }
  })();

  // console.log("this is the icon", Icon);

  return Icon;
});

if (isDev) {
  FeatureIcon.displayName = "FeatureIcon";
}

if (isDev) {
  SumWithIcon.displayName = "SumWithIcon";
}

export default SumWithIcon;
