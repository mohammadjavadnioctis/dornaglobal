import React, { FC, memo } from "react";
import SignInForm from "~/components/auth/SignInForm";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";

const SignIn: FC = memo(() => {
  return (
    <div className="container h-screen grid grid-cols-2 ">
      <div className="relative">
        <UiImage
          src={
            "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2FReal%20Estate.jpg?alt=media&token=02e41163-8df9-4e41-a9fb-930ccf42c1e5"
          }
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="pb-4 pt-12 px-11  flex flex-col justify-between">
        <h1 className="text-3xl font-normal font-['Playfair_Display'] text-[#222222]">
          Login To Dorna Global
        </h1>
        <SignInForm />
      </div>
    </div>
  );
});

if (isDev) {
  SignIn.displayName = "SignUp";
}
SignIn;

export default SignIn;
