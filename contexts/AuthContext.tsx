import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDocs, query, where, collection, doc, updateDoc, setDoc } from "firebase/firestore";
import nookies from "nookies";
import { createContext, useEffect, useState, useContext } from "react";
import { auth, db } from "~/utils/config/firebase";
import isObjectEmpty from "~/utils/helpers/isObjectEmpty";
import { UserType } from "~/utils/types";

interface AuthContextType {
  user: User | null;
  userFromFirebase: UserType | null;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string, NameSurname: string, phoneNo: string) => void;
  logout: () => void;
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => null,
  signUp: () => null,
  logout: () => null,
  loading: true,
  userFromFirebase: null
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const [ userFromFirebase, setUserFromFirebase ] = useState(null)
  const [loading, setLoading] = useState(true);

  const signUp = async (email: string, password: string, NameSurname: string, phoneNo: string) => {
    try{

      const userCreatesReponse = await createUserWithEmailAndPassword(auth, email, password);
      // updating the user's name on the authentication module of the firebase
       await updateProfile(userCreatesReponse.user, {
          displayName: NameSurname})
          // adding the user to the firestore
          const userRef = doc(db, `users/${userCreatesReponse.user.uid}`);
          const response = await setDoc(userRef, {
            email: email,
            emailVarified: userCreatesReponse.user?.emailVerified ?? null,
            isAnonymous: false,
            photoURL: null,
            providerData: userCreatesReponse.user?.providerData ?? null,
            providerId: userCreatesReponse.user?.providerId ?? null,
            uid: userCreatesReponse.user?.uid ?? null,
            displayName: NameSurname,
            phoneNo,
            isPhoneNoVarified: false
          })
    }catch (err) {
      console.error('error from registering', err)
    }
  };


  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  const fetchUserFromFirestore = async () => {
    const q = query(
      collection(db, "users"),
      
      where("email", "==", user?.email),
      // where("pageViewCount", "==", 140)
    );

    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    // @ts-ignore
    setUserFromFirebase(data[0] as User);

  };
  

  useEffect(() => {
    console.log('user is : ', user)
    if(user && !isObjectEmpty(user)){
      fetchUserFromFirestore()
    }

  } ,[user])

  useEffect(() => {
    console.log('userFromFirebase', userFromFirebase)
  } ,[userFromFirebase])
  // TODO: remove nookie token on logout

  const logout = async () => {
    setLoading(true)
    setUser(null);
    setLoading(false)
    await signOut(auth);
  };

  // listen for token changes
  // call setUser and write new token as a cookie
  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {

      if (!user) {
        setUser(null);
        setLoading(false)
        nookies.set(undefined, "token", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, "token", token, { path: "/" });
      }
      setLoading(false);
    });
  }, []);
  useEffect(() => {
  }, [user]);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout, loading, userFromFirebase }}>
      {children}
    </AuthContext.Provider>
  );
}
