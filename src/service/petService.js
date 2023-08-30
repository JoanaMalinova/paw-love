import {
    collection,
    doc,
    setDoc,
    getFirestore,
    getDocs,
    getDoc,
    query,
    where,
    Timestamp,
    orderBy,
    updateDoc,
    deleteDoc
} from "firebase/firestore";
import { firebaseApp } from "../firebase_setup/firebase";
import { history } from "../helpers/history";


const db = getFirestore(firebaseApp);


export async function getPet(id) {

    const docRef = doc(db, "pets", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();

    } else {
        throw new Error("No such document!")
    }
}

export async function getAll() {

    const result = [];
    const q = query(collection(db, "pets"), orderBy("created"));

    const snapshots = await getDocs(q);
    snapshots.forEach((currQS) => result.push(currQS.data()));

    return result;
}

export async function getMy(userId) {

    const result = [];
    const q = query(collection(db, "pets"), where("ownerId", "==", userId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((currQS) => result.push(currQS.data()));

    return result;

}

export async function editStory(id, data) {

    const petRef = doc(db, "pets", id);

    try {
        await updateDoc(petRef, data);

    } catch (err) {

        console.log(err.message)
        history.navigate('/error');

    }

}

export async function createStory(data, ownerId) {

    const petRef = doc(collection(db, "pets"));

    try {
        await setDoc(petRef, {
            petId: petRef.id,
            ownerId,
            name: data.name,
            age: data.age,
            petStory: data.petStory,
            gender: data.gender,
            imageUrl: data.imageUrl,
            breed: data.breed,
            created: Timestamp.now(),
            likes: 0
        });

    } catch (err) {
        console.log(err.message);
        history.navigate('/error');
    }

}

export async function deleteStory(id) {
    try {

        await deleteDoc(doc(db, "pets", id));

    } catch (err) {

        console.log(err.message);
        history.navigate('/error');

    }

}











