import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.config";
const firebaseAuthentication = () => {
    initializeApp(FirebaseConfig);
}

export default firebaseAuthentication;