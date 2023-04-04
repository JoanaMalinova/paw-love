import { useEffect } from "react";
import { getAll } from "../../service/petService";
import Card from "./Card";

export default function PetCave({setPets, pets}) {   

    useEffect(() => {
        getAll()
            .then(result => setPets(result));
    }, []);

    return (
        <div className="cave-wrapper">
            {pets.length ? pets.map(pet => <Card key={pet._id} pet={pet} />) : <p className="no-story-yet">No stories yet</p> }
        </div>
    )
}