import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC, memo, useEffect } from "react";
import { useAuth } from "~/contexts/AuthContext";
import { isDev } from "~/utils/helpers";
import nookies from 'nookies'
import { admin } from "~/utils/config/firebaseAdmin"; 
import Profile from "~/components/pages/profile/Profile";
import { UserDashboardProvider } from "~/contexts/UserDashboardContext";
import AdProfile from "~/components/pages/AdProfile/AdProfile";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "~/utils/config/firebase";



export interface ProfileProps {}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
  try {
    const cookies = nookies.get(ctx);
    const token = await admin.auth().verifyIdToken(cookies.token);

    // the user is authenticated!
    const { uid, email } = token;
    console.log('this is the token: ', token)
    // FETCH STUFF HERE!! 🚀
    const q = query(
      collection(db, "users"),
      where("email", "==", email)
    );
    
    const querySnapshot = await getDocs(q);
    const fetchedUserFromUsersList = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const parsedUser = JSON.parse(JSON.stringify(fetchedUserFromUsersList))
    console.log('parseduser',parsedUser)

    return {
      props: {userFromFireStore : parsedUser},
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

export interface AdminProfileType {
  userFromFireStore: any;
}

const AdminProfile: FC<AdminProfileType> = memo((props) => {
  const {userFromFireStore} = props
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  if(!userFromFireStore && !userFromFireStore?.isAdmin && !loading){
    router.push('/signin')
  }
  useEffect(()=>{
    if(!userFromFireStore && !userFromFireStore?.isAdmin && !loading){
      router.push('/signin')
    }
  },[userFromFireStore, loading])

  return (
    <div>
      {/* {
      loading ? <h2>loading</h2> :
     <div> Heloo {user?.email} <span onClick={logout}>logout</span> </div>
      }
       */}
      <UserDashboardProvider >
        <AdProfile />
      </UserDashboardProvider> 

    </div>
  );
});

if (isDev) {
  AdminProfile.displayName = "Profile";
}

export default AdminProfile;
