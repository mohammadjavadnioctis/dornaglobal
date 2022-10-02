import { useRouter } from "next/router";
import React, { FC, memo } from "react";
import { useAuth } from "~/contexts/AuthContext";
import { isDev } from "~/utils/helpers";

export interface ProfileProps {}

const profile: FC = memo(() => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <div>
      Heloo {user?.email} <span onClick={logout}>logout</span>
    </div>
  );
});

if (isDev) {
  profile.displayName = "Profile";
}

export default profile;
