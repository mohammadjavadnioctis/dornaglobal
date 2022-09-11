import React, { FC, memo } from "react";
import { PropertyType } from "~/utils/types";
import Propertyslider from "./partials/Propertyslider";

interface PropertyPageType {
  property: PropertyType;
}

interface ImagesType {
  url: string;
}
const PropertyPage: FC<PropertyPageType> = memo((props) => {
  const { property } = props;
  const { photos } = property;
  // get the highest res images from the photos
  const images: (string | undefined)[] | undefined = photos?.map(
    (photo) => photo?.mixedSources?.webp?.pop()?.url
  );

  return (
    <div>
      <Propertyslider images={images as string[]} />
    </div>
  );
});

export default PropertyPage;
