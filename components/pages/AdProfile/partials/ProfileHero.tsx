import { memoryUsage } from "process";
import React, { FC, memo } from "react";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";

const ProfileHero: FC = memo(() => {
  return (
    <div className="relative">
      <div className="image_container relative h-52 w-full border border-orange-400">
        <UiImage
          src={
            "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Ftierra-mallorca-JXI2Ap8dTNc-unsplash.jpg?alt=media&token=41326320-2f2a-4c68-b51d-8a72724f7ad6"
          }
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="contents_ absolute w-full h-full top-0 left-0 flex items-end pb-7 bg-black bg-opacity-[0.5] z-10 text-white">
        <div className="info_container container !my-0 w-full flex justify-between">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Test Admin</h2>
            <h3>test@gmail.com</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">100</h3>
            <h2 className="font-sans">Properties</h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">20 </h3>
            <h2>Pending properties</h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">3</h3>
            <h2>NOTIFICATIONS</h2>
          </div>
        </div>
      </div>
    </div>
  );
});

if (isDev) {
  ProfileHero.displayName = "ProfileHero";
}

export default ProfileHero;
