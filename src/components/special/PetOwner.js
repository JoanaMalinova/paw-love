import { Navigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Loading } from "./Loading";
import { useEffect } from "react";

export function PetOwner({ children, pets, isLoading, setIsLoading }) {

    const { petId } = useParams();
    const user = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [user]);

    const currPet = pets.find((pet) => pet.petId === petId);

    if (currPet && currPet.ownerId !== user.uid && !isLoading) {
        console.log('im in!')
        return <Navigate to={`/pet-cave/${petId}`} replace />
    }

    return (
        <>
            {isLoading ? <Loading /> : children}
        </>
    )

}