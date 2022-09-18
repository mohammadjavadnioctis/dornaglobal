import React from "react";
import { BiChevronDown } from "react-icons/bi";
import HeroCategries from "~/components/HeroCategories/HeroCategries";
import MainSearchBar from "~/components/MainSearchBar/MainSearchBar";
import UiImage from "~/lib/Image";

const HomeSlider = () => {
  return (
    <>
      <div className="overlay absolute w-full h-full top-0 left-0 bg-black bg-opacity-[0.7] z-[2] flex justify-center items-end">
        <div className="content w-full p-4 h-full flex flex-col items-center justify-center">
          <div className="w-[60%] max-w-[600px]">
            <div className="w-full flex justify-center">
              {/* logo */}
              <UiImage
                src={"/images/logo.png"}
                width={200}
                height={200}
                className="cursor-pointer "
              />
            </div>
            <h2 className="text-4xl font-medium text-white text-center mt-11 mb-8">
              Discover Your Place To <span className="">Live...</span>
            </h2>
            <MainSearchBar />
            <HeroCategries />
          </div>
          <div className="more  absolute bottom-4 text-white flex flex-col justify-center items-center ">
            <span className="text-sm text-white">Scroll for more</span>
            <BiChevronDown className="w-10 h-10" />
          </div>
        </div>
        {/* <Head
          title="Discover Your Place To Live"
          subtitle="GET STARTED IN FEW CLICKS"
          titleClassnames="text-white"
          subtitleClassNames="text-white"
        /> */}
      </div>
      <div className="slider relative w-full snap-end h-screen">
        <UiImage
          id="bg"
          src="https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/gran.jpg?alt=media&token=0662cbe5-6169-474d-bb41-88f4ed02a5d0"
          // src={`https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/SeekPng.com_world-map-png-image_2573292.png?alt=media&token=c8fd5965-2263-4d6f-9d68-a3b79105de28`}
          layout="fill"
        />
      </div>
    </>
  );
};

export default HomeSlider;
