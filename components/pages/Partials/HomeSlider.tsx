import React from "react";
import UiImage from "~/lib/Image";

const HomeSlider = () => {
  return (
    <>
      <div className="overlay absolute w-full h-full top-0 left-0 bg-black opacity-[0.35] z-[2]" />
      <div className="slider relative border-2 border-blue-400 w-full h-screen">
        <UiImage
          id="bg"
          src={`https://firebasestorage.googleapis.com/v0/b/dorna-dev.appspot.com/o/houzez-header-1.jpg?alt=media&token=3c643946-e25e-457c-9a16-3c03f77e5bb7`}
          layout="fill"
        />
      </div>
    </>
  );
};

export default HomeSlider;
