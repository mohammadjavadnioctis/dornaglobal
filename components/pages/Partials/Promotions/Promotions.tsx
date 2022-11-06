import React, { FC, memo } from "react";
import UiSlider from "~/lib/UiSlider";
import SwiperClass, { FreeMode, Navigation, Thumbs } from "swiper";
import { isDev } from "~/utils/helpers";
import UiImage from "~/lib/Image";
import { AiOutlineRight } from "react-icons/ai";

const sampleData = [
  {
    name: "firstPromotion",
    label: "First Promotion",
    img: "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fskycrapper.jpg?alt=media&token=11ae9005-ad93-42dc-b03f-c73ed933ba9e",
    href: "",
    id: "1",
  },
  {
    name: "secondPromotion",
    label: "Second Promotion",
    img: "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fskycrapper.jpg?alt=media&token=11ae9005-ad93-42dc-b03f-c73ed933ba9e",
    href: "",
    id: "2",
  },
  {
    name: "thirdPromotion",
    label: "Third Promotion",
    img: "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fskycrapper.jpg?alt=media&token=11ae9005-ad93-42dc-b03f-c73ed933ba9e",
    href: "",
    id: "3",
  },
  {
    name: "fourthPromotion",
    label: "Fourth Promotion",
    img: "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fskycrapper.jpg?alt=media&token=11ae9005-ad93-42dc-b03f-c73ed933ba9e",
    href: "",
    id: "4",
  },
];

const Promotions: FC = () => {
  return (
    <div className="my-16">
      <div className="container  ">
        <UiSlider
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            height: "100%",
            margin: 0,
            paddingTop:'1rem',
            paddingBottom:'1rem',

          }}
          spaceBetween={10}
        //   navigation={true}
          slidesPerView={3}
          //   thumbs={{
          //     swiper:
          //       thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          //   }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {sampleData.map((data) => {
            const { img, label, name, id } = data;
            return (
              <UiSlider.Slide className=" cursor-pointer my-4 hover:shadow-[0_10px_40px_-30px_rgba(0,0,255,0.9)]">
                <div className="aspect-w-16 aspect-h-9 hover:shadow-[0_10px_40px_-30px_rgba(0,0,255,0.9)] group">
                  <div className="overflow-hidden">
                    <div className="relative w-full h-full ">
                      <UiImage src={img} layout="fill" />
                      <div className="content  relative z-10 h-full flex items-end pb-3 px-3 text-white">
                        <div className="w-full flex items-center justify-between group-hover:text-accent">

                            {label}
                            <AiOutlineRight className="w-8 h-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </UiSlider.Slide>
            );
          })}
        </UiSlider>
      </div>
    </div>
  );
};

if (isDev) {
  Promotions.displayName = "Promotions";
}

export default Promotions;
