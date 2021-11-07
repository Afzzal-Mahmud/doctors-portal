import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";

import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase()
function useFirebase() {
    const [user,setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const auth = getAuth()

    /* registar user */
    function registerUser(email,password){
        /* when user click the register button the page is on loading state */
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user)
            setUser(user)
        }).catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('create user error',errorCode,errorMessage)
        }).finally(() =>{
            /* after loading the page loading is false */
            setIsLoading(false)
        })
    }

    /* logIn user */
    function logInUser(email,password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // setUser()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('login user error',errorCode,errorMessage)
            }).finally(() =>{
                /* after loading the page loading is false */
                setIsLoading(false)
            });

    }
    
    /* logOut User */
    function logOut(){
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => { 
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('logOut user error',errorCode,errorMessage)
          }).finally(() =>{
            /* after loading the page loading is false */
            setIsLoading(false)
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
            setIsLoading(false)
          });
          return () => unsubscribe
    },[])
    return {
        user,
        registerUser,
        logInUser,
        isLoading,
        logOut
    }
}
export default useFirebase