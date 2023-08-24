import { Navigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function PetOwner({ children, pets }) {

    const { petId } = useParams();
    const user = useContext(AuthContext);

    const currPet = pets.find((pet) => pet._id == petId);

    if (currPet && currPet._ownerId !== user.uid) {
        return <Navigate to={`/pet-cave/${petId}`} replace />
    }

    return children;
}