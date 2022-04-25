import firebaseAuthentication from "../Firebase/Firebase.initialize"
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isloading, setIsloading] = useState(true)
    const [admin, setAdmin] = useState()
    // const [check, setCheck] = useState();
    const [courses, setCourses] = useState([]);


    const [authError, setAuthError] = useState('');
    const [error, setError] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signWithgoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                saveUser(result.user.email, result.user.displayName, 'PUT')
                console.log(result)
                setUser(result.user)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

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

    const registerUser = (email, name, password, location, history) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                //Save user in database
                saveUser(email, name, 'POST');
                //update profile
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                const destination = location?.state?.from || '/'
                history.replace(destination)

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || '/'
                history.replace(destination)

                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
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
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })


    }, [user.email])


    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const saveUser = (email, displayName, method) => {

        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    // const checkadmin = (email, password) => {
    //     const user = { email, password }
    //     if (admin === user) {
    //         setCheck(user)
    //     }
    // }
    return {
        user,
        admin,
        error,
        signWithgoogle,
        LogOut,
        registerUser,
        loginUser,
        isloading,
        authError,
        saveUser,
        courses
    }




}
export default useFirebase;