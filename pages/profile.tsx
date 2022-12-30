import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC, memo, useEffect } from "react";
import { useAuth } from "~/contexts/AuthContext";
import { isDev } from "~/utils/helpers";
import nookies from 'nookies'
import { admin, adminDb } from "~/utils/config/firebaseAdmin";
import ProfilePage from "~/components/pages/profile/Profile";
import { UserDashboardProvider } from "~/contexts/UserDashboardContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "~/utils/config/firebase";



export interface ProfileProps { }


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let propsCookies: any;
  try {
    const cookies = nookies.get(ctx);
    propsCookies = cookies
    // const token = await admin.auth().verifyIdToken(cookies.token);

    // the user is authenticated!
    // const { uid, email } = token;

    // FETCH STUFF HERE!! 🚀
    const q = query(
      collection(db, "testproperties"),
      // where("user.email", "==", email)
    );

    const querySnapshot = await getDocs(q);
    const listedProperties = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const parsedListedProperties = JSON.parse(JSON.stringify(listedProperties))
    return {
      props: { listedProperties: parsedListedProperties,  },
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
    return { props: { propsCookies } };
  }
}

export interface ProfilePageType {
  listedProperties: any;
}

const Profile: FC<ProfilePageType> = memo((props) => {
  const {listedProperties} = props
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  if (!user && !loading) {
    router.push('/signin')
  }
  useEffect(() => {
    if (!user && !loading) {
      router.push('/signin')
    }
  }, [user, loading])


  return (
    <div>
      {/* {
      loading ? <h2>loading</h2> :
     <div> Heloo {user?.email} <span onClick={logout}>logout</span> </div>
      }
       */}
      <UserDashboardProvider >
        {
          (user && !loading) ? <ProfilePage listedProperties={listedProperties}/> : <h2>loading</h2>
        }
      </UserDashboardProvider>

    </div>
  );
});

if (isDev) {
  Profile.displayName = "Profile";
}

export default Profile;
