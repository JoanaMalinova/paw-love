import { onAuthStateChanged, getAuth } from "firebase/auth";
import { firebaseApp } from "../firebase_setup/firebase";
import { useEffect, useState } from "react";

export function useAuth() {

    const auth = getAuth(firebaseApp);
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })

        return unsubscribe
    }, [])

    return {
        user
    };
}