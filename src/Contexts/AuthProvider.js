import React, { useEffect } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  
  // user login with email and password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (name, photoURL) => {
    // console.log(name, photoURL);
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // login with google
  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // login with github
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    logOut,
    logIn,
    logInWithGoogle,
    githubLogin,
    updateUserProfile,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
