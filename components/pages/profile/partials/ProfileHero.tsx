import { memoryUsage } from "process";
import React, { FC, memo } from "react";
import { useAuth } from "~/contexts/AuthContext";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";

const ProfileHero: FC = memo(() => {
  const {user} = useAuth()
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
      <div className="contents_ absolute w-full h-full top-0 left-0 flex flex-col md:flex-row justify-end md:justify-start items-center md:items-end pb-7 bg-black bg-opacity-[0.5] z-10 text-white">
      <div className="flex md:hidden flex-col items-center justify-center mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">{user?.displayName}</h2>
            <h3 className="text-xl">{user?.email}</h3>
          </div>
        <div className="info_container container !my-0 w-full flex justify-between flex-wrap">
          <div className="hidden md:flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">{user?.displayName}</h2>
            <h3>{user?.email}</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">3</h3>
            <h2 className="font-sans">LISTINGS</h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">5 </h3>
            <h2>MESSAGES</h2>
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
