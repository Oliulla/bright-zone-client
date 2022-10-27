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

  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  // update user profile
  const updateUserProfile = (name, photoURL) => {
    console.log(name, photoURL);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
  }

  // user login with email and password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login with github
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };


  // logout user
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // if(currentUser) {
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, createUser, logOut, logIn, logInWithGoogle, githubLogin, updateUserProfile };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
