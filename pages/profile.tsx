import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC, memo, useEffect } from "react";
import { useAuth } from "~/contexts/AuthContext";
import { isDev } from "~/utils/helpers";
import nookies from 'nookies'
import { admin } from "~/utils/config/firebaseAdmin"; 
import Profile from "~/components/pages/profile/Profile";
import { UserDashboardProvider } from "~/contexts/UserDashboardContext";



export interface ProfileProps {}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
  try {
    const cookies = nookies.get(ctx);
    const token = await admin.auth().verifyIdToken(cookies.token);

    // the user is authenticated!
    const { uid, email } = token;

    // FETCH STUFF HERE!! 🚀



    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    console.log('this is error; ', err)
    ctx.res.writeHead(302, { Location: '/signin' });
    ctx.res.end();

    // `as never` prevents inference issues
    // with InferGetServerSidePropsType.
    // The props returned here don't matter because we've
    // already redirected the user.
    return { props: {} as never };
  }
}



const profile: FC = memo(() => {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  if(!user && !loading){
    router.push('/signin')
  }
  useEffect(()=>{
    if(!user && !loading){
      router.push('/signin')
    }
  },[user, loading])


  return (
    <div>
      {/* {
      loading ? <h2>loading</h2> :
     <div> Heloo {user?.email} <span onClick={logout}>logout</span> </div>
      }
       */}
      <UserDashboardProvider >
        <Profile />
      </UserDashboardProvider> 

    </div>
  );
});

if (isDev) {
  profile.displayName = "Profile";
}

export default profile;
