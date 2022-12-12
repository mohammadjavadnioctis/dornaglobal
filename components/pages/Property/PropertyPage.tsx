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
import { camelCaseToSpaces, isDev, legitDetails } from "~/utils/helpers";
import { AgentType, PropertyDetailsType, PropertyType, PropertyTypeV2 } from "~/utils/types";
import FeaturedExclusives from "../Home/Partials/FeaturedExclusives/FeaturedExclusives";
import Description from "./partials/Description/Description";
import Propertyslider from "./partials/Propertyslider";
import SumWithIcons from "./partials/SumWithIcons/SumWithIcons";
import VarifyButton from "./partials/VarifyButton/VarifyButton";

interface PropertyPageType {
  property: PropertyTypeV2;
  agent: AgentType;
  similarProperties?: PropertyType[];
}

interface ImagesType {
  url: string;
}
const PropertyPage: FC<PropertyPageType> = memo((props) => {
  const { property, agent, similarProperties } = props;
  const {
    mediaUrls,
    noOfBathRooms,
    noOfBedRooms,
    livingArea,
    yearBuilt,
    description,
  
  } = property;
  // get the highest res images from the photos
  // const images: (string | undefined)[] | undefined = photos?.map(
  //   (photo) => photo?.mixedSources?.webp?.pop()?.url
  // );


const images: (string | undefined)[] | undefined = mediaUrls?.images?.map(
    (photo) => photo
  );
  console.log('this is images: ', images)
  const SumWithTextProps = {
    title: property.title ?? "Amazing Oceanfront Apartment",
    address: property.address,
    price: property.price,
    tags: [],
  };

  const SumWithIconsProps = [
    { Bedrooms: noOfBedRooms },
    { Bathrooms: noOfBathRooms },
    { "Living Area": livingArea },
    { "Year Built": yearBuilt! },
    // { "Property Type": propertyTypeDimension! },
  ];

  const propertyDetails = () => {
    let details: PropertyDetailsType[] = []
    Object.keys(property).forEach(function(key, index) {
      // if the data is in appropriate to show, add it to the details list
      if(legitDetails.includes(key)){
         // @ts-ignore
        const propertyValue = property[key]
        details.push({detailName: key, detailTitle: camelCaseToSpaces(key), detailValue: propertyValue ?? 'not specified', id: key})
    
      }
    });
    details = [...details, { detailName: 'Deal Type: ', detailTitle: 'Deal Type', detailValue: camelCaseToSpaces(property?.chosenCategoryInfo?.dealType!) ,id: 'Deal Type'  }]
    return details
  } 
  propertyDetails()
  return (
    <div>
      <VarifyButton />
      <div className="slider_container bg-white p-4  mb-4">
        <SumWithText {...SumWithTextProps} />
        {!images && (
          <div className="container border flex space-x-10 items-start">

            <img className="w-full max-w-[75%] max-h-[600px]" src="https://firebasestorage.googleapis.com/v0/b/dorna-dev.appspot.com/o/no-image.png?alt=media&token=021927bf-ea0d-4cfc-8111-e1d7681b800c" />
            <img className="w-full max-w-[25%] max-h-[600px]" src="https://firebasestorage.googleapis.com/v0/b/dorna-dev.appspot.com/o/no-image.png?alt=media&token=021927bf-ea0d-4cfc-8111-e1d7681b800c" />
            
          </div>
        ) }
        {images && <Propertyslider images={images as string[]} />}
        <Divider />
        <SumWithIcons features={[...SumWithIconsProps]} />
      </div>
      {/* The layout of the right sidebar and content */}
      <div className=" container relative min-h-[80vh] flex justify-between">
        <div className="w-[74%]">
          {/* <PropertyDetails details={samplePropertyDetailsData} /> */}
          <PropertyDetails details={propertyDetails()} />
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
        <div className="w-1/4 bg-white rounded-xl h-[50vh] sticky top-[90px] right-0">
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
