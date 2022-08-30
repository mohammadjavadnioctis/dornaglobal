import React, { FC, memo } from "react";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";
import { PropertyType } from "~/utils/types";

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard: FC<PropertyCardProps> = memo(({ property }) => {
  const { title, images, details } = property;
  return (
    <div className="border-2 border-green-400 aspect-w-3 aspect-h-4 bg-white">
      <div className="overflow-hidden">
        <div
          className={
            "block overflow-hidden aspect-w-4 aspect-h-2 border-2 border-pink-400"
          }
        >
          {/* This empty div is required for aspect ratio and next/image to work together. */}
          <div className={"overflow-hidden"}>
            <div className="relative w-full h-full transition ease-in-out duration-150 group-hover:opacity-75">
              {!!images && (
                <UiImage
                  className="rounded-t-lg"
                  src={`${images[0]}`}
                  alt={title}
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                  unoptimized={true}
                  // priority={preloadImage}
                  // onLoadingComplete={() =>
                  //     setIsImageLoading(false)
                  // }
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border relative border-blue-400 flex flex-col justify-around items-center">
        <h2>{property.title}</h2>
        <h3>{property.details?.price}</h3>
        <p>{property.details?.estateType}</p>
        <p>{property.details?.estateType}</p>
        <p>{property.details?.estateType}</p>
        <p>{property.details?.estateType}</p>
      </div>
    </div>
  );
});

if (isDev) {
  PropertyCard.displayName = "PropertyCard";
}

export default PropertyCard;
