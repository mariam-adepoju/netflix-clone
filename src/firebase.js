// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3bd-GE5_UHtZ3oOpufUkUJGeZHEyHBMw",
    authDomain: "netflix-clone-20c03.firebaseapp.com",
    projectId: "netflix-clone-20c03",
    storageBucket: "netflix-clone-20c03.firebasestorage.app",
    messagingSenderId: "28330423829",
    appId: "1:28330423829:web:672f0277fad3151016001c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: name,
            authProvider: "local",
            email: email
        });
        return user;
    } catch (error) {
        // console.log(error);
        toast.error(error.code.split("/")[1].replace(/-/g, " "))
    }
}
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        // console.log(error)
        toast.error(error.code.split("/")[1].replace(/-/g, " "))
    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, login, signup, logout }