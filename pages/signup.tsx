import React, { FC, memo, useEffect } from "react";
import { isDev } from "~/utils/helpers";
import SignUpComp from "~/components/pages/Auth/SignUp";
import { useAuth } from "~/contexts/AuthContext";
import { useRouter } from "next/router";

const SignUp: FC = memo(() => {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [router, user]);

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
