import React, { FC, memo } from "react";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";
import { PropertyType } from "~/utils/types";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { BiCar } from "react-icons/bi";

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard: FC<PropertyCardProps> = memo(({ property }) => {
  const {
    title,
    photos,
    price,
    bedrooms,
    bathrooms,
    garage = 1,
    hiResImageLink,
  } = property;
  // get the highest res images from the photos
  //     let images: (string | undefined)[] | undefined = photos?.map(
  //       (photo) => {
  //         if(photo?.mixedSources?.webp?.pop()?.url !== undefined ){
  //         return photo?.mixedSources?.webp?.pop()?.url
  //       } else {
  //         return photo?.mixedSources?.jpeg?.pop()?.url
  //       }
  // });
  //     console.log('here is the images', images)

  return (
    <div className="group hover:shadow-lg transition-shadow">
      <div className="overflow-hidden">
        <div className={"block overflow-hidden aspect-w-4 aspect-h-4"}>
          {/* This empty div is required for aspect ratio and next/image to work together. */}
          <div className={"overflow-hidden"}>
            <div className="relative w-full h-full transition ease-in-out duration-150 group-hover:opacity-75">
              {!!hiResImageLink && hiResImageLink.length > 0 && (
                <UiImage
                  className="rounded-t-lg"
                  src={hiResImageLink!}
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
      <div className="relative p-8 px-2 flex flex-col justify-around items-center antialiased">
        <h2 className="w-52 mb-5 overflow-hidden text-ellipsis whitespace-nowrap text-2xl hover:text-accent transition-all cursor-pointer">
          {property.title}
        </h2>
        <div className="w-full text-center mb-6">
          <h3 className="font-[Dosis,_sans-serif] text-lg font-medium mb-1">
            ₺{price}
          </h3>
          <p className="font-[Dosis,_sans-serif] text-xs font-normal text-subtitleColor">
            APARTMENT
          </p>
        </div>
        <div className="features w-full flex justify-between text-subtitleColor">
          <div className="flex flex-col justify-between">
            <span className="inline-flex mx-2 items-center justify-center">
              <BiBed className="mr-1" />
              {bedrooms}
            </span>
            <span className="text-xs">Beedrooms</span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="inline-flex mx-2 items-center justify-center">
              <FaBath className="mr-1" />
              <span>{bathrooms}</span>
            </span>
            <span className="text-xs">Bathrooms</span>
          </div>

          <div className="flex flex-col justify-between">
            <span className="inline-flex mx-2 items-center justify-center">
              <BiCar className="mr-1" />
              <span>2</span>
            </span>
            <span className="text-xs">Garage</span>
          </div>
        </div>
      </div>
    </div>
  );
});

if (isDev) {
  PropertyCard.displayName = "PropertyCard";
}

export default PropertyCard;
