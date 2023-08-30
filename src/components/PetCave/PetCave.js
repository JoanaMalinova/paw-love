import { useEffect } from "react";
import { getAll } from "../../service/petService";
import Card from "./Card";
import styles from "../../styles/PetCave.module.css";
import { Loading } from "../special/Loading";
import { useNavigate } from "react-router-dom";


export default function PetCave({ setPets, pets, isLoading, setIsLoading }) {

    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        getAll()
            .then((result) => {
                setPets(result);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setIsLoading(false);
                navigate('/error')
            })
    }, []);

    const cave = (<div className={styles["cave-wrapper"]}>
        {(pets && pets.length) ? pets.map(pet => <Card key={pet.petId} pet={pet} />) : <p className={styles["no-story-yet"]}>No stories yet</p>}
    </div>);

    return (
        <div className={styles["main-wrapper"]}>
            {isLoading ? <Loading /> : cave}
        </div>
    )
}