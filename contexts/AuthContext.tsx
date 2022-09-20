import firebase from "~/utils/config/firebase";
import { createContext, useState } from "react";

const AuthContext = createContext<{ user: firebase.User | null }>({
  user: null,
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebase.User | null>(null);

  // handle auth logic here...

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
