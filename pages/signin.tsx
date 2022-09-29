import React, { FC, memo } from "react";
import SignIn from "~/components/pages/Auth/SignIn";
import { useAuth } from "~/contexts/AuthContext";
import { isDev } from "~/utils/helpers";

const SignInPage: FC = memo(() => {
  return (
    <div>
      <div>
        <SignIn />
      </div>
    </div>
  );
});

if (isDev) {
  SignInPage.displayName = "SignInPage";
}

export default SignInPage;
