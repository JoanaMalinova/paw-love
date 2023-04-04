import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getMy } from "../../service/petService";
import Card from "../PetCave/Card";

export default function MyCave() {

    const [myPets, setMyPets] = useState([]);

    const { userId } = useAuth();

    useEffect(() => {
        getMy(userId)
            .then(result => setMyPets(result));
    }, []);

    return (
        <div className="cave-wrapper">
            {myPets.length ? myPets.map(pet => <Card key={pet._id} pet={pet} />) : <p className="no-story-yet">No stories yet</p> }           
        </div>
    )
}