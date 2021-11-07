import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";

import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase()
function useFirebase() {
    const [user,setUser] = useState({})
    const auth = getAuth()

    /* registar user */
    function registerUser(email,password){
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user)
            setUser(user)
        }).catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('create user error',errorCode,errorMessage)
        })
    }

    /* logIn user */
    function logInUser() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // setUser()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('login user error',errorCode,errorMessage)
            });

    }
    
    /* logOut User */
    function logOut(){
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => { 
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('logOut user error',errorCode,errorMessage)
          });
    }
    /* onAuthStateChange to observ user*/
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
          });
          return () => unsubscribe
    },[])
    return {
        user,
        registerUser,
        logInUser,
        logOut
    }
}
export default useFirebase