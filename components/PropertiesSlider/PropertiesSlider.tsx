import React, { FC, memo } from "react";
import UiSlider from "~/lib/UiSlider";
import { isDev } from "~/utils/helpers";
import { Autoplay } from "swiper";
import UiLink from "~/lib/UiLink";
import { PropertyType } from "~/utils/types";
import PropertyCard from "../PropertyCard/PropertyCard";

interface PropertiesSliderProps {
  properties: PropertyType[];
  similar?: boolean;
  slidesPerView?: number;
}

const PropertiesSlider: FC<PropertiesSliderProps> = memo((props) => {
  const { properties, similar, slidesPerView = 4 } = props;

  return (
    <div className="properties_slider">
      <div className="w-[95%] mx-auto   shadow-card rounded-lg xl:my-5 mb-5 select-none swiper-padding">
        <UiSlider
          className="h-full w-full"
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          slidesPerView={slidesPerView}
          spaceBetween={12}
          // onSwiper={swiper => {
          //     swiperRef.current = swiper;
          // }}
          loop
        >
          {properties.map((property, index) => {
            // if (!property.hiResImageLink) return;

            return (
              <UiSlider.Slide className="bg-white rounded-xl">
                <UiLink
                  href={`/property/${property.id}`}
                  className="h-full relative"
                >
                  <PropertyCard
                    key={index}
                    property={property}
                    similar={similar}
                  />
                </UiLink>
              </UiSlider.Slide>
            );
          })}
        </UiSlider>
      </div>
    </div>
  );
});

if (isDev) {
  PropertiesSlider.displayName = "PropertiesSlider";
}

export default PropertiesSlider;
