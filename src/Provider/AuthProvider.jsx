import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);

    // Sign Up
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Sign Out
    const logOut = () => {
        return signOut(auth);
    }

    // Observer
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscriber();
        }
    }, [])

    const authInfo = {
        signUp,
        signIn,
        googleLogin,
        user,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;