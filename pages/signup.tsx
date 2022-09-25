import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";
import SignUpComp from "~/components/pages/Auth/SignUp";

const SignUp: FC = memo(() => {
  return (
    <div>
      <div>
        <SignUpComp />
      </div>
    </div>
  );
});

if (isDev) {
  SignUp.displayName = "SignUp";
}

export default SignUp;
