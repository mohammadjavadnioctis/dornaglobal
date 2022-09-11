import React, { FC, memo, useState } from "react";
import UiSlider from "~/lib/UiSlider";
import SwiperClass, { FreeMode, Navigation, Thumbs } from "swiper";
import UiImage from "~/lib/Image";

interface PropertysliderType {
  images: string[];
}

const Propertyslider: FC<PropertysliderType> = memo((props) => {
  const { images } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  console.log("images from slider ", images);
  return (
    <div className="container w-full min-h-[400px] max-h-[600px] overflow-hidden relative">
      <UiSlider
        style={{
          // @ts-ignore
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          height: "100%",
          width: "73%",
          margin: 0,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => {
          return (
            <UiSlider.Slide>
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
          {images.map((image, index) => {
            return (
              <UiSlider.Slide>
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
                  />
                </div>
              </UiSlider.Slide>
            );
          })}
        </UiSlider>
      </div>
    </div>
  );
});

export default Propertyslider;
