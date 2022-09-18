import React, { FC, memo, useCallback, useState } from "react";
import UiSlider, { Autoplay } from "~/lib/UiSlider";
import SwiperClass from "swiper";
import { isDev } from "~/utils/helpers";
import UiLink from "~/lib/UiLink";
import UiImage from "~/lib/Image";
import { Button } from "@mantine/core";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export interface CircleSlideItem {
  img: string;
  title: string;
  subtitle: string;
  id: string;
}

interface CircleSliderProps {
  slides: CircleSlideItem[];
  showButtons?: boolean;
}

const CircleSlider: FC<CircleSliderProps> = memo((props) => {
  const { slides, showButtons = true } = props;
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <div className="container relative ">
      <div className="!pl-8">Browse By City and Neightbour hood</div>
      <div className=" w-[95%] mx-auto   shadow-card rounded-lg xl:my-5 mb-5 select-none swiper-padding">
        {showButtons && (
          <Button
            className="absolute left-0 hidden xl:inline-block w-14 h-14 group-hover:opacity-100 
                        transition ease-in-out duration-300 border-transparent  
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
          spaceBetween={12}
          slidesPerView={11}
          // onSwiper={swiper => {
          //     swiperRef.current = swiper;
          // }}
          loop
          onSwiper={setSwiperRef}
        >
          {slides.map((slide, index) => {
            // if (!property.hiResImageLink) return;

            return (
              <UiSlider.Slide
                className="flex flex-col justify-around items-center min-w-[90px] "
                key={slide.id}
              >
                <div className=" border-2 border-gray-200 rounded-full overflow-hidden w-[90px] h-[90px] mb-4">
                  <div className="relative w-full h-full flex justify-center items-center">
                    {isImageLoading && (
                      <div className="absolute inset-0 z-1 w-full h-full bg-white">
                        <div className="w-full h-full bg-gray-300 rounded animate-pulse-fast" />
                      </div>
                    )}

                    <UiLink href={""}>
                      <UiImage
                        className="rounded-lg zoom-card-image cursor-pointer"
                        src={slide.img}
                        alt={slide.title}
                        width={140}
                        height={140}
                        quality={75}
                        onLoadingComplete={() => setIsImageLoading(false)}
                      />
                    </UiLink>
                  </div>
                </div>
                <UiLink href={""}>
                  <span className="mt-4 text-base font-medium hover:text-accent-default cursor-pointer transition ease-in-out duration-300 block">
                    {slide.title}
                  </span>
                  <span className="mt-2 text-sm text-center text-subtitleColor font-medium hover:text-accent-default cursor-pointer transition ease-in-out duration-300 block">
                    {slide.subtitle}
                  </span>
                </UiLink>
              </UiSlider.Slide>

              //   <UiSlider.Slide className="bg-white rounded-xl">
              //     <UiLink
              //       href={`/property/${slide.id}`}
              //       className="h-full relative"
              //     >
              //       <div className="bg_image_container">
              //         <UiImage

              //         />
              //       </div>
              //     </UiLink>
              //   </UiSlider.Slide>
            );
          })}
        </UiSlider>
        {showButtons && (
          <Button
            className="absolute hidden xl:inline-block top-1/2 right-0 w-14 h-14 group-hover:opacity-100 
                        transition ease-in-out duration-300  rounded-full border-transparent
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
  CircleSlider.displayName = "CircleSlider";
}

export default CircleSlider;
