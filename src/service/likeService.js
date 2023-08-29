import { doc, getFirestore, updateDoc, increment } from "firebase/firestore";
import { firebaseApp } from "../firebase_setup/firebase";
const db = getFirestore(firebaseApp);

export async function checkIfLiked(data) {

}

export async function likePet(data) {
    const petRef = doc(db, "pets", data.petId);

    await updateDoc(petRef, {
        like: increment(1)
    });

    const userLikeRef = doc(db, "users", data.userID);

}

