import { useRouter } from "next/router";
import React, { FC, memo, useEffect } from "react";
import { useAuth } from "~/contexts/AuthContext";
import { isDev } from "~/utils/helpers";

export interface ProfileProps {}

const profile: FC = memo(() => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(()=>{
      if(!user){
        router.push('/signin')
      }
    },
    [])


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
