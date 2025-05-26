import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      })
    );
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {user, setUser, loading, setLoading};
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
