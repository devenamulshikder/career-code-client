/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signinUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const signoutUser = ()=>{
    setLoading(true);
    return signOut(auth);
  }
  const provider = new GoogleAuthProvider();
  const socialSignin = ()=>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }
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
  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signinUser,
    signoutUser,
    socialSignin,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
