import { useRouter } from "next/router";
import React, { FC, memo, useEffect } from "react";
import SignIn from "~/components/pages/Auth/SignIn";
import { useAuth } from "~/contexts/AuthContext";
import { isDev } from "~/utils/helpers";

const SignInPage: FC = memo(() => {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

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
