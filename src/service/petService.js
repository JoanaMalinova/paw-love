import { collection, doc, setDoc, getFirestore, getDocs } from "firebase/firestore";
import { firebaseApp } from "../firebase_setup/firebase";


const db = getFirestore(firebaseApp);


export function getPet(id) {
    // return requester.get(baseUrl + `data/pets/${id}`);
}

export async function getAll() {
    const result = [];
    const snapshots = await getDocs(collection(db, "pets"))
    snapshots.forEach((currQS) => result.push(currQS.data()));
    return result;
}

export function getMy(userId) {
    // return requester.get(baseUrl + `data/pets?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function editStory(id, data) {
    // requester.put(baseUrl + `data/pets/${id}`, data);
}

export async function createStory(data, ownerId) {

    const petRef = doc(collection(db, "pets"));

    await setDoc(petRef, {
        petId: petRef.id,
        ownerId,
        name: data.name,
        age: data.age,
        petStory: data.petStory,
        gender: data.gender,
        imageUrl: data.imageUrl,
        breed: data.breed
    });
}

export async function deleteStory(id) {
    // requester.del(baseUrl + `data/pets/${id}`);
}











