import { doc, getFirestore, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { firebaseApp } from "../firebase_setup/firebase";


const db = getFirestore(firebaseApp);


export async function postComment(data) {

    const commentPetRef = doc(db, "pets", data.petId);

    try {
        await updateDoc(commentPetRef, {
            comments: arrayUnion({
                comment: data.comment,
                username: data.username,
                created: Timestamp.now()
            })
        });
    } catch (err) {
        console.log(err);
    }

}