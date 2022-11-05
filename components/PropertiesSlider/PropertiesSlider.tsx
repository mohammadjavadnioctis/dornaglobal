import React, { FC, memo, useCallback, useState } from "react";
import UiSlider from "~/lib/UiSlider";
import { isDev } from "~/utils/helpers";
import { Autoplay } from "swiper";
import UiLink from "~/lib/UiLink";
import { PropertyType } from "~/utils/types";
import PropertyCard from "../PropertyCard/PropertyCard";
import SwiperClass from "swiper";
import { Button } from "@mantine/core";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface PropertiesSliderProps {
  properties: PropertyType[];
  similar?: boolean;
  slidesPerView?: number;
  showButtons?: boolean;
}

const PropertiesSlider: FC<PropertiesSliderProps> = memo((props) => {
  const { properties, similar, slidesPerView = 4, showButtons = true } = props;
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <div className="properties_slider relative">
      <div className="w-[95%] mx-auto   shadow-card rounded-lg xl:my-5 mb-5 select-none swiper-padding">
        {showButtons && (
          <Button
            className="absolute left-0 hidden xl:inline-block w-14 h-14 group-hover:opacity-100 
                        transition ease-in-out duration-300 border-subtitleColor    
                        text-subtitleColor -translate-x-2/4 rounded-full top-1/2 !z-40"
            type="button"
            variant="default"
            onClick={handleLeftClick}
          >
            <AiOutlineLeft className={"w-5 h-5 rounded-full"} />
          </Button>
        )}
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
          onSwiper={setSwiperRef}
        >
          {properties.map((property, index) => {
            // if (!property.hiResImageLink) return;

            return (
              <UiSlider.Slide className="bg-white rounded-xl">
                {/* <UiLink
                  href={`/property/${property.id}`}
                  className="h-full relative"
                > */}
                  <PropertyCard
                    key={index}
                    property={property}
                    similar={similar}
                  />
                {/* </UiLink> */}
              </UiSlider.Slide>
            );
          })}
        </UiSlider>
        {showButtons && (
          <Button
            className="absolute hidden xl:inline-block top-1/2 right-0 w-14 h-14 group-hover:opacity-100 
                        transition ease-in-out duration-300  rounded-full border-subtitleColor
                        border !z-40 text-subtitleColor translate-x-2/4"
            type="button"
            variant="default"
            size="sm"
            onClick={handleRightClick}
          >
            <AiOutlineRight className={"w-5 h-5 rounded-full"} />
          </Button>
        )}
      </div>
    </div>
  );
});

if (isDev) {
  PropertiesSlider.displayName = "PropertiesSlider";
}

export default PropertiesSlider;
