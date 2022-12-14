import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  signOut,
} from "firebase/auth";
import { getDocs, query, where, collection } from "firebase/firestore";
import nookies from "nookies";
import { createContext, useEffect, useState, useContext } from "react";
import { auth, db } from "~/utils/config/firebase";
import isObjectEmpty from "~/utils/helpers/isObjectEmpty";
import { UserType } from "~/utils/types";

interface AuthContextType {
  user: User | null;
  userFromFirebase: UserType | null;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
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

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
