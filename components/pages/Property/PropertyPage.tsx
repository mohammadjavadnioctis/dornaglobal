import React, { FC, memo } from "react";
import Divider from "~/components/Divider/Divider";
import PropertyDetails from "~/components/PropertyDetails/PropertyDetails";
import PropertyFeatures from "~/components/PrpertyFeatures/PropertyFeatures";
import SidebarAgentCard from "~/components/SidebarAgentCard/SidebarAgentCard";
import SumWithText from "~/components/SumWithText/SumWithText";
import {
  samplePropertyDetailsData,
  SamplePropertyFeatures,
} from "~/utils/data";
import propertyDetails from "~/utils/data/SamplePropertyDetails";
import { isDev } from "~/utils/helpers";
import { AgentType, PropertyType } from "~/utils/types";
import FeaturedExclusives from "../Partials/FeaturedExclusives/FeaturedExclusives";
import Description from "./partials/Description/Description";
import Propertyslider from "./partials/Propertyslider";
import SumWithIcons from "./partials/SumWithIcons/SumWithIcons";

interface PropertyPageType {
  property: PropertyType;
  agent: AgentType;
  similarProperties?: PropertyType[];
}

interface ImagesType {
  url: string;
}
const PropertyPage: FC<PropertyPageType> = memo((props) => {
  const { property, agent, similarProperties } = props;
  const {
    photos,
    bedrooms,
    bathrooms,
    livingArea,
    yearBuilt,
    propertyTypeDimension,
    description,
    nearbyHomes,
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
      <div className="slider_container bg-white p-4  mb-4">
        <SumWithText {...SumWithTextProps} />

        {images && <Propertyslider images={images as string[]} />}
        <Divider />
        <SumWithIcons features={[...SumWithIconsProps]} />
      </div>
      {/* The layout of the right sidebar and content */}
      <div className=" container relative min-h-[80vh] flex justify-between">
        <div className="w-[74%]">
          <PropertyDetails details={samplePropertyDetailsData} />
          <Description description={description!} />
          <PropertyFeatures features={SamplePropertyFeatures} />

          {Array.isArray(similarProperties) && similarProperties.length > 1 && (
            <FeaturedExclusives
              properties={similarProperties}
              title="Similar Properties"
              subtitle=""
              slidesPerView={3}
              showSliderButtons={false}
              titleContainerClassNames="!text-left max-w-[unset] my-0 mx-0"
              wrapperClassNames="w-full !p-10 bg-white rounded-xl"
              titleClassNames="text-titleColors text-lg font-playfair pb-10 mb-6 border-b border-gray-400"
            />
          )}
        </div>
        <div className="w-1/4 bg-white rounded-xl h-[50vh] sticky top-0 right-0">
          <SidebarAgentCard agent={agent} />
        </div>
      </div>
    </div>
  );
});

if (isDev) {
  PropertyPage.displayName = "PropertyPage";
}

export default PropertyPage;
