import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firsebase/Firesebase.config";

const googleprovaider = new GoogleAuthProvider();
const githubprovaider = new GithubAuthProvider();

const AuthProvaider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  // sign up //

  const createUserWithEmailAndPasswordfunc = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in //
  const signInWithEmailAndPasswordfunc = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google pop up //

  const signInWithemailPopupfunc = () => {
    setloading(true);
    return signInWithPopup(auth, googleprovaider);
  };

  // sign in with github pop up //

  const signInWithgithubPopupfunc = () => {
    setloading(true);
    return signInWithPopup(auth, githubprovaider);
  };
  // sign out //

  const signoutuserfunc = () => {
    setloading(true);
    return signOut(auth);
  };

  // forget password //
  const sendPasswordResetEmailfunc = (email) => {
    setloading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // update profile //

  const updateProfilefund = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

//   send email verification //

const sendEmailVerificationfunc = ()=>{
    return sendEmailVerification(auth.currentUser)
}

  const authinfo = {
    user,
    setuser,
    createUserWithEmailAndPasswordfunc,
    signInWithEmailAndPasswordfunc,
    signInWithemailPopupfunc,
    signInWithgithubPopupfunc,
    signoutuserfunc,
    sendPasswordResetEmailfunc,
    updateProfilefund,
    sendEmailVerificationfunc,
    loading,
    setloading,
  };

 useEffect(()=>{
  const unsuscrib =  onAuthStateChanged(auth,(curruser)=>{
    console.log(curruser)
    setuser(curruser)
    setloading(false)
  })
  return ()=>{
    unsuscrib()
  }
 },[])

  return <AuthContext value={authinfo}>{children}</AuthContext>;
};

export default AuthProvaider;
