import { doc, getFirestore, updateDoc, increment, getDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { firebaseApp } from "../firebase_setup/firebase";

const db = getFirestore(firebaseApp);
const userRef = (data) => doc(db, "users", data.userId);

export async function checkIfLiked(data) {
    let result;

    const userSnap = await getDoc(userRef(data));

    userSnap.data().likes?.includes(data.petId) ? result = 1 : result = 0

    return result;
}

export async function likePet(data) {

    const liked = await checkIfLiked(data);

    const petRef = doc(db, "pets", data.petId);

    if (liked) {
        await updateDoc(petRef, {
            likes: increment(-1)
        });

        await updateDoc(userRef(data), {
            likes: arrayRemove(data.petId)
        });

    } else {
        await updateDoc(petRef, {
            likes: increment(1)
        });
        await updateDoc(userRef(data), {
            likes: arrayUnion(data.petId)
        });
    }

    return !liked;
}

