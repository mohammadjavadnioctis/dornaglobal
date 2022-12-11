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
import { AdminDashboardProvider } from "~/contexts/AdminDashboardContext";



export interface ProfileProps { }


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  try {
    const cookies = nookies.get(ctx);
    const token = await admin.auth().verifyIdToken(cookies.token);

    // the user is authenticated!
    const { uid, email } = token;
    // FETCH STUFF HERE!! 🚀

    // fetch current user
    const q = query(
      collection(db, "users"),
      where("email", "==", email)
    );

    const querySnapshot = await getDocs(q);
    const fetchedUserFromUser = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const parsedUser = JSON.parse(JSON.stringify(fetchedUserFromUser))

    // fetch unvarified properties list
    const uvarifiedPropertiesList = query(
      collection(db, "testproperties"),
      where("isVarified", "==", false)
    );

    const uvarifiedPropertiesListSnapShot = await getDocs(uvarifiedPropertiesList);
    const fetchedUnvarifiedProperties = uvarifiedPropertiesListSnapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const parsedUnvarifiedPropertiesList = JSON.parse(JSON.stringify(fetchedUnvarifiedProperties))



    return {
      props: {
        userFromFireStore: parsedUser,
        unvarifiedPropertiedList: parsedUnvarifiedPropertiesList
      },
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
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
  unvarifiedPropertiedList: any;
}

const AdminProfile: FC<AdminProfileType> = memo((props) => {
  const { userFromFireStore, unvarifiedPropertiedList } = props
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  if (!userFromFireStore && !userFromFireStore?.isAdmin && !loading) {
    router.push('/signin')
  }
  useEffect(() => {
    if (!userFromFireStore && !userFromFireStore?.isAdmin && !loading) {
      router.push('/signin')
    }
  }, [userFromFireStore, loading])

  return (
    <div>
      {/* {
      loading ? <h2>loading</h2> :
     <div> Heloo {user?.email} <span onClick={logout}>logout</span> </div>
      }
       */}
      <AdminDashboardProvider >
        <AdProfile {...props}/>
      </AdminDashboardProvider>

    </div>
  );
});

if (isDev) {
  AdminProfile.displayName = "Profile";
}

export default AdminProfile;
