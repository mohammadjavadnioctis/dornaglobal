import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  signOut,
} from "firebase/auth";
import nookies from "nookies";
import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "~/utils/config/firebase";

interface AuthContextType {
  user: User | null;
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
  loading: true
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

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
      // console.log('user from context: ', user)

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
    <AuthContext.Provider value={{ user, signIn, signUp, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
