import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider,updateProfile  } from "firebase/auth";

import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase()
function useFirebase() {
    const [user,setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [err,setErr] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    /* registar user */
    function registerUser(email,password,location,history,userName){
        /* when user click the register button the page is on loading state */
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential => {
            const user = userCredential.user;
            user.name = userName
            setUser(user)
            /* send user name to firebase */
            updateProfile(auth.currentUser, {
                displayName: userName
              }).then(() => {
                // Profile updated!
              }).catch((error) => {
                console.log(error.message)
              });
            setErr('')
            /* redirect to where user wants to go */
            const destination = location?.state?.from || '/';
            history.replace(destination)
            console.log('create user console',user)

        }).catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setErr(errorMessage)
            console.log('create user error',errorCode,errorMessage)
        }).finally(() =>{
            /* after loading the page loading is false */
            setIsLoading(false)
        })
    }

    /* logIn user */
    function logInUser(email,password,location,history) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                const user = userCredential.user;
                history.replace(destination)
                setErr('')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr('password is incorrect or you do not have any account')
                console.log('login user error',errorCode,errorMessage)
            }).finally(() =>{
                /* after loading the page loading is false */
                setIsLoading(false)
            });
    }

    /* google log in */

   function goolgeSignIn(location,history) {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
    
    .then((result) => {
    const destination = location?.state?.from || '/'
      const user = result.user;
      history.replace(destination)
      setErr('')

    }).catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      setErr(errorMessage)
    }).finally(() =>{
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
        goolgeSignIn,
        isLoading,
        err,
        logOut
    }
}
export default useFirebase