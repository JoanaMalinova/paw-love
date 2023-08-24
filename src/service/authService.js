import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { firebaseApp } from "../firebase_setup/firebase";

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export const signUp = async (username, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        await updateProfile(user, { displayName: username });

        const userRef = doc(collection(db, "users"));
        await setDoc(userRef, {
            userId: userRef.id,
            email,
            username
        });

        localStorage.setItem('user', JSON.stringify(user));

        return user;
    } catch (error) {
        return { error: error.message }
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        localStorage.setItem('user', JSON.stringify(user));

        return user;
    } catch (error) {
        return { error: error.message }
    }
};

export const signOutUser = async () => {
    try {
        await signOut(auth);

        localStorage.clear();

        return true
    } catch (error) {
        return { error: error.message }
    }
};

