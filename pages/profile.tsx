import { useRouter } from "next/router";
import React, { FC, memo, useEffect } from "react";
import { useAuth } from "~/contexts/AuthContext";
import { isDev } from "~/utils/helpers";

export interface ProfileProps {}

const profile: FC = memo(() => {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  useEffect(()=>{
    if(!user && !loading){
      router.push('/signin')
    }
  },[user, loading])


  return (
    <div>
      {
      loading ? <h2>loading</h2> :
     <div> Heloo {user?.email} <span onClick={logout}>logout</span> </div>
      }
    </div>
  );
});

if (isDev) {
  profile.displayName = "Profile";
}

export default profile;
