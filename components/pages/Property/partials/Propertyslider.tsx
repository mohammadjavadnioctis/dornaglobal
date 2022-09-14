import React, { FC, memo, useState } from "react";
import UiSlider from "~/lib/UiSlider";
import SwiperClass, { FreeMode, Navigation, Thumbs } from "swiper";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";
import Divider from "~/components/Divider/Divider";

interface PropertysliderType {
  images: string[];
}

const Propertyslider: FC<PropertysliderType> = memo((props) => {
  const { images } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isVerticalSliderLoading, setIsVerticalSliderLoading] = useState(true);
  return (
    <div className="container w-full min-h-[400px] max-h-[600px] overflow-hidden relative">
      <div className="w-full sm:aspect-w-3 sm:aspect-h-2 md:aspect-w-16 md:aspect-h-9 xl:aspect-none mt-4 xl:mt-0 xl:w-full xl:!h-[600px]">
        <UiSlider
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            minHeight: "400px",
            height: "100%",
            width: "73%",
            margin: 0,
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {isImageLoading && (
            <div className="absolute inset-0 z-1 w-full h-full bg-white">
              <div className="w-full h-full bg-gray-300 rounded animate-pulse-fast" />
            </div>
          )}
          {images.map((image, index) => {
            return (
              <UiSlider.Slide key={index}>
                <div className="relative w-full h-full">
                  <UiImage
                    className="rounded-lg bg-neutral-300"
                    src={image}
                    alt={"property Image"}
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    unoptimized={true}
                    priority={index === 0}
                    onLoad={() => {
                      setIsImageLoading(false);
                    }}
                  />
                </div>
              </UiSlider.Slide>
            );
          })}

          {/* <img
            className="w-full h-full flex justify-center items-center"
            src="https://demo05.houzez.co/wp-content/uploads/2016/01/inner-living-room-3-758x564.jpg"
          /> */}
        </UiSlider>
      </div>
      <div className="thumbs_slider absolute top-0 right-0 w-1/4 h-full">
        <UiSlider
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          slidesPerView={2}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper thumbSlider"
          direction="vertical"
        >
          {isVerticalSliderLoading && (
            <div className="absolute inset-0 z-1 w-full h-full bg-white">
              <div className="w-full h-full bg-gray-300 rounded animate-pulse-fast" />
            </div>
          )}
          {images.map((image, index) => {
            return (
              <UiSlider.Slide key={index}>
                <div className="relative w-full h-full">
                  <UiImage
                    className="rounded-lg"
                    src={image}
                    alt={"property Image"}
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    unoptimized={true}
                    priority={index === 0}
                    onLoad={() => {
                      setIsVerticalSliderLoading(false);
                    }}
                  />
                </div>
              </UiSlider.Slide>
            );
          })}
        </UiSlider>
      </div>
      <Divider />
    </div>
  );
});

if (isDev) {
  Propertyslider.displayName = "PorpertySlider";
}

export default Propertyslider;
