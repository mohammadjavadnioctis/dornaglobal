import React, { FC, memo } from "react";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";
import { PropertyType } from "~/utils/types";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard: FC<PropertyCardProps> = memo(({ property }) => {
  const { title, images, details, id } = property;
  return (
    <div className="bg-white" key={id}>
      <div className="overflow-hidden">
        <div className={"block overflow-hidden aspect-w-4 aspect-h-3"}>
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
      <div className="relative p-8  flex flex-col justify-around items-center antialiased">
        <h2 className="w-52 mb-5 overflow-hidden text-ellipsis whitespace-nowrap text-2xl hover:text-accent transition-all cursor-pointer">
          {property.title}
        </h2>
        <div className="w-full text-center mb-6">
          <h3 className="font-[Dosis,_sans-serif] text-lg font-medium mb-1">
            ₺{property.details?.price}
          </h3>
          <p className="font-[Dosis,_sans-serif] text-xs font-normal text-subtitleColor">
            APARTMENT
          </p>
        </div>
        <div className="features flex justify-center text-subtitleColor">
          <span className="inline-flex mx-2 items-center justify-center">
            <BiBed className="mr-1" />{" "}
            {property.details?.features?.noOfBedRooms}
          </span>
          <span className="inline-flex mx-2 items-center justify-center">
            <FaBath className="mr-1" />{" "}
            {property.details?.features?.noOfBathRooms}
          </span>
          <span className="inline-flex mx-2 items-center justify-center">
            <GiHomeGarage className="mr-1" />
            {property.details?.features?.noOfParkings}
          </span>
        </div>
      </div>
    </div>
  );
});

if (isDev) {
  PropertyCard.displayName = "PropertyCard";
}

export default PropertyCard;
