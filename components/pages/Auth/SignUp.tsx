import React, { FC, memo } from "react";
import SignUpForm from "~/components/auth/SignUpForm";
import { useAuth } from "~/contexts/AuthContext";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";

const SignUpComp: FC = memo(() => {
  return (
    <div className="container h-screen max-h-[800px] grid grid-cols-1 md:grid-cols-2 ">
      <div className="relative hidden md:inline-block">
        <UiImage
          src={
            "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2FReal%20Estate.jpg?alt=media&token=02e41163-8df9-4e41-a9fb-930ccf42c1e5"
          }
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="pb-4 pt-12 px-3 md:px-11  flex flex-col justify-between">
        <h1 className="text-3xl font-normal font-['Playfair_Display'] text-[#222222]">
          Register to Dorna Global
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
});

if (isDev) {
  SignUpComp.displayName = "SignUpComp";
}

export default SignUpComp;
