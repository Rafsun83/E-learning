import firebaseAuthentication from "../Firebase/Firebase.initialize"
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isloading, setIsloading] = useState(true)

    const [error, setError] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signWithgoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     console.log(result)
        //     setUser(result.user)
        // })
        // .catch(error => {
        //     console.log(error.message)
        //     setError(error.message)
        // })

    }
    const LogOut = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(() => {

            })
            .finally(() => setIsloading(false));

    }

    const registerUser = (email, password, location, history) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || '/'
                history.replace(destination)
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setIsloading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || '/'
                history.replace(destination)
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsloading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsloading(false)

        })
    }, [])
    return {
        user,
        error,
        signWithgoogle,
        LogOut,
        registerUser,
        loginUser,
        isloading
    }




}
export default useFirebase;