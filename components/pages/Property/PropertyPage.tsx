import React, { FC, memo } from "react";
import Divider from "~/components/Divider/Divider";
import SumWithText from "~/components/SumWithText/SumWithText";
import { isDev } from "~/utils/helpers";
import { AgentType, PropertyType } from "~/utils/types";
import Description from "./partials/Description/Description";
import Propertyslider from "./partials/Propertyslider";
import SumWithIcons from "./partials/SumWithIcons/SumWithIcons";

interface PropertyPageType {
  property: PropertyType;
  agent: AgentType;
}

interface ImagesType {
  url: string;
}
const PropertyPage: FC<PropertyPageType> = memo((props) => {
  const { property, agent } = props;
  console.log("here is the agent baby", agent);
  const {
    photos,
    bedrooms,
    bathrooms,
    livingArea,
    yearBuilt,
    propertyTypeDimension,
    description,
  } = property;
  // get the highest res images from the photos
  const images: (string | undefined)[] | undefined = photos?.map(
    (photo) => photo?.mixedSources?.webp?.pop()?.url
  );

  const SumWithTextProps = {
    title: property.title ?? "Amazing Oceanfront Apartment",
    address: property.address,
    price: property.price,
    tags: [],
  };

  const SumWithIconsProps = [
    { Bedrooms: bedrooms! },
    { Bathrooms: bathrooms! },
    { "Living Area": livingArea! },
    { "Year Built": yearBuilt! },
    { "Property Type": propertyTypeDimension! },
  ];

  return (
    <div>
      <SumWithText {...SumWithTextProps} />
      {images && <Propertyslider images={images as string[]} />}
      <Divider />
      <SumWithIcons features={[...SumWithIconsProps]} />
      {/* The layout of the right sidebar and content */}
      <div className=" container relative min-h-[80vh] flex justify-between border-green-400 border-2">
        <div className="w-[70%] border-2 border-orange-400">
          <Description description={description!} />
        </div>
        <div className="w-1/4 border-2 border-pink-400 h-[50vh] sticky top-0 right-0 self-start"></div>
      </div>
    </div>
  );
});

if (isDev) {
  PropertyPage.displayName = "PropertyPage";
}

export default PropertyPage;
