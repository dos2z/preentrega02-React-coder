import { useState } from "react";
import { auth } from ".";

import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";


export const authentication = () => {


 

  const [token, setToken] = useState()
  const [userAuth, setUser] = useState()
  const [credential, setCredential] = useState()
  const [success, setSuccess] = useState(false)
  const provider = new GoogleAuthProvider()

  //-------------GOOGLE
  const runSingInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {        
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        setCredential(credential)
        const token = credential.accessToken;
        setToken(token)
        const user = result.user;
        setUser(user)
        setSuccess(true)


      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  }
  //----------------------------------------


  //--------------------------------------
  //SingOut
  const exitSesion = () => {
    const user = auth.currentUser;
    console.log(user);
    signOut(auth).then(() => {
        
        const user = auth.currentUser;
        
        // Sign-out successful.
        setSuccess(false)
        
      }).catch((error) => {
        console.log(error);
        // An error happened.
      });
  }

  //------------------

  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      // ...
    } else {
      console.log("el usuario cerró sesión")
      // ...
    }
  });


  return {
    runSingInGoogle,
    token,
    userAuth,
    credential,
    success,
    exitSesion,
    signOut
  }
}









